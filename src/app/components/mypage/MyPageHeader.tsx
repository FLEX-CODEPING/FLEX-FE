'use client'

import { FOLLOW_TEXT, MYPAGE_TEXT } from '@/app/constants/mypage';
import MyPosts from './MyPosts'
import LikedPosts from './LikedPosts';
import { useState } from 'react';

const MyPageHeader = () => {
  const [activeTab, setActiveTab] = useState<'myPosts' | 'likedPosts'>('myPosts');

  return (
    <div className="w-full flex flex-col  px-[5%] text-[20px] relative">
      <div className="text-black text-[24px] font-bold ">낙도의 블로그</div>
      <div className="h-[130px] flex items-center justify-center gap-[70px]">
        <div className="flex flex-col items-center justify-center ">
          <img
            src="images\profile.png"
            alt="Profile"
            className="w-[80px] h-[80px] rounded-[32px] object-cover"
          />
          <div className="text-black font-semibold">nakdo</div>
        </div>
        <div className="flex items-center space-x-[50px]">
          <div className="flex flex-col items-center">
            <span className="text-black-0 font-bold">256</span>
            <span className="text-black-0 text-sm">{FOLLOW_TEXT[0]}</span>
          </div>
          <div className="w-[1px] h-8 bg-gray-600"></div>
          <div className="flex flex-col items-center">
            <span className="text-black-0 font-bold">244</span>
            <span className="text-black-0 text-sm">{FOLLOW_TEXT[1]}</span>
          </div>
        </div>
      </div>
      <div className="mt-[10px] h-[60px] border-b border-gray-300 flex justify-between items-center">
        <div className="flex text-black-0">
          <div className="justify-center items-center gap-8 flex">
            <div
              className={`text-black text-[26px] font-bold cursor-pointer ${
                activeTab === 'myPosts' ? 'text-black' : 'text-[#a4a4a4]'
              }`}
              onClick={() => setActiveTab('myPosts')}
            >
              {MYPAGE_TEXT[0]}
            </div>
            <div
              className={`text-[26px] font-bold cursor-pointer ${
                activeTab === 'likedPosts' ? 'text-black' : 'text-[#a4a4a4]'
              }`}
              onClick={() => setActiveTab('likedPosts')}
            >
              {MYPAGE_TEXT[1]}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button
            type="button"
            className="py-2 px-6 rounded-[20px] border border-gray-300 text-black-0 text-sm font-medium"
          >
            {MYPAGE_TEXT[2]}
          </button>
          <button
            type="button"
            className="py-2 px-6 rounded-[20px] border bg-main-1 text-white text-sm font-medium"
          >
            {MYPAGE_TEXT[3]}
          </button>
        </div>
      </div>

      <div className="mt-6">
        {activeTab === 'myPosts' && <MyPosts />}
        {activeTab === 'likedPosts' && <LikedPosts />}
      </div>
    </div>
  );
};

export default MyPageHeader;
