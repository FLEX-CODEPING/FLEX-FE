'use client';

import { FOLLOW_TEXT, USERPAGE_TEXT } from '@/app/constants/mypage';
import { callDelete, callGet, callPost } from '@/app/utils/callApi';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import UserPosts from './UserPosts';

interface UserPageContainerProps {
  blogName: string;
}

const UserPageContainer = ({ blogName }: UserPageContainerProps) => {
  const [userData, setUserData] = useState<MyBlogInfo | null>(null);
  const [userPosts, setUserPosts] = useState<MyPostCardTypes[]>([]);
  const [isFollowing, setIsFollowing] = useState<boolean | null>(null);

  useEffect(() => {
    if (blogName) {
      const fetchUserBlogInfo = async () => {
        const response = await callGet(`/api/mypage?blogName=${blogName}`);
        if (response.isSuccess) {
          setUserData(response.result);
          setIsFollowing(response.result.following);
        }
      };

      const fetchUserPosts = async () => {
        const response = await callGet(
          `/api/mypage/posts?blogName=${blogName}`,
        );
        if (response.isSuccess) {
          setUserPosts(response.result);
        }
      };

      fetchUserBlogInfo();
      fetchUserPosts();
    }
  }, [blogName]);

  const handleFollowClick = async () => {
    try {
      if (isFollowing) {
        const response = await callDelete(
          `/api/follow/delete?id=${userData?.userId}`,
        );
        if (response.isSuccess) {
          setIsFollowing(false);
          setUserData((prevData) => {
            if (prevData) {
              return {
                ...prevData,
                followerCount: prevData.followerCount - 1,
              };
            }
            return prevData;
          });
        }
      } else {
        const response = await callPost(`/api/follow?id=${userData?.userId}`);
        if (response.isSuccess) {
          setIsFollowing(true);
          setUserData((prevData) => {
            if (prevData) {
              return {
                ...prevData,
                followerCount: prevData.followerCount + 1,
              };
            }
            return prevData;
          });
        }
      }
    } catch (error) {
      console.error('팔로우/팔로우 해제 요청 중 오류가 발생했습니다:', error);
    }
  };

  return (
    <div className="mb-[200px] px-[10%]">
      <div className="flex flex-col px-[5%] text-[20px] relative">
        <div className="text-black text-[24px] font-bold">
          {userData?.blogName}
        </div>
        <div className="h-[130px] flex items-center justify-center gap-[70px]">
          <div className="flex-col-center justify-center">
            <Image
              src={userData?.profileImageUrl || '/images/profile.png'}
              alt="profile"
              width={80}
              height={80}
              className="rounded-[32px]"
            />
            <div className="text-black-0 font-semibold">
              {userData?.nickname}
            </div>
          </div>
          <div className="flex items-center space-x-[50px]">
            <div className="flex-col-center text-black-0">
              <span className="font-bold">{userData?.followingCount}</span>
              <span className="text-sm">{FOLLOW_TEXT[0]}</span>
            </div>
            <div className="w-[1px] h-8 bg-gray-600" />
            <div className="flex-col-center text-black-0">
              <span className="font-bold">{userData?.followerCount}</span>
              <span className="text-sm">{FOLLOW_TEXT[1]}</span>
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
            {isFollowing ? USERPAGE_TEXT[1] : USERPAGE_TEXT[0]}
          </button>
        </div>
        <div className="mt-[40px]">
          <UserPosts posts={userPosts} />
        </div>
      </div>
    </div>
  );
};

export default UserPageContainer;
