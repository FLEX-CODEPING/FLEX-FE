import React from 'react';
import Link from 'next/link';
import { NAV_OPTIONS } from '@/app/constants/BlogConstants';

interface NavigationProps {
  selectedNav: string;
  handleNavClick: (nav: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ selectedNav, handleNavClick }) => {
  return (
    <div className="nav-section flex justify-between items-center p-4 border-b border-gray-300">
      <div className="nav-options flex items-center gap-6">
        {NAV_OPTIONS.map((nav) => (
          <button
            key={nav}
            className={`nav-button ${selectedNav === nav ? 'selected' : ''}`}
            onClick={() => handleNavClick(nav)}
          >
            {nav}
          </button>
        ))}
        {/* a 태그 제거하고 Link 컴포넌트에 직접 스타일 적용 */}
        <Link href="/blog/blogsearch" className="nav-button">
          검색
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
