'use client';

import { useState } from 'react';

interface BlogTitleProps {
  title?: string;
  nickname?: string;
  createdAt?: string;
}

const BlogTitle = ({ title, nickname, createdAt }: BlogTitleProps) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="w-[880px] h-[111px]  border-b border-[#7a7a7a] flex flex-col gap-6">
      <div className="w-full text-5xl font-bold">{title}</div>
      <div className="ml-1 w-full flex justify-between items-center">
        <div className="flex items-center font-bold">
          <span className="text-black-0/80 text-lg mr-2">{nickname}</span>
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
