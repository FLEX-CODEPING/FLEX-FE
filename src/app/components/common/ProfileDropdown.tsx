'use client';

import { HEADER_PROFILE_TEXT, LOGIN_TEXT } from '@/app/constants/common';
import { handleLogout } from '@/app/utils/setToken';
import { useUser } from '@/app/utils/useUser';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const ProfileDropdown = () => {
  const [isHover, setIsHover] = useState(false);
  const { user } = useUser();

  const isLogin = user?.isSuccess;

  return (
    <div className="flex flex-col relative">
      <div className="flex items-center gap-x-4">
        <Link
          className="flex-center w-[64px] h-[28px] px-1.5 py-1 bg-main-1 text-white text-xs font-semibold rounded-[15px]"
          href="/blog/post"
        >
          {LOGIN_TEXT[0]}
        </Link>
        <div className="text-main-1 text-[24px] font-light">|</div>
        {isLogin ? (
          <div
            className="flex gap-x-2 items-center pb-1 pt-1"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <Image
              src={'/images/complete1.png'}
              alt={'profile'}
              width={20}
              height={20}
            />
            <Link className="text-xs font-bold" href="/">
              {user?.result.nickname}
            </Link>
            {isHover && (
              <div className="absolute flex flex-col top-[26px] left-[103px] border border-gray-2 text-xs rounded-[8px] cursor-pointer z-10 bg-white">
                <div className="w-[90px] h-[32px] flex-center border-b border-gray-2 hover:text-main-1">
                  {HEADER_PROFILE_TEXT[0]}
                </div>
                <div className="w-[90px] h-[32px] flex-center border-b border-gray-2 hover:text-main-1">
                  {HEADER_PROFILE_TEXT[1]}
                </div>
                <div
                  className="w-[90px] h-[32px] flex-center border-b border-gray-2 hover:text-main-1"
                  onClick={handleLogout}
                >
                  {HEADER_PROFILE_TEXT[2]}
                </div>
                <div className="w-[90px] h-[32px] flex-center hover:text-main-1">
                  {HEADER_PROFILE_TEXT[3]}
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link className="text-xs font-bold" href="/auth/signIn">
            {LOGIN_TEXT[1]}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProfileDropdown;
