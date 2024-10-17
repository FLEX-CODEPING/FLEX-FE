import React from 'react';
import Icons from '@/app/components/common/Icons';
import { news } from '@/app/constants/iconPath';

interface FilterBarProps {
  selectedFilters: string[]; 
  handleFilterClick: (option: string) => void;
  filterOptions: string[];
}

const FilterBar: React.FC<FilterBarProps> = ({
  selectedFilters,
  handleFilterClick,
  filterOptions,
}) => {
  return (
    <div className="mb-12 flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-4 w-full max-w-[900px]">
        {filterOptions.slice(0, 5).map((option) => (
          <button
            key={option}
            onClick={() => handleFilterClick(option)}
            className={`w-[80px] py-2 px-2 rounded-full ${
              selectedFilters.includes(option) ? "bg-[#F95700] text-white" : "bg-[#E8E8E8] text-black"
            } text-base font-medium text-center`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4 w-full max-w-[900px] mt-4">
        {filterOptions.slice(5, 10).map((option) => (
          <button
            key={option}
            onClick={() => handleFilterClick(option)}
            className={`w-[80px] py-2 px-4 rounded-full ${
              selectedFilters.includes(option) ? "bg-[#F95700] text-white" : "bg-[#E8E8E8] text-black"
            } text-base font-medium text-center`}
          >
            {option}
          </button>
        ))}
      </div>


      <div>
          <button className="bg-black text-white w-[160px] h-[40px] rounded-[5px] flex items-center justify-center gap-2">
            <Icons name={news} />
            뉴스 검색
          </button>
      </div>
    </div>
  );
};

export default FilterBar;
