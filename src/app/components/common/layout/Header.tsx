'use client';

import { HEADER_PATH, HEADER_TEXT } from '@/app/constants/common';
import { Dela_Gothic_One } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ProfileDropdown from '../ProfileDropdown';

export const dela = Dela_Gothic_One({
  subsets: ['latin'],
  weight: '400',
});

function Header() {
  const path = usePathname();
  if (path === '/blog/post') return null;

  return (
    <header className="w-full flex items-center justify-between h-[80px] px-[5%] text-[20px]">
      <Link className="flex gap-x-2 items-center" href="/">
        <p className={`${dela.className} text-[28px] text-main-1`}>FLEX</p>
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