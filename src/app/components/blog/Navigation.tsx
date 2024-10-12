import React from 'react';
import { NAV_OPTIONS } from '@/app/constants/BlogConstants'; // 상수를 가져옴

interface NavigationProps {
  selectedNav: string;
  handleNavClick: (nav: string) => void;
  handleSearchRedirect: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ selectedNav, handleNavClick, handleSearchRedirect }) => {
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
        <button className="nav-button" onClick={handleSearchRedirect}>검색</button>
      </div>
    </div>
  );
};

export default Navigation;
