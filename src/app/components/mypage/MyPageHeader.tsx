'use client';

import { FOLLOW_TEXT, MYPAGE_TEXT } from '@/app/constants/mypage';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import MyPosts from './MyPosts';
import LikedPosts from './LikedPosts';

const MyPageHeader = () => {
  const [activeTab, setActiveTab] = useState<'myPosts' | 'likedPosts'>(
    'myPosts',
  );
  const router = useRouter();

  return (
    <div className=" flex flex-col  px-[5%] text-[20px] relative">
      <div className="text-black text-[24px] font-bold ">낙도의 블로그</div>
      <div className="h-[130px] flex items-center justify-center gap-[70px]">
        <div className="flex flex-col items-center justify-center ">
          <Image
            src="/images/profile.png"
            alt="profile"
            width={80}
            height={80}
            className="rounded-[32px]"
          />
          <div className="text-black font-semibold">nakdo</div>
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
      <div className="mt-[10px] h-[60px] border-b border-gray-300 flex justify-between items-center">
        <div className="flex text-black-0">
          <div className="justify-center items-center gap-8 flex">
            <div
              className={`text-[20px] font-bold cursor-pointer ${
                activeTab === 'myPosts' ? 'text-black-0' : 'text-[#a4a4a4]'
              }`}
              onClick={() => setActiveTab('myPosts')}
            >
              {MYPAGE_TEXT[0]}
            </div>
            <div
              className={`text-[20px] font-bold cursor-pointer ${
                activeTab === 'likedPosts' ? 'text-black-0' : 'text-[#a4a4a4]'
              }`}
              onClick={() => setActiveTab('likedPosts')}
            >
              {MYPAGE_TEXT[1]}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="py-1 px-4 rounded-[20px] border border-gray-300 text-black-0 text-sm font-medium"
            onClick={() => router.push('/myaccount')}
          >
            {MYPAGE_TEXT[2]}
          </button>
          <button
            type="button"
            className="py-1 px-4 rounded-[20px] border bg-black-0 text-white text-sm font-medium"
          >
            {MYPAGE_TEXT[3]}
          </button>
        </div>
      </div>

      <div className="mt-[60px]">
        {activeTab === 'myPosts' && <MyPosts />}
        {activeTab === 'likedPosts' && <LikedPosts />}
      </div>
    </div>
  );
};

export default MyPageHeader;
