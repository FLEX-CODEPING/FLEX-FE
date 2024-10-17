import Link from 'next/link';
import React, { useState } from 'react';
import { NAV_OPTIONS } from '@/app/constants/BlogConstants';
import Image from 'next/image';
import ViewTypeDropDown from './ViewTypeDropDown';

interface NavigationProps {
  selectedNav: string;
  handleNavClick: (nav: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ selectedNav, handleNavClick }) => {
  const [showLabelNormal, setShowLabelNormal] = useState(false);

  const handleNavSelect = (nav: string) => {
    handleNavClick(nav);
    if (nav === '추천') {
      setShowLabelNormal(true);
    } else {
      setShowLabelNormal(false);
    }
  };

  return (
    <div className="w-full flex ">
      <div className="flex w-full ml-[80px] mr-[38px] mt-[54px] justify-between items-center gap-[10px]">
        <div className="flex items-center gap-6">
          {NAV_OPTIONS.map((nav) => (
            <Link href={nav === '추천' ? '/blog/recommend' : nav === '전체' ? '/blog/all' : `/${nav.toLowerCase()}`} key={nav}>
              <button
                className={`nav-button ${selectedNav === nav ? 'selected' : ''}`}
                onClick={() => handleNavSelect(nav)}
              >
                {nav}
              </button>
            </Link>
          ))}

          <Link href="/blog/blogsearch" className="nav-button">
            <Image
              src="/images/2c.png"
              alt="2cImg"
              width={18}
              height={18}
            />
          </Link>
        </div>
        <ViewTypeDropDown />
      </div>
    </div>
  );
};

export default Navigation;
