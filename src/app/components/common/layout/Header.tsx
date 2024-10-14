'use client'
import { HEADER_TEXT, LOGIN_TEXT } from '@/app/constants/layout';
import { Dela_Gothic_One } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ProfileDropdown from '../ProfileDropdown';

export const dela = Dela_Gothic_One({
  subsets: ['latin'],
  weight: '400',
});

function Header() {

  const pathname = usePathname();

  if (pathname === '/blog/post') return null;

  return (
    <header className="w-full flex items-center justify-between h-[108px] px-[5%] text-xl">
      <Link className="flex gap-x-2 items-center" href="/">
        <Image width={40} height={40} src="/Images/logo.png" alt="logo" />
        <p className={`${dela.className} text-[28px] text-main-1`}>FLEX</p>
      </Link>
      <div className="flex">
        {HEADER_TEXT.map((text, i) => (
          <p className="mr-[50px]" key={text}>
            {text}
          </p>
        ))}
      </div>
      <ProfileDropdown />
    </header>
  );
}

export default Header;
