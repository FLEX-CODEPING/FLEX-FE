'use client';

import { rightArrow } from '@/app/constants/iconPath';
import { MAIN_CONTENTS_TITLE } from '@/app/constants/main';
import { callGet } from '@/app/utils/callApi';
import { getTodayDateBar } from '@/app/utils/date';
import { truncateString } from '@/app/utils/truncate';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Icons from '../../common/Icons';

const DailyNews = () => {
  const [newsData, setNewsData] = useState<DailyArticleTypes[]>([]);
  const today = getTodayDateBar();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await callGet(`/api/main/dailyNews`);
      setNewsData(response.result.sources.slice(0, 4));
    };
    fetchPost();
  }, []);

  return (
    <div className="flex-col-center w-full gap-y-5 text-black-0/85">
      <div className="w-full flex items-end justify-between px-3 py-4 border-b border-gray-2">
        <p className="text-2xl font-semibold">{MAIN_CONTENTS_TITLE[1]}</p>
      </div>
      <div className="w-full flex-wrap flex gap-x-12 gap-y-5">
        {newsData.map((news, i) => (
          <Link
            href={news.url}
            className="w-full flex-col-center border-b border-gray-2 pb-3"
            key={news.title}
          >
            <motion.div
              key={news.title}
              whileHover={{
                scale: 1.03,
              }}
              transition={{ type: 'spring', stiffness: 150, damping: 20 }}
              className="w-full flex-col-center pl-3 pr-2 gap-y-3 cursor-pointer"
            >
              <div className="w-full flex items-center justify-between font-semibold">
                <p className="text-[15px]">{news.title || '제목'}</p>
                <p className="text-[10px]">{news.date.slice(0, 10)}</p>
              </div>
              <div className="w-full flex items-end justify-between font-normal">
                <p className="text-[13px] w-[580px] h-10">
                  {truncateString(news.content, 120)}
                </p>
                <Icons name={rightArrow} />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DailyNews;
