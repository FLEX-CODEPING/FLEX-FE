import React, { useState } from 'react';
import Navigation from '@/app/components/blogmain/Navigation'; 
import PostCard from './PostCard';
import FilterBar from './FilterBar'; 
import { dummyPosts } from '../../(route)/blog/BlogData';
import { BlogPost } from '../../_types/blog';
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
        <div className="flex-wrap flex  gap-x-[3%] p-4">
          {dummyPosts.map((post: BlogPost) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogRecommend;
