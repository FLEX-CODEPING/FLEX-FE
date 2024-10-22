'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { NAV_OPTIONS } from '@/app/constants/blogconstants';
import Image from 'next/image';
import ViewTypeDropDown from './ViewTypeDropDown';

const Navigation = () => {
  const [selectedNav, setSelectedNav] = useState('전체');
  const router = useRouter();
  const pathname = usePathname();

  const handleNavSelect = (nav: string) => {
    setSelectedNav(nav);
    if (nav === '추천') {
      router.push('/blog/recommend');
    } else if (nav === '전체') {
      router.push('/blog/all');
    }
  };

  useEffect(() => {
    if (pathname === '/blog/recommend') {
      setSelectedNav('추천');
    } else if (pathname === '/blog/all') {
      setSelectedNav('전체');
    }
  }, [pathname]);

  return (
    <div className="w-full flex">
      <div className="flex w-full ml-[80px] mr-[38px] mt-[54px] justify-between items-center gap-[10px]">
        <div className="flex items-center gap-6">
          {NAV_OPTIONS.map((nav) => (
            <Link
              href={
                nav === '추천'
                  ? '/blog/recommend'
                  : nav === '전체'
                    ? '/blog/all'
                    : `/${nav.toLowerCase()}`
              }
              key={nav}
            >
              <button
                className={`text-[24px] px-4 py-2 cursor-pointer bg-white mr-2 ${selectedNav === nav ? 'selected' : ''}`}
                onClick={() => handleNavSelect(nav)}
                style={{
                  fontWeight: selectedNav === nav ? 'bold' : 'normal',
                  borderBottom:
                    selectedNav === nav ? '2px solid black' : 'none',
                }}
              >
                {nav}
              </button>
            </Link>
          ))}

          <Link href="/blog/blogsearch" className="nav-button">
            <Image src="/images/2c.png" alt="2cImg" width={18} height={18} />
          </Link>
        </div>
        <ViewTypeDropDown />
      </div>
    </div>
  );
};

export default Navigation;
