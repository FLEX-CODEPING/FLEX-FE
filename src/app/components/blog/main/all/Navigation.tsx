import { NAV_OPTIONS } from '@/app/constants/blog';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import ViewTypeDropDown from './ViewTypeDropDown';

interface NavigationProps {
  selectedNav: string;
  setSelectedNav: Dispatch<SetStateAction<BlogViewType>>;
}

const Navigation = ({ selectedNav, setSelectedNav }: NavigationProps) => {
  return (
    <div className="w-full flex">
      <div className="flex w-full mt-[54px] justify-between items-center gap-[10px]">
        <div className="flex items-center gap-6">
          {NAV_OPTIONS.map((nav, i) => (
            <div
              key={nav}
              onClick={() => setSelectedNav(nav)}
              className={`text-2xl px-4 py-2 cursor-pointer bg-white mr-2 ${selectedNav === nav ? 'font-bold border-b-2 border-b-black-0' : ''}`}
            >
              {nav}
            </div>
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
