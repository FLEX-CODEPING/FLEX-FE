'use client';

import { FOLLOW_TEXT, USERPAGE_TEXT } from '@/app/constants/mypage';
import Image from 'next/image';
import UserPosts from './UserPosts';
import { useState } from 'react';

const UserPageHeader = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing((prev) => !prev);
  };

  return (
    <div className="flex flex-col px-[5%] text-[20px] relative">
      <div className="text-black text-[24px] font-bold">민규의 블로그</div>
      <div className="h-[130px] flex items-center justify-center gap-[70px]">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/profile.png"
            alt="profile"
            width={80}
            height={80}
            className="rounded-[32px]"
          />
          <div className="text-black font-semibold">yng1404</div>
        </div>
        <div className="flex items-center space-x-[50px]">
          <div className="flex flex-col items-center">
            <span className="text-black-0 font-bold">256</span>
            <span className="text-black-0 text-sm">{FOLLOW_TEXT[0]}</span>
          </div>
          <div className="w-[1px] h-8 bg-gray-600" />
          <div className="flex flex-col items-center">
            <span className="text-black-0 font-bold">244</span>
            <span className="text-black-0 text-sm">{FOLLOW_TEXT[1]}</span>
          </div>
        </div>
      </div>
      <div className="mt-[10px] h-[45px] border-b border-gray-300 flex justify-end items-center">
        <button
          type="button"
          onClick={handleFollowClick}
          className={`py-1 px-4 rounded-[10px] border text-sm font-medium ${
            isFollowing
              ? 'bg-black-0 text-white'
              : 'bg-white text-black-0 border-gray-300'
          }`}
        >
          {isFollowing ? '팔로잉' : USERPAGE_TEXT[0]}
        </button>
      </div>
      <div className="mt-[40px]">
        <UserPosts />
      </div>
    </div>
  );
};

export default UserPageHeader;
