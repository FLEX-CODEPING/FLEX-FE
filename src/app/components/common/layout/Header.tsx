'use client';

import { HEADER_PATH, HEADER_TEXT } from '@/app/constants/common';
import { TITLE } from '@/app/constants/main';
import { useUserStore } from '@/app/store/store';
import { Dela_Gothic_One } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LoginModal from '../LoginModal';
import ProfileDropdown from '../ProfileDropdown';

export const dela = Dela_Gothic_One({
  subsets: ['latin'],
  weight: '400',
});

function Header() {
  const path = usePathname();
  const { user } = useUserStore();

  if (path === '/blog/post') return null;

  const isChecked =
    user?.isSuccess ||
    path === '/' ||
    path === '/auth/signIn' ||
    path === '/auth/signUp' ||
    path === '/auth/complete';

  return (
    <header className="w-full flex items-center justify-between h-[80px] px-[5%] text-[20px] dark:bg-black-0 dark:text-gray-2">
      {!isChecked && <LoginModal />}
      <Link className="flex gap-x-2 items-center" href="/">
        <p
          className={`${dela.className} text-[28px] text-main-1 dark:text-main-1/80`}
        >
          {TITLE}
        </p>
      </Link>
      <div className="flex gap-x-[50px]">
        {HEADER_TEXT.map((text, i) => (
          <Link key={text} href={HEADER_PATH[i]}>
            {text}
          </Link>
        ))}
      </div>
      <ProfileDropdown />
    </header>
  );
}
export default Header;
