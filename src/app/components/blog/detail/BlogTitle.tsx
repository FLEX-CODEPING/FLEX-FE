'use client';

import { callDelete, callPost } from '@/app/utils/callApi';
import { useState } from 'react';

interface BlogTitleProps {
  title?: string;
  nickname?: string;
  createdAt?: string;
  userId: string;
  onNicknameClick: () => void;
}

const BlogTitle = ({
  title,
  nickname,
  createdAt,
  userId,
  onNicknameClick,
}: BlogTitleProps) => {
  const [isFollowing, setIsFollowing] = useState(Boolean);

  const handleFollowClick = async () => {
    try {
      if (isFollowing) {
        const response = await callDelete(`/api/follow/delete?id=${userId}`);
        if (response.isSuccess) {
          setIsFollowing(false); 
        }
      } else {
        
        const response = await callPost(`/api/follow?id=${userId}`);
        if (response.isSuccess) {
          setIsFollowing(true); 
        }
      }
    } catch (error) {
      console.error('팔로우/팔로우 해제 요청 중 오류가 발생했습니다:', error);
    }
  };

  return (
    <div className="w-[880px] h-[111px]  border-b border-[#7a7a7a] flex flex-col gap-6">
      <div className="w-full text-5xl font-bold">{title}</div>
      <div className="ml-1 w-full flex justify-between items-center">
        <div className="flex items-center font-bold">
          <span
            className="text-black-0/80 text-lg mr-4 cursor-pointer"
            onClick={onNicknameClick}
          >
            {nickname}
          </span>
          <button
            type="button"
            onClick={handleFollowClick}
            className={`px-2 py-1 text-sm rounded-md border bg-white ${
              isFollowing
                ? ' border-black-0 text-black-0'
                : ' border-black-0/20 text-black-0/60'
            }`}
          >
            {isFollowing ? '팔로잉' : '팔로우'}
          </button>
        </div>
        <div className="text-black-0/60 text-sm mr-1">{createdAt}</div>
      </div>
    </div>
  );
};
export default BlogTitle;
