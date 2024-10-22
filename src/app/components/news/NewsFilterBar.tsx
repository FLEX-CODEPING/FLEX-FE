import Icons from '@/app/components/common/Icons';
import { news } from '@/app/constants/iconPath';
import React from 'react';

interface NewsFilterBaProps {
  selectedFilters: string[];
  handleFilterClick: (option: string) => void;
  filterOptions: string[];
}

const NewsFilterBar: React.FC<NewsFilterBaProps> = ({
  selectedFilters,
  handleFilterClick,
  filterOptions,
}) => {
  return (
    <>
      <div className="flex flex-col items-center w-full max-w-[500px] mt-[50px] mx-auto px-4 ml-[410px]">
        <div className="flex flex-wrap justify-center gap-4 w-full mb-1">
          {filterOptions.slice(0, 5).map((option) => (
            <button
              type="button"
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

        <div className="flex flex-wrap justify-center gap-4 w-full mt-4 mb-6">
          {filterOptions.slice(5, 10).map((option) => (
            <button
              type="button"
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

      <div
        style={{
          position: 'absolute',
          top: '410px',
          left: 'calc(80vw - 220px)',
        }}
      >
        <button
          type="button"
          className="bg-black text-white w-[160px] h-[40px] rounded-[5px] flex items-center justify-center gap-2"
        >
          <Icons name={news} />
          뉴스 검색
        </button>
      </div>
    </>
  );
};

export default NewsFilterBar;
