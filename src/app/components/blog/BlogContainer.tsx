import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '@/app/components/common/layout/Header'; 
import '@/app/styles/Blog.css'; 
import '@/app/styles/globals.css';
import { dummyPosts } from "../../(route)/blog/BlogData";

// 검색 결과 아이템 타입 정의
interface SearchResult {
  text: string;
  date: string;
}

const BlogPage = () => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false); // 드롭다운 상태
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]); // 타입 설정

  // 검색 페이지로 이동 (검색어와 상관없이 검색 버튼 클릭 시 이동)
  const handleSearchRedirect = () => {
    router.push('/blogsearch'); // 검색 버튼 클릭 시 blogsearch로 이동
  };

  // 필터 드롭다운 토글
  const toggleFilterDropdown = () => {
    setDropdownOpen(prev => !prev); // 이전 상태를 기반으로 토글
  };

  return (
    <div className="w-full flex-center flex-col">
      {/* 네비게이션 */}
      <div className="nav-section flex justify-between items-center p-4 border-b border-gray-300">
        <div className="nav-options flex items-center gap-6">
          <button className="nav-button">전체</button>
          <button className="nav-button">추천</button>
          <button className="nav-button">팔로잉</button>
          <button className="nav-button" onClick={handleSearchRedirect}>검색</button> {/* 검색 버튼 클릭 시 /blogsearch로 이동 */}
        </div>
      </div>

      {/* 필터 섹션 */}
      <div className="filter-section">
        <div className="filter-container">
          <div className="filter-options">
            <h3 className="font-semibold">나이</h3>
            <button className="filter-button selected">~20</button>
            <button className="filter-button">21-30</button>
            <button className="filter-button">31-40</button>
            <button className="filter-button">41-50</button>
            <button className="filter-button">50+</button>
          </div>
          <div className="filter-options">
            <h3 className="font-semibold">급여</h3>
            <button className="filter-button">소득 없음</button>
            <button className="filter-button selected">3천 이하</button>
            <button className="filter-button">5천 이하</button>
            <button className="filter-button">7천 이하</button>
            <button className="filter-button">1억 이하</button>
            <button className="filter-button">2억 이상</button>
          </div>
        </div>

        {/* 검색 필터 드롭다운 버튼 */}
        <div className="relative">
          <button className="filter-dropdown-button" onClick={toggleFilterDropdown}>검색 필터</button>
          {dropdownOpen && (
            <div className="dropdown-menu absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              <button className="dropdown-item">인기순</button>
              <button className="dropdown-item">추천순</button>
            </div>
          )}
        </div>
      </div>

      {/* 블로그 포스트 카드 렌더링 */}
      <div className="posts-container grid grid-cols-3 gap-6 p-4">
        {dummyPosts.map((post) => (
          <div key={post.id} className="post-card border rounded-lg overflow-hidden shadow-lg">
            <div className="relative">
              
              <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-md shadow-md text-xs">
                #{post.category}
              </div>
              <div className="absolute top-2 right-2 flex items-center gap-2">
                <p className="text-xs text-gray-500">{post.likes} 좋아요</p>
                <Image
                  src="/path/to/heart-icon.png"
                  alt="좋아요"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div className="post-content p-4">
              <h2 className="font-bold text-lg mb-2">{post.title}</h2>
              <p className="text-sm text-gray-700 mb-2">{post.content}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">{post.author}</span>
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
