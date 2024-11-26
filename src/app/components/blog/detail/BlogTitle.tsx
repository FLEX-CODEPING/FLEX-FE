'use client';

import { USERPAGE_TEXT } from '@/app/constants/mypage';
import { callDelete, callPost } from '@/app/utils/callApi';
import { useState } from 'react';

interface BlogTitleProps {
  title?: string;
  nickname?: string;
  createdAt?: string;
  userId: string;
  onNicknameClick: () => void;
  following: boolean;
}

const BlogTitle = ({
  title,
  nickname,
  createdAt,
  userId,
  onNicknameClick,
  following,
}: BlogTitleProps) => {
  const [isFollowing, setIsFollowing] = useState(following);

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
            className={`py-1 px-4 rounded-[10px] border text-sm font-medium ${
              isFollowing
                ? 'bg-black-0 text-white'
                : 'bg-white text-black-0 border-gray-300'
            }`}
          >
            {isFollowing ? USERPAGE_TEXT[1] : USERPAGE_TEXT[0]}
          </button>
        </div>
        <div className="text-black-0/60 text-sm mr-1">{createdAt}</div>
      </div>
    </div>
  );
};
export default BlogTitle;
