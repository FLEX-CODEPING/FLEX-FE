'use client';
import Icons from '@/app/components/common/Icons';
import { k, title } from '@/app/constants/iconPath';
import { formatDate } from '@/app/utils/date';
import { truncateString } from '@/app/utils/truncate';

interface NewsListProps {
  newsData: NewsDataTypes;
  keyword: string;
}

const NewsList = ({ newsData, keyword }: NewsListProps) => {
  return (
    <div className="max-w-[1200px] mx-auto mt-24">
      <div className="flex items-center mb-4 pl-4">
        <Icons name={title} />
        <h3 className="text-xl font-bold ml-2">
          {keyword}관련 뉴스 요약 결과입니다.
        </h3>
      </div>
      <div className="news-items p-6 border border-[#7a7a7a] rounded-[15px]">
        <ul className="list-none space-y-2">
          {newsData.summaries.map((summary, index) => (
            <li key={index} className="flex">
              <span className="font-bold">{summary.title}</span>
              <span className="ml-2">
                {truncateString(summary.content, 60)}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 max-w-[1200px] mx-auto">
        <ul className="space-y-4">
          {newsData.sources.map((news, index) => (
            <li
              key={index}
              className="flex justify-between items-start pb-2 text-sm text-gray-500"
            >
              <span className="text-left w-[150px]">
                {formatDate(news.date)}
              </span>
              <span className="font-semibold text-gray-700 text-left w-[400px]">
                {truncateString(news.title, 40)}
              </span>
              <span className="text-left w-[500px] cursor-pointer">
                {truncateString(news.content, 46)}
              </span>
              <Icons name={k} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsList;
