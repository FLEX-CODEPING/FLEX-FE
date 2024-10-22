import { BaseSyntheticEvent, useState } from 'react';
import Icons from '@/app/components/common/Icons';
import { fillter, news } from '@/app/constants/iconPath';

const NewsPick: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<string>('한국경제');
  const [selectedOption, setSelectedOption] = useState<string>('기간 선택');
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const options = ['1일', '1주', '1개월', '1년'];

  const handleNewsClick = (news: string) => {
    setSelectedNews(news);
  };

  const handleSelectValue = (e: BaseSyntheticEvent) => {
    const current = e.target.getAttribute('value');
    setSelectedOption(current);
    setDropdownOpen(false);
  };

  const toggleFilterDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex items-center gap-x-[24px] justify-center mt-8">
      <div className="flex gap-x-[24px]">
        <button
          onClick={() => handleNewsClick('한국경제')}
          className={`font-medium ${
            selectedNews === '한국경제'
              ? 'text-black border-b-2 border-black'
              : 'text-gray-500'
          }`}
        >
          한국경제
        </button>
        <button
          onClick={() => handleNewsClick('매일경제')}
          className={`font-medium ${
            selectedNews === '매일경제'
              ? 'text-black border-b-2 border-black'
              : 'text-gray-500'
          }`}
        >
          매일경제
        </button>
        <button
          onClick={() => handleNewsClick('서울경제')}
          className={`font-medium ${
            selectedNews === '서울경제'
              ? 'text-black border-b-2 border-black'
              : 'text-gray-500'
          }`}
        >
          서울경제
        </button>
      </div>

      
      <div className="relative flex text-sm">
        <button
          className="flex w-[119px] h-[30px] items-center px-3 py-[10px] rounded-[5px] border bg-white border-gray-300"
          onClick={toggleFilterDropdown}
        >
          <span className="mr-4">{selectedOption}</span>
          <Icons name={fillter} />
        </button>
        {dropdownOpen && (
          <div className="absolute w-[119px] top-[30px] bg-white border border-gray-300 rounded-[5px] shadow-lg z-10">
            {options.map((option) => (
              <button
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

      <button className="bg-black text-white w-[120px] h-[40px] rounded-full flex items-center justify-center gap-2">
        <Icons name={news} />
        검색
      </button>
    </div>
  );
};

export default NewsPick;
