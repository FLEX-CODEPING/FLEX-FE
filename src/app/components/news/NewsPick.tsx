import { useState } from 'react';
import Icons from '@/app/components/common/Icons';
import { news } from '@/app/constants/iconPath';

const NewsPick: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<string>('한국경제');

  const handleNewsClick = (news: string) => {
    setSelectedNews(news);
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

      <select className="border border-gray-300 rounded-[5px]  w-[119px] h-[30px] p-1 text-sm">
        <option value="">기간 선택</option>
        <option value="1d">1일</option>
        <option value="1w">1주</option>
        <option value="1m">1개월</option>
        <option value="1y">1년</option>
      </select>

      <button className="bg-black text-white w-[120px] h-[40px] rounded-full flex items-center justify-center gap-2">
        <Icons name={news} />
        검색
      </button>
    </div>
  );
};

export default NewsPick;
