'use client';

import { INTEREST_LIST } from '@/app/constants/auth';
import { Dispatch, SetStateAction } from 'react';

interface FilterBarProps {
  selectedFilters: string;
  setSelectedFilter: Dispatch<SetStateAction<string>>;
}

const NewsFilterBar: React.FC<FilterBarProps> = ({
  selectedFilters,
  setSelectedFilter,
}) => {
  return (
    <div className="flex flex-col items-center w-full mt-[50px] justify-center gap-y-[30px]">
      <div className="flex flex-col items-center gap-y-[18px]">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-5 w-[580px]">
          {INTEREST_LIST.map((interest) => (
            <button
              type="button"
              key={interest}
              onClick={() =>
                selectedFilters === interest
                  ? setSelectedFilter('')
                  : setSelectedFilter(interest)
              }
              className={`w-[80px] py-2 px-2 rounded-full ${
                selectedFilters.includes(interest)
                  ? 'bg-[#F95700] text-white'
                  : 'bg-[#E8E8E8] text-black'
              } text-base font-medium text-center`}
            >
              {interest}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsFilterBar;
