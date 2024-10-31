'use client';

import { HEADER_PATH, HEADER_TEXT } from '@/app/constants/common';
import { useUser } from '@/app/utils/useUser';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LoginModal from '../LoginModal';
import ProfileDropdown from '../ProfileDropdown';

function Header() {
  const path = usePathname();
  const { user } = useUser();

  if (path === '/blog/post') return null;

  const isChecked =
    user?.isSuccess ||
    path === '/' ||
    path === '/auth/signIn' ||
    path === '/auth/signUp' ||
    path === '/auth/complete';

  return (
    <header className="w-full flex items-center justify-between h-[80px] px-[5%] text-[20px]">
      {!isChecked && <LoginModal />}
      <Link className="flex gap-x-2 items-center" href="/">
        <p className={`font-dela text-[28px] text-main-1`}>FLEX</p>
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
