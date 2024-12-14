import Icons from '@/app/components/common/Icons';
import { fillter, news } from '@/app/constants/iconPath';
import { NEWS_VIEW_TYPE, PRESS_TYPES } from '@/app/constants/news';
import { BaseSyntheticEvent, Dispatch, SetStateAction, useState } from 'react';

interface NewsPickProps {
  selectedNews: string[];
  setSelectedNews: Dispatch<SetStateAction<string[]>>;
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
  getNews: () => Promise<void>;
}

const NewsPick = ({
  selectedNews,
  setSelectedNews,
  selectedOption,
  setSelectedOption,
  getNews,
}: NewsPickProps) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleNewsClick = (press: string) => {
    if (selectedNews.includes(press)) {
      setSelectedNews(selectedNews.filter((item) => item !== press));
    } else {
      setSelectedNews([...selectedNews, press]);
    }
  };

  const handleSelectValue = (option: string) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const toggleFilterDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex items-center gap-x-[24px] justify-center mt-8">
      <div className="flex gap-x-[24px]">
        {PRESS_TYPES.map((press, i) => (
          <button
            type="button"
            key={press}
            onClick={() => handleNewsClick(press)}
            className={`font-medium ${
              selectedNews.includes(press)
                ? 'text-black border-b-2 border-black'
                : 'text-gray-500'
            }`}
          >
            {press}
          </button>
        ))}
      </div>

      <div className="relative flex text-sm">
        <button
          type="button"
          className="flex  h-[30px] items-center px-1 py-[10px] rounded-[5px] border bg-white border-gray-300"
          onClick={toggleFilterDropdown}
        >
          <span className=" w-[60px] items-start flex ml-2">
            {selectedOption}
          </span>
          <Icons name={fillter} />
        </button>
        {dropdownOpen && (
          <div className="absolute w-[97px] top-[30px] bg-white border border-gray-300 rounded-[5px] shadow-lg z-10">
            {NEWS_VIEW_TYPE.map((option) => (
              <div
                key={option}
                className="w-full text-center px-4 py-1 hover:bg-gray-100"
                onClick={() => handleSelectValue(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        className="bg-black-0 text-white w-[120px] h-[40px] rounded-full flex items-center justify-center gap-2"
        onClick={getNews}
        type="button"
      >
        <Icons name={news} />
        검색
      </button>
    </div>
  );
};

export default NewsPick;
