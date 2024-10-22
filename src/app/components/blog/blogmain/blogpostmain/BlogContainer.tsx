'use client';

import React, { useState } from 'react';
import Navigation from '@/app/components/blog/blogmain/blogpostmain/Navigation';
import Filters from '@/app/components/blog/blogmain/blogpostmain/Filters';
import PostCard from './PostCard';
import { dummyPosts } from '../../../../constants/blogdata';
import { BlogPost } from '../../../../_types/blog/blog';
import { useRouter } from 'next/navigation';

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
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex flex-col items-start max-w-[1440px]">
        <Navigation selectedNav={selectedNav} handleNavClick={handleNavClick} />
        <Filters />
      </div>

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
