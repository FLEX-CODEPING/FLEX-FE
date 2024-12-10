'use client';

import { FOLLOW_TEXT, MYPAGE_TEXT } from '@/app/constants/mypage';
import { callGet } from '@/app/utils/callApi';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import LikedPosts from './LikedPosts';
import MyPosts from './MyPosts';

const MyPageContainer = () => {
  const [blogName, setBlogName] = useState<string>('');
  const [myData, setMyData] = useState<MyBlogInfo | null>(null);
  const [myPosts, setMyPosts] = useState<MyPostCardTypes[]>([]);
  const [likedPosts, setLikedPosts] = useState<MyPostCardTypes[]>([]);
  const [activeTab, setActiveTab] = useState<'myPosts' | 'likedPosts'>(
    'myPosts',
  );
  const router = useRouter();

  useEffect(() => {
    const fetchBlogName = async () => {
      const response = await callGet('/api/auth/user');
      if (response.isSuccess) {
        setBlogName(response.result.blogName);
      }
    };

    fetchBlogName();
  }, []);

  useEffect(() => {
    const fetchMyBlogInfo = async () => {
      const response = await callGet(`/api/mypage?blogName=${blogName}`);
      setMyData(response.result);
    };

    const fetchPost = async () => {
      const response = await callGet(`/api/mypage/posts?blogName=${blogName}`);
      setMyPosts(response.result);
      console.log(response);
    };

    const fetchLikedPost = async () => {
      const response = await callGet('/api/mypage/liked');
      setLikedPosts(response.result);
    };

    fetchMyBlogInfo();
    fetchPost();
    fetchLikedPost();
  }, [blogName]);

  return (
    <div className="mb-[200px] px-[10%]">
      <div className=" flex flex-col  px-[5%] text-[20px] relative">
        <div className="text-black text-[24px] font-bold ">
          {myData?.blogName}
        </div>
        <div className="h-[130px] flex items-center justify-center gap-[70px]">
          <div className="flex flex-col items-center justify-center ">
            <Image
              src={myData?.profileImageUrl || '/images/profile.png'}
              alt="profile"
              width={80}
              height={80}
              className="rounded-[32px]"
            />
            <div className="text-black font-semibold">{myData?.nickname}</div>
          </div>
          <div className="flex items-center space-x-[50px]">
            <div className="flex flex-col items-center">
              <span className="text-black-0 font-bold">
                {myData?.followingCount}
              </span>
              <span className="text-black-0 text-sm">{FOLLOW_TEXT[0]}</span>
            </div>
            <div className="w-[1px] h-8 bg-gray-600" />
            <div className="flex flex-col items-center">
              <span className="text-black-0 font-bold">
                {myData?.followerCount}
              </span>
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
          {activeTab === 'myPosts' && <MyPosts posts={myPosts} />}
          {activeTab === 'likedPosts' && <LikedPosts posts={likedPosts} />}
        </div>
      </div>
    </div>
  );
};

export default MyPageContainer;
