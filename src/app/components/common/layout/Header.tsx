'use client';

import { HEADER_PATH, HEADER_TEXT } from '@/app/constants/common';
import { TITLE } from '@/app/constants/main';
import { useUserStore } from '@/app/store/store';
import localFont from 'next/font/local';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LoginModal from '../LoginModal';
import ProfileDropdown from '../ProfileDropdown';

export const delaGothic = localFont({
  src: '../../../static/fonts/DelaGothicOne-Regular.woff2',
  weight: '400',
  display: 'swap',
  variable: '--font-dela',
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
          className={`${delaGothic.className} text-[28px] text-main-1 dark:text-main-1/80`}
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
