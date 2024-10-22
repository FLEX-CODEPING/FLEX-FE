'use client';

import Filters from '@/app/components/blog/blogmain/blogpostmain/Filters';
import Navigation from '@/app/components/blog/blogmain/blogpostmain/Navigation';
import { dummyPosts } from '@/app/constants/BlogData';
import PostCard from './PostCard';

const BlogContainer = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex flex-col items-start max-w-[1440px]">
        <Navigation />
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
