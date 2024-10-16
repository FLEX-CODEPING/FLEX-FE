'use client'
import { HEADER_TEXT, LOGIN_TEXT } from '@/app/constants/layout';
import { Dela_Gothic_One } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const dela = Dela_Gothic_One({
  subsets: ['latin'],
  weight: '400',
});

function Header() {

  const pathname = usePathname();

  if (pathname === '/blog/post') return null;

  return (
    <header className="w-full flex items-center justify-between h-[108px] px-[5%] text-2xl">
      <div className="flex gap-x-2 items-center">
        <Image width={40} height={40} src="/Images/logo.png" alt="logo" />
        <p className={`${dela.className} text-[28px] text-main-1`}>FLEX</p>
      </div>
      <div className="flex gap-x-[50px]">
        {HEADER_TEXT.map((text) => {
          
          const displayText = text === 'blog' ? '블로그' : text;
          const href = text === 'blog' ? '/blog' : `/${text.toLowerCase()}`;

          

          return (
            <Link href={href} key={text}>
              <span className="cursor-pointer">{displayText}</span>
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-x-4">
        <Link
          className="flex-center w-[72px] h-[36px] px-1.5 py-1 bg-main-1 text-white text-base font-semibold rounded-[15px]"
          href="/auth/signIn"
        >
          {LOGIN_TEXT[0]}
        </Link>
        <div className="text-main-1 text-[28px] font-light">|</div>
        <Link className="text-base font-bold" href="/auth/signUp">
          {LOGIN_TEXT[1]}
        </Link>
      </div>
    </header>
  );
}

export default Header;
