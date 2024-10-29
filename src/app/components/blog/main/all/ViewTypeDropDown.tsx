'use client';

import Icons from '@/app/components/common/Icons';
import { FILTER_OPTIONS } from '@/app/constants/blog';
import { fillter } from '@/app/constants/iconPath';
import { BaseSyntheticEvent, useState } from 'react';

const ViewTypeDropDown = () => {
  const [selectedOption, setSelectedOption] = useState('검색필터');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSelectValue = (e: BaseSyntheticEvent) => {
    const current = e.target.getAttribute('value');
    setSelectedOption(current);
    setDropdownOpen(false);
  };

  const toggleFilterDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative flex text-sm">
      <button
        type="button"
        className="flex w-[119px] h-[30px] items-center px-4 py-[10px]  rounded-[5px] border bg-white border-gray-300"
        onClick={toggleFilterDropdown}
      >
        <span className="mr-4">{selectedOption}</span>
        <Icons name={fillter} />
      </button>
      {dropdownOpen && (
        <div className="absolute w-[119px] top-[30px] bg-white border border-gray-300 rounded-[5px] shadow-lg z-10">
          {FILTER_OPTIONS.map((option) => (
            <button
              type="button"
              key={option}
              value={option}
              className="w-full text-left px-4 py-1 hover:bg-gray-100"
              onClick={handleSelectValue}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewTypeDropDown;
