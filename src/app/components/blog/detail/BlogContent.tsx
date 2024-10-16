'use client';
import { CONTENT } from '@/app/constants/blog';
import { useState } from 'react';

interface BlogContentProps {
    content: string
}

const BlogContent = ({content}:BlogContentProps) => {

  return (
    <div className="w-[780px] mt-5 mb-[100px]">
      <div className="w-full justify-center items-center text-lg font-medium">
        {content}
      </div>
      
    </div>
  );
};
export default BlogContent;
