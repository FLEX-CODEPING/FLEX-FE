'use client';

import Icons from '@/app/components/common/Icons';
import { k, title } from '@/app/constants/iconPath';
import { formatDate } from '@/app/utils/date';
import { truncateString } from '@/app/utils/truncate';
import { motion } from 'framer-motion';

interface NewsListProps {
  newsData: NewsDataTypes;
  keyword: string;
  dateRange: string;
}

const NewsList = ({ newsData, keyword, dateRange }: NewsListProps) => {
  const handleNewsClick = (url: string) => {
    window.open(url, '_blank');
  };

  const fadeInVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 1.5 },
    }),
  };

  return (
    <div className="max-w-[1200px] mx-auto mt-24">
      <div className="flex items-center mb-4 pl-4">
        <Icons name={title} />
        <h3 className="text-xl font-bold ml-2">
          {dateRange} {keyword} 관련 뉴스 요약 결과입니다.
        </h3>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        className="news-items p-6 border border-[#7a7a7a] rounded-[15px]"
      >
        <ul className="list-none space-y-2">
          {newsData.summaries.map((summary) => (
            <motion.li
              key={`${summary.title}-${summary.content}`} // 고유한 값 사용
              variants={fadeInVariants}
              className="flex"
            >
              <span className="font-bold">{summary.title}</span>
              <span className="ml-2">
                {truncateString(summary.content, 60)}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        className="mt-12 max-w-[1200px] mx-auto"
      >
        <ul className="space-y-4">
          {newsData.sources.map((news) => (
            <motion.li
              key={`${news.title}-${news.date}`} // 고유한 값 사용
              variants={fadeInVariants}
              className="flex justify-between items-start pb-2 text-sm text-gray-500"
            >
              <span className="text-left w-[120px] pl-3">
                {formatDate(news.date)}
              </span>
              <span className="font-semibold text-gray-700 text-left w-[400px]">
                {truncateString(news.title, 36)}
              </span>
              <span
                className="text-left w-[500px] cursor-pointer"
                onClick={() => handleNewsClick(news.url)}
              >
                {truncateString(news.content, 42)}
              </span>
              <Icons
                name={k}
                className="cursor-pointer"
                onClick={() => handleNewsClick(news.url)}
              />
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default NewsList;
