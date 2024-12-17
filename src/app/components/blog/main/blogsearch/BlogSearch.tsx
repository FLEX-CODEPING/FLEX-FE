'use client';

import Results from '@/app/components/blog/main/blogsearch/Result';
import SearchBar from '@/app/components/blog/main/blogsearch/SearchBar';
import { useState, useEffect } from 'react';
import { callGet } from '@/app/utils/callApi';
import Pagination from '@/app/components/common/Pagination';

const BlogSearch = () => {
  const [query, setQuery] = useState(''); // 검색어
  const [results, setResults] = useState<SearchPostTypes[]>([]); // 검색 결과
  const [searchExecuted, setSearchExecuted] = useState(false); // 검색 여부
  const [totalResults, setTotalResults] = useState(0); // 전체 결과 수
  const [totalPages, setTotalPages] = useState(0); // 전체 페이지 수
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지

  // 검색 실행 함수
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
          thumbnailUrl: post.thumbnailUrl, // 썸네일 추가
        }));

        setResults(transformedResults); // 검색 결과 설정
        setTotalResults(totalElements); // 총 결과 수 설정
        setTotalPages(responseTotalPages); // 총 페이지 수 설정
        setCurrentPage(page); // 현재 페이지 설정
      }
    } catch (error) {
      console.error('Error fetching the data', error);
    }
  };

  // 페이지 변경 함수
  const handlePageChange = ({ selected }: { selected: number }) => {
    const newPage = selected; // 0-based 페이지
    setCurrentPage(newPage); // 현재 페이지 업데이트
    handleSearch(newPage); // 새 페이지 데이터 요청
  };

  // 검색어 변경 시 검색 실행
  useEffect(() => {
    const debounceSearch = setTimeout(() => {
      if (query.trim()) {
        handleSearch(0); // 페이지 0부터 검색
      }
    }, 500);

    return () => clearTimeout(debounceSearch);
  }, [query]);

  return (
    <div className="w-full flex flex-col items-center mt-[99px]">
      <div className="w-full max-w-[1400px]">
        <SearchBar
          query={query}
          setQuery={setQuery}
          handleSearch={() => handleSearch(0)} // 수동 검색
        />
        <Results
          results={results}
          searchExecuted={searchExecuted}
          totalResults={totalResults}
        />
        {/* 검색 실행 후에만 페이지네이션 표시 */}
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
