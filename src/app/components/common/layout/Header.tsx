import { HEADER_TEXT, LOGIN_TEXT } from '@/app/constants/layout';
import { Dela_Gothic_One } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

export const dela = Dela_Gothic_One({
  subsets: ['latin'],
  weight: '400',
});

function Header() {
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
      <div className="flex items-center gap-x-4">
        <Link
          className="flex-center w-[64px] h-[28px] px-1.5 py-1 bg-main-1 text-white text-xs font-semibold rounded-[15px]"
          href="/auth/signIn"
        >
          {LOGIN_TEXT[0]}
        </Link>
        <div className="text-main-1 text-[24px] font-light">|</div>
        <Link className="text-xs font-bold" href="/auth/signUp">
          {LOGIN_TEXT[1]}
        </Link>
      </div>
    </header>
  );
}

export default Header;
