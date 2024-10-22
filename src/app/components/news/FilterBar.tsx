import { useState } from 'react';

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
    <div className="flex flex-col items-center w-full mt-[50px] justify-center gap-y-[30px]">
      <div className="flex flex-col items-center gap-y-[18px]">
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {filterOptions.slice(0, 5).map((option) => (
            <button
              key={option}
              onClick={() => handleFilterClick(option)}
              className={`w-[80px] py-2 px-2 rounded-full ${
                selectedFilters.includes(option)
                  ? 'bg-[#F95700] text-white'
                  : 'bg-[#E8E8E8] text-black'
              } text-base font-medium text-center`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 w-full">
          {filterOptions.slice(5, 10).map((option) => (
            <button
              key={option}
              onClick={() => handleFilterClick(option)}
              className={`w-[80px] py-2 px-4 rounded-full ${
                selectedFilters.includes(option)
                  ? 'bg-[#F95700] text-white'
                  : 'bg-[#E8E8E8] text-black'
              } text-base font-medium text-center`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
