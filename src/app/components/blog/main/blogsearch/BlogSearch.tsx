'use client';

import Results from '@/app/components/blog/main/blogsearch/Result';
import SearchBar from '@/app/components/blog/main/blogsearch/SearchBar';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { callGet } from '@/app/utils/callApi';

const BlogSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchPostTypes[]>([]); // 타입 변경
  const [loading, setLoading] = useState(false);
  const [searchExecuted, setSearchExecuted] = useState(false);
  const [totalPages, setTotalPages] = useState(0); // 전체 페이지 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [totalResults, setTotalResults] = useState(0); // 전체 결과 수
  const router = useRouter();

  const handleSearch = async (page = 1) => {
    setLoading(true);
    setSearchExecuted(true);

    try {
      const response = await callGet(
        `/api/blog/search?query=${query}&page=1&size=10`,
      );
      if (response.isSuccess) {
        const {
          content,
          totalPages: responseTotalPages,
          totalElements,
        } = response.result; // totalPages 이름 변경

        // API 응답 데이터를 SearchPostTypes[] 형태로 변환
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
        }));

        setResults(transformedResults); // 변환된 데이터를 설정
        setTotalPages(responseTotalPages); // 변경된 변수 사용
        setTotalResults(totalElements); // 전체 검색 결과 수
        setCurrentPage(page); // 현재 페이지 설정
      } else {
        console.error('검색 결과를 가져오지 못했습니다.');
        setResults([]);
      }
    } catch (error) {
      console.error('Error fetching the data', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  // 디바운스 설정
  useEffect(() => {
    const debounceSearch = setTimeout(() => {
      if (query) {
        handleSearch(1); // 입력할 때마다 첫 페이지부터 검색
      }
    }, 500); // 500ms 대기 (사용자가 입력을 멈춘 후 요청)

    return () => clearTimeout(debounceSearch); // 이전 타이머를 클리어
  }, [query]);

  return (
    <div className="w-full flex flex-col items-center mt-[99px]">
      <div className="w-full max-w-[1400px]">
        <SearchBar
          query={query}
          setQuery={setQuery}
          handleSearch={() => handleSearch(1)} // 수동 검색 버튼 동작
        />

        <Results
          results={results}
          searchExecuted={searchExecuted}
          loading={loading}
          totalResults={totalResults}
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default BlogSearch;
