"use client"

import React, { useState } from 'react';
import Navigation from '@/app/components/blog/Navigation'; // 수정된 Navigation 컴포넌트 불러오기
import Filters from '@/app/components/blog/Filters';
import PostCard from './PostCard';
import { dummyPosts } from '../../(route)/blog/BlogData';
import { BlogPost } from '../../_types/blog';
import '@/app/styles/globals.css'; 
import '@/app/styles/Blog.css'; 

const BlogContainer = () => {
  const [selectedNav, setSelectedNav] = useState<string>('전체');

  const handleNavClick = (nav: string) => {
    setSelectedNav(nav);
  };

  return (
    <div className="w-full flex-center flex-col">
      <Navigation
        selectedNav={selectedNav}
        handleNavClick={handleNavClick}
      />
      <Filters />

      <div className="posts-container grid grid-cols-3 gap-6 p-4">
        {dummyPosts.map((post: BlogPost) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogContainer;
