'use client';

import React, { useState } from "react";
import { useRouter } from 'next/navigation';  // useRouter를 사용하여 링크 이동 처리
import Header, { dela } from "@/app/components/common/layout/Header"; 
import "@/app/styles/Blogstyles.css"; 
import '@/app/styles/globals.css';
import { dummyPosts } from "../../(route)/blog/BlogData";

const BlogSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchExecuted, setSearchExecuted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const router = useRouter(); // useRouter 사용

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    setSearchExecuted(true);
    setCurrentPage(1);

    try {
      const filteredPosts = dummyPosts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())            
      );
      setResults(filteredPosts);

      // 검색 결과가 있으면 blogsearch 페이지로 이동
      router.push('/blogsearch');

    } catch (error) {
      console.error("Error fetching the data", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = results.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(results.length / postsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full flex-center flex-col">
      <div className="container">
        <h1 className={`${dela.className} title`}>블로그 검색</h1>
        <div className="search-bar">
          <div className="icon-container">
            <img src="/images/logo.png" alt="search-icon" className="icon" />
          </div>
          <input
            type="text"
            placeholder="검색어를 입력해 주세요."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input"
          />
          <button onClick={handleSearch} className="search-button">
            <img src="/images/1c.png" alt="search-button" className="button-icon" />
          </button>
        </div>

        {searchExecuted && (
          <div className="result-count">
            <p>총 {results.length}개의 포스트를 찾았습니다.</p>
          </div>
        )}

        {loading ? (
          <div className="loading-container">
            <p>로딩 중...</p>
          </div>
        ) : searchExecuted && currentPosts.length === 0 ? (
          <div className="no-results-container">
            <img src="/images/2c.png" alt="no-results" className="no-results-image" />
            <p>검색 결과가 없습니다.</p>
          </div>
        ) : searchExecuted && currentPosts.length > 0 ? (
          <>
            <div className="posts-container">
              {currentPosts.map((post) => (
                <div key={post.id} className="post-card">
                  {/* 포스트 이미지 */}
                  <div className="relative w-full h-48 border border-gray-300 rounded-lg overflow-hidden">
                    <img
                      src={post.imageUrl || "/images/3c.png"}
                      alt={post.title}
                      className="post-image"
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    />
                    {/* 카테고리 및 좋아요를 이미지 위에 표시 */}
                    <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-md shadow-md text-xs">
                      #{post.category}
                    </div>
                    <div className="absolute top-2 right-2 flex items-center gap-2">
                      <p className="text-xs text-gray-500">{post.likes} 좋아요</p>
                      <img
                        src="/images/like.png"
                        alt="좋아요"
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  {/* 포스트 내용 (테두리 없이) */}
                  <div className="post-content p-4">
                    <h2 className={dela.className}>{post.title}</h2>
                    <p>{post.content}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img
                          src={post.authorImageUrl || "/images/4c.png"} // 저자 이미지
                          alt={post.author}
                          width={20}
                          height={20}
                          className="rounded-full"
                        />
                        <span className="ml-2 text-xs text-gray-500">{post.author}</span>
                      </div>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="pagination">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={`page-button ${
                      currentPage === index + 1 ? "active-page" : ""
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default BlogSearch;
