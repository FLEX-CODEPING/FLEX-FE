'use client';

import Navigation from '@/app/components/blog/blogmain/blogpostmain/Navigation';
import { dummyPosts } from '@/app/data/blogdata';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import PostCard from '../blogpostmain/PostCard';
import BlogFilterBar from './BlogFilterBar';

const BlogRecommend = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedNav, setSelectedNav] = useState('전체');

  useEffect(() => {
    if (pathname === '/blog/recommend') {
      setSelectedNav('추천');
    } else if (pathname === '/blog/all') {
      setSelectedNav('전체');
    } else {
      setSelectedNav('전체');
    }
  }, [pathname]);

  const handleNavClick = (nav: string) => {
    setSelectedNav(nav);

    if (nav === '추천') {
      router.push('/blog/recommend');
    } else if (nav === '전체') {
      router.push('/blog/all');
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex flex-col items-start max-w-[1440px]">
        <Navigation selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
        <BlogFilterBar />
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
