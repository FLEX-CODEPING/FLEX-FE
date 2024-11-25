'use client';

import { likeIcon } from '@/app/constants/iconPath';
import { useState } from 'react';
import { callDelete, callPost } from '@/app/utils/callApi';
import Icons from '../../common/Icons';

interface BlogHeaderProps {
  tags?: string[];
  likeCount?: number;
  likeStatus?: boolean;
  postId: string;
}

const BlogHeader = ({
  tags,
  likeCount,
  likeStatus,
  postId,
}: BlogHeaderProps) => {
  const [currentLikeCount, setCurrentLikeCount] = useState(likeCount || 0);
  const [isLiked, setIsLiked] = useState(!!likeStatus);
  const [isHovered, setIsHovered] = useState(false);

  const handleLikeClick = async () => {
    try {
      if (isLiked) {
        const response = await callDelete(`/api/like/delete?id=${postId}`);
        if (response.isSuccess) {
          setIsLiked(false);
          setCurrentLikeCount(currentLikeCount - 1);
        }
      } else {
        const response = await callPost(`/api/like?id=${postId}`, {
          likeStatus: true,
        });
        if (response.isSuccess) {
          setIsLiked(true);
          setCurrentLikeCount(currentLikeCount + 1);
        }
      }
    } catch (error) {
      console.error('Failed to update like status:', error);
    }
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
          <Icons
            name={{
              ...likeIcon,
              fill: getIconFillColor(),
              options: { ...likeIcon.options, stroke: 'none' },
            }}
            className="relative ml-2 mt-2"
          />
        </button>
        <span className="text-black-0 font-semibold text-sm mt-[2px]">
          {currentLikeCount}
        </span>
      </div>
    </div>
  );
};

export default BlogHeader;
