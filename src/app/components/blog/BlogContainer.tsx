"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '@/app/components/common/layout/Header'; 
import '@/app/styles/Blog.css'; 
import '@/app/styles/globals.css';
import PostCard from './PostCard';
import { dummyPosts } from '../../(route)/blog/BlogData'; // 더미 데이터 불러오기
import { AGE_OPTIONS, SALARY_OPTIONS } from '@/app/constants/BlogConstants';
import Navigation from '@/app/components/blog/Navigation';
import Filters from '@/app/components/blog/Filters';
import { BlogPost } from '../../_types/blog'; // 정확한 경로 확인


const BlogContainer = () => {
    const router = useRouter();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedAges, setSelectedAges] = useState<string[]>([]);
    const [selectedSalaries, setSelectedSalaries] = useState<string[]>([]);
    const [selectedNav, setSelectedNav] = useState<string>('전체');
  
    const handleSearchRedirect = () => {
      router.push('/blog/blogsearch');
    };
  
    const handleNavClick = (nav: string) => {
      setSelectedNav(nav);
    };
  
    const handleAgeClick = (age: string) => {
      setSelectedAges(prev => prev.includes(age) ? prev.filter(a => a !== age) : [...prev, age]);
    };
  
    const handleSalaryClick = (salary: string) => {
      setSelectedSalaries(prev => prev.includes(salary) ? prev.filter(s => s !== salary) : [...prev, salary]);
    };
  
    const toggleFilterDropdown = () => {
      setDropdownOpen(prev => !prev);
    };
  
    return (
      <div className="w-full flex-center flex-col">
        <Navigation
          selectedNav={selectedNav}
          handleNavClick={handleNavClick}
          handleSearchRedirect={handleSearchRedirect}
        />
        
        <Filters
          selectedAges={selectedAges}
          selectedSalaries={selectedSalaries}
          handleAgeClick={handleAgeClick}
          handleSalaryClick={handleSalaryClick}
          toggleFilterDropdown={toggleFilterDropdown}
          dropdownOpen={dropdownOpen}
        />
  
        {/* 블로그 포스트 */}
        <div className="posts-container grid grid-cols-3 gap-6 p-4">
          {dummyPosts.map((post: BlogPost) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    );
  };
  
  export default BlogContainer;