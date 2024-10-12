import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '@/app/components/common/layout/Header'; 
import '@/app/styles/Blog.css'; 
import '@/app/styles/globals.css';
import { dummyPosts } from "../../(route)/blog/BlogData";


interface SearchResult {
  text: string;
  date: string;
}

const BlogPage = () => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedAges, setSelectedAges] = useState<string[]>([]);
  const [selectedSalaries, setSelectedSalaries] = useState<string[]>([]);
  const [selectedNav, setSelectedNav] = useState<string>('전체');

  // 검색 페이지로 이동
  const handleSearchRedirect = () => {
    router.push('/blog/blogsearch');
  };

  // 네비 버튼 클릭 시 상태 변경
  const handleNavClick = (nav: string) => {
    setSelectedNav(nav);
  };

  
  const toggleFilterDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  // 나이 필터 버튼 클릭 시 상태 변경
  const handleAgeClick = (age: string) => {
    if (selectedAges.includes(age)) {
      setSelectedAges(selectedAges.filter(selectedAge => selectedAge !== age));
    } else {
      setSelectedAges([...selectedAges, age]);
    }
  };

  // 급여 필터 버튼 클릭 시 상태 변경
  const handleSalaryClick = (salary: string) => {
    if (selectedSalaries.includes(salary)) {
      setSelectedSalaries(selectedSalaries.filter(selectedSalary => selectedSalary !== salary));
    } else {
      setSelectedSalaries([...selectedSalaries, salary]);
    }
  };

  return (
    <div className="w-full flex-center flex-col">
      {/* 네비게이션 */}
      <div className="nav-section flex justify-between items-center p-4 border-b border-gray-300">
        <div className="nav-options flex items-center gap-6">
          <button
            className={`nav-button ${selectedNav === '전체' ? 'selected' : ''}`}
            onClick={() => handleNavClick('전체')}
          >
            전체
          </button>
          <button
            className={`nav-button ${selectedNav === '추천' ? 'selected' : ''}`}
            onClick={() => handleNavClick('추천')}
          >
            추천
          </button>
          <button
            className={`nav-button ${selectedNav === '팔로잉' ? 'selected' : ''}`}
            onClick={() => handleNavClick('팔로잉')}
          >
            팔로잉
          </button>
          <button className="nav-button" onClick={handleSearchRedirect}>검색</button>
        </div>
      </div>

      {/* 필터 섹션 */}
      <div className="w-full flex-center flex-col">
        <div className="filter-section flex justify-between items-start">
          {/* 나이 필터 */}
          <div className="age-filter-container border rounded-lg p-4 flex gap-10">
            <div className="filter-options flex items-center gap-4">
              <img src="/images/age.png" alt="나이 아이콘" className="filter-icon" />
              <h3 className="font-semibold">나이</h3>
              <button
                className={`filter-button ${selectedAges.includes('~20') ? 'selected' : ''}`}
                onClick={() => handleAgeClick('~20')}
              >
                ~20
              </button>
              <button
                className={`filter-button ${selectedAges.includes('21-30') ? 'selected' : ''}`}
                onClick={() => handleAgeClick('21-30')}
              >
                21-30
              </button>
              <button
                className={`filter-button ${selectedAges.includes('31-40') ? 'selected' : ''}`}
                onClick={() => handleAgeClick('31-40')}
              >
                31-40
              </button>
              <button
                className={`filter-button ${selectedAges.includes('41-50') ? 'selected' : ''}`}
                onClick={() => handleAgeClick('41-50')}
              >
                41-50
              </button>
              <button
                className={`filter-button ${selectedAges.includes('50+') ? 'selected' : ''}`}
                onClick={() => handleAgeClick('50+')}
              >
                50+
              </button>
            </div>
            {/* 급여 필터 */}
            <div className="salary-filter-container">
              <div className="filter-options flex items-center gap-4">
                <img src="/images/salary.png" alt="급여 아이콘" className="filter-icon" />
                <h3 className="font-semibold">급여</h3>
                <button
                  className={`filter-button ${selectedSalaries.includes('소득 없음') ? 'selected' : ''}`}
                  onClick={() => handleSalaryClick('소득 없음')}
                >
                  소득 없음
                </button>
                <button
                  className={`filter-button ${selectedSalaries.includes('3천 이하') ? 'selected' : ''}`}
                  onClick={() => handleSalaryClick('3천 이하')}
                >
                  3천 이하
                </button>
                <button
                  className={`filter-button ${selectedSalaries.includes('5천 이하') ? 'selected' : ''}`}
                  onClick={() => handleSalaryClick('5천 이하')}
                >
                  5천 이하
                </button>
                <button
                  className={`filter-button ${selectedSalaries.includes('7천 이하') ? 'selected' : ''}`}
                  onClick={() => handleSalaryClick('7천 이하')}
                >
                  7천 이하
                </button>
                <button
                  className={`filter-button ${selectedSalaries.includes('1억 이하') ? 'selected' : ''}`}
                  onClick={() => handleSalaryClick('1억 이하')}
                >
                  1억 이하
                </button>
                <button
                  className={`filter-button ${selectedSalaries.includes('2억 이상') ? 'selected' : ''}`}
                  onClick={() => handleSalaryClick('2억 이상')}
                >
                  2억 이상
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 검색 필터 드롭다운 버튼 */}
        <div className="relative-container relative">
          <button className="filter-dropdown-button" onClick={toggleFilterDropdown}>검색 필터</button>
          {dropdownOpen && (
            <div className="dropdown-menu absolute mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              <button className="dropdown-item">인기순</button>
              <button className="dropdown-item">추천순</button>
            </div>
          )}
        </div>
      </div>

      {/* 블로그 포스트 */}
      <div className="posts-container grid grid-cols-3 gap-6 p-4">
        {dummyPosts.map((post) => (
          <div key={post.id} className="post-card">
            {/* 태그 및 좋아요 표시 */}
            <div className="flex justify-between items-center mb-2">
              <div className="bg-gray-200 px-2 py-1 rounded-md text-sm font-semibold text-gray-700">
                #{post.category}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <p>{post.likes} </p>
                <Image
                  src="/images/like.png"
                  alt="좋아요"
                  width={20}
                  height={20}
                />
              </div>
            </div>

            {/* 포스트 이미지 (이미지에만 테두리 적용) */}
            <div className="relative w-full h-48 border border-gray-300 rounded-md">
              <Image
                src={post.imageUrl} 
                alt={post.title}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* 포스트 내용 */}
            <div className="post-content p-4">
              <h2 className="font-bold text-lg mb-2">{post.title}</h2>
              <p className="text-sm text-gray-700 mb-2">{post.content}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Image
                    src={post.authorImageUrl} // 저자 이미지
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
    </div>
  );
};

export default BlogPage;
