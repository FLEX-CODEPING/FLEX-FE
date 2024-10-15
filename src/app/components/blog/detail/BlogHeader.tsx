'use client';

import React, { useState } from 'react';
import Icons from '../../common/Icons';
import { likeIcon } from '@/app/constants/iconPath';

interface BlogHeaderProps {
  tags: string[];
  initialLikesCount: number;
}

const BlogHeader = ({ tags, initialLikesCount }: BlogHeaderProps) => {
  const [likeCount, setLikeCount] = useState(initialLikesCount);
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1); 
    } else {
      setLikeCount(likeCount + 1); 
    }
    setIsLiked(!isLiked); 
  };

  const getButtonBorderColor = () => {
    if (isLiked && isHovered) return 'border-none'; 
    return isHovered ? 'border-black' : 'border-gray-2'; 
  };

  
  const getIconFillColor = () => {
    if (isLiked) return 'white'; 
    return isHovered ? 'black' : 'gray'; 
  };

  const getButtonBackgroundColor = () => {
    if (isLiked && isHovered) return 'bg-main-1/90'; 
    if (isLiked) return 'bg-main-1'; 
    return ''; 
  };

  

  return (
    <div className="w-[780px] flex justify-between items-center py-4">
      <div className="flex flex-wrap gap-4">
        {tags.map((tag, index) => (
          <div
            key={tag}
            className="bg-main-1 text-white px-3 py-1 rounded-full cursor-pointer"
          >
            {tag}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center">
        <button
          onClick={handleLikeClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`w-[48px] h-[48px] rounded-full flex items-center justify-center border-[1px] cursor-pointer ${getButtonBorderColor()} ${getButtonBackgroundColor()}`}
        >
          <div className="w-[34px] h-[34px] relative">
          <Icons
              name={{
                ...likeIcon,
                fill: getIconFillColor(), 
                options: { ...likeIcon.options, stroke: 'none' }, 
              }}
            />
          </div>
        </button>
        <span className="text-black font-semibold text-sm mt-[2px]">
          {likeCount}
        </span>
      </div>
    </div>
  );
};
export default BlogHeader;
