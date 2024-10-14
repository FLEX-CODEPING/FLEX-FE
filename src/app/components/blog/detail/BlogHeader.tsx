import React from 'react';
import Icons from '../../common/Icons';
import { likeIcon } from '@/app/constants/iconPath';

interface BlogHeaderProps {
  tags: string[];
  likesCount: number;
}

const BlogHeader = ({ tags, likesCount }: BlogHeaderProps) => {
  return (
    <div className="w-[780px] flex justify-between items-center py-4">
      <div className="flex flex-wrap gap-4">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="bg-main-1 text-white px-3 py-1 rounded-full cursor-pointer"
          >
            {tag}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center">
        <button className="w-[48px] h-[48px] rounded-full flex items-center justify-center border-[1px] border-main-1 cursor-pointer ">
          <div className="w-6 h-6 relative"><Icons name={likeIcon}/></div>
        </button>
        <span className="text-black font-semibold text-sm mt-[2px]">
          {likesCount}
        </span>
      </div>
    </div>
  );
};
export default BlogHeader;

