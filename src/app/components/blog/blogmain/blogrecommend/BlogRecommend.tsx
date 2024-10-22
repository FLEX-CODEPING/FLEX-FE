'use client';

import { useState } from 'react';
import Navigation from '@/app/components/blog/blogmain/blogpostmain/Navigation';
import PostCard from '../blogpostmain/PostCard';
import FilterBar from './FilterBar';
import { dummyPosts } from '../../../../constants/blogdata';
import { BlogPost } from '../../../../_types/blog/blog';

const BlogRecommend = () => {
  const [selectedNav, setSelectedNav] = useState('전체');

  const handleNavClick = (nav: string) => {
    setSelectedNav(nav);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex flex-col items-start max-w-[1440px]">
        <Navigation selectedNav={selectedNav} handleNavClick={handleNavClick} />

        <FilterBar />
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

export default BlogRecommend;
