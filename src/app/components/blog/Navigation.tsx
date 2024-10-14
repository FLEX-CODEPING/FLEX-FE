import  { useState } from 'react';
import Link from 'next/link';
import { NAV_OPTIONS } from '@/app/constants/BlogConstants';
import { LabelNormal } from './FilterBar'; 
import Image from 'next/image';

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
    <div className="w-full">
      <div className="nav-section flex justify-between items-center p-4">
        <div className="nav-options flex items-center gap-6">
          {NAV_OPTIONS.map((nav) => (
            <button
              key={nav}
              className={`nav-button ${selectedNav === nav ? 'selected' : ''}`}
              onClick={() => handleNavSelect(nav)} 
              
            >
              {nav}
            </button>
          ))}
          
          <Link href="/blog/blogsearch" className="nav-button">
      <div className="icon-container">
      <Image
          src="/images/2c.png"
          alt="2cImg"
          width={18}
          height={18}
        />
      </div>
          </Link>
        </div>
      </div>

      
      {showLabelNormal && <LabelNormal />}
    </div>
  );
};

export default Navigation;
