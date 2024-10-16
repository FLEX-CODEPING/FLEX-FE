"use client";

import React, { useState } from 'react';
import Navigation from '@/app/components/blogmain/blogpostmain/Navigation'; 
import Filters from '@/app/components/blogmain/blogpostmain/Filters';
import PostCard from './PostCard';
import { dummyPosts } from '../../../constants/BlogData';
import { BlogPost } from '../../../_types/blog';
import { useRouter } from 'next/navigation'; 
import '@/app/styles/globals.css'; 
import '@/app/styles/Blog.css'; 

const BlogContainer = () => {
  const [selectedNav, setSelectedNav] = useState<string>('전체');
  const router = useRouter(); 

  const handleNavClick = (nav: string) => {
    setSelectedNav(nav);
    
    if (nav === '전체') {
      router.push('/blog/all');
    }
  };

  return (
    <div className="w-full flex flex-col">
      <Navigation selectedNav={selectedNav} 
      handleNavClick={handleNavClick} />
      <Filters />
      <div className="w-full flex flex-col items-center">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[44px] p-4"> 
          {dummyPosts.map((post: BlogPost) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;
