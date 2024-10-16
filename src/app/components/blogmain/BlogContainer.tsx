"use client";

import React, { useState } from 'react';
import Navigation from '@/app/components/blogmain/Navigation'; 
import Filters from '@/app/components/blogmain/Filters';
import PostCard from './PostCard';
import { dummyPosts } from '../../(route)/blog/BlogData';
import { BlogPost } from '../../_types/blog';
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
    <div className="w-full flex flex-col ">
      <Navigation
        selectedNav={selectedNav}
        handleNavClick={handleNavClick}
      />
      <Filters />
      <div className='w-full flex flex-col items-center'>
        <div className="flex-wrap flex gap-x-[3.5%] p-4">
          {dummyPosts.map((post: BlogPost) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;
