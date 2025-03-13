'use client';

import Results from '@/app/components/blog/main/blogsearch/Result';
import SearchBar from '@/app/components/blog/main/blogsearch/SearchBar';
import { useState, useEffect } from 'react';
import { callGet } from '@/app/utils/callApi';
import Pagination from '@/app/components/common/Pagination';

const BlogSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchPostTypes[]>([]);
  const [searchExecuted, setSearchExecuted] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const handleSearch = async (page = 0) => {
    setSearchExecuted(true);

    try {
      const response = await callGet(
        `/api/blog/search?query=${query}&page=${page}&size=9`,
      );
      if (response.isSuccess) {
        const {
          content,
          totalPages: responseTotalPages,
          totalElements,
        } = response.result;

        const transformedResults = content.map((post: any) => ({
          id: post.id,
          userId: post.userId,
          nickname: post.nickname,
          profileImageUrl: post.profileImageUrl,
          title: post.title,
          content: post.content,
          tags: post.tags,
          createdAt: post.createdAt,
          updatedAt: post.updatedAt,
          imageUrls: post.imageUrls,
          likeCount: post.likeCount,
          thumbnailUrl: post.thumbnailUrl,
        }));

        setResults(transformedResults);
        setTotalResults(totalElements);
        setTotalPages(responseTotalPages);
        setCurrentPage(page);
      }
    } catch (error) {
      console.error('Error fetching the data', error);
    }
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    const newPage = selected;
    setCurrentPage(newPage);
    handleSearch(newPage);
  };

  useEffect(() => {
    const debounceSearch = setTimeout(() => {
      if (query.trim()) {
        handleSearch(0);
      }
    }, 500);

    return () => clearTimeout(debounceSearch);
  }, [query]);

  return (
    <div className="w-full flex-col-center mt-[99px]">
      <div className="w-full max-w-[1400px]">
        <SearchBar
          query={query}
          setQuery={setQuery}
          handleSearch={() => handleSearch(0)}
        />
        <Results
          results={results}
          searchExecuted={searchExecuted}
          totalResults={totalResults}
        />

        {searchExecuted && totalResults > 0 && (
          <div className="mt-[80px] mb-[50px]">
            <Pagination
              onPageChange={handlePageChange}
              totalPages={totalPages || 1}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogSearch;
