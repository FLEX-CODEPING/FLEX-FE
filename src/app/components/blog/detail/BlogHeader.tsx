'use client';

import { likeIcon } from '@/app/constants/iconPath';
import { useState } from 'react';
import Icons from '../../common/Icons';

interface BlogHeaderProps {
  tags?: string[];
  likeCount?: number;
  likeStatus?: 'ACTIVE' | 'INACTIVE';
}

const BlogHeader = ({ tags, likeCount, likeStatus }: BlogHeaderProps) => {
  const [currentLikeCount, setCurrentLikeCount] = useState(likeCount || 0);
  const [isLiked, setIsLiked] = useState(likeStatus === 'ACTIVE');
  const [isHovered, setIsHovered] = useState(false);

  const handleLikeClick = () => {
    if (isLiked) {
      setCurrentLikeCount(currentLikeCount - 1);
    } else {
      setCurrentLikeCount(currentLikeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const getButtonBorderColor = () => {
    if (isLiked && isHovered) return 'border-none';
    return isHovered ? 'border-black-0' : 'border-gray-2';
  };

  const getIconFillColor = () => {
    if (isLiked) return 'white';
    return isHovered ? 'black-0' : 'gray';
  };

  const getButtonBackgroundColor = () => {
    if (isLiked && isHovered) return 'bg-main-1/90';
    if (isLiked) return 'bg-main-1';
    return '';
  };

  return (
    <div className="w-[880px] flex justify-between items-center py-4">
      <div className="flex flex-wrap gap-4">
        {tags?.map((tag, index) => (
          <div
            key={tag}
            className="bg-main-1/20 text-black-0/70 font-semibold px-3 py-1 rounded-full cursor-pointer"
          >
            #{tag}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center">
        <button
          type="button"
          onClick={handleLikeClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`w-[48px] h-[48px] mt-2 rounded-full flex items-center justify-center border cursor-pointer ${getButtonBorderColor()} ${getButtonBackgroundColor()}`}
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
        <span className="text-black-0 font-semibold text-sm mt-[2px]">
          {currentLikeCount}
        </span>
      </div>
    </div>
  );
};

export default BlogHeader;
