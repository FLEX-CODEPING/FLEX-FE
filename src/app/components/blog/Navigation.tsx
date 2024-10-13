import React, { useState } from 'react';
import Link from 'next/link';
import { NAV_OPTIONS } from '@/app/constants/BlogConstants';
import { LabelNormal } from './FilterBar'; // LabelNormal 컴포넌트 불러오기

interface NavigationProps {
  selectedNav: string;
  handleNavClick: (nav: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ selectedNav, handleNavClick }) => {
  const [showLabelNormal, setShowLabelNormal] = useState(false); // 추천을 눌렀을 때 LabelNormal 표시 여부 상태

  // 내비게이션 버튼 클릭 핸들러
  const handleNavSelect = (nav: string) => {
    handleNavClick(nav);
    if (nav === '추천') {
      setShowLabelNormal(true); // 추천을 선택했을 때 LabelNormal을 보여줌
    } else {
      setShowLabelNormal(false); // 다른 네비게이션 항목을 선택하면 숨김
    }
  };

  return (
    <div className="w-full">
      <div className="nav-section flex justify-between items-center p-4 border-b border-gray-300">
        <div className="nav-options flex items-center gap-6">
          {NAV_OPTIONS.map((nav) => (
            <button
              key={nav}
              className={`nav-button ${selectedNav === nav ? 'selected' : ''}`}
              onClick={() => handleNavSelect(nav)} // 클릭 시 handleNavSelect 함수 호출
            >
              {nav}
            </button>
          ))}
          
          <Link href="/blog/blogsearch" className="nav-button">
            검색
          </Link>
        </div>
      </div>

      {/* 추천을 선택했을 때 LabelNormal 표시 */}
      {showLabelNormal && <LabelNormal />}
    </div>
  );
};

export default Navigation;
