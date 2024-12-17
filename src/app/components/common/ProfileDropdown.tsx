'use client';

import {
  HEADER_PROFILE_LINK,
  HEADER_PROFILE_TEXT,
  LOGIN_TEXT,
} from '@/app/constants/common';
import { useUserStore } from '@/app/store/store';
import { handleLogout } from '@/app/utils/setToken';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const ProfileDropdown = () => {
  const [isHover, setIsHover] = useState(false);
  const { user } = useUserStore();

  const isLogin = user?.isSuccess;

  return (
    <div className="flex flex-col relative">
      <div className="flex items-center gap-x-4">
        <Link
          className="flex-center w-[64px] h-[30px] px-1.5 py-1 bg-main-1 text-white text-xs font-semibold rounded-[14px]"
          href="/blog/post"
        >
          {LOGIN_TEXT[0]}
        </Link>
        {isLogin ? (
          <div
            className="flex gap-x-2 items-end pb-1.5 pt-1 w-20"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <Image
              src={user.result.profileImageUrl || '/images/profile.png'}
              alt="profile"
              width={20}
              height={20}
              className="rounded-full"
            />
            <Link className="text-sm font-medium" href="/">
              {user?.result.nickname}
            </Link>
            {isHover && (
              <div className="absolute px-2 py-1 flex flex-col top-7 left-[83px] border border-gray-2 gap-y-1 text-xs text-gray-1 rounded z-10 bg-white">
                {HEADER_PROFILE_TEXT.map((text, i) => (
                  <Link
                    className="w-[84px] rounded cursor-pointer h-[32px] flex-center hover:bg-gray-5 hover:text-black-1 hover:font-semibold"
                    href={HEADER_PROFILE_LINK[i]}
                  >
                    {text}
                  </Link>
                ))}
                <div
                  className="w-[84px] rounded cursor-pointer h-[32px] flex-center hover:bg-gray-3 hover:text-black-1  hover:font-semibold"
                  onClick={handleLogout}
                >
                  {LOGIN_TEXT[3]}
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link className="text-xs font-bold w-20" href="/auth/signIn">
            {LOGIN_TEXT[1]}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProfileDropdown;
