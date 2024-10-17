import React, { useState } from 'react';
import Navigation from '@/app/components/blog/blogmain/blogpostmain/Navigation'; 
import PostCard from '../blogpostmain/PostCard';
import FilterBar from './FilterBar'; 
import { dummyPosts } from '../../../../constants/blogdata';
import { BlogPost } from '../../../../_types/blog';
import { useRouter } from 'next/navigation'; 
import '@/app/styles/globals.css'; 
import '@/app/styles/Blog.css'; 

const BlogRecommend = () => {
  const [selectedNav, setSelectedNav] = useState<string>('전체');
  const router = useRouter(); 

  const handleNavClick = (nav: string) => {
    setSelectedNav(nav);
  
    if (nav === '추천') {
      router.push('/blog/recommend');
    }
  };

  return (
    <div className="w-full flex flex-col ">
      <Navigation
        selectedNav={selectedNav}
        handleNavClick={handleNavClick}
      />
      <FilterBar /> 
      <div className='w-full flex flex-col items-center'>
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
