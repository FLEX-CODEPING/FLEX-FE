'use client';

import NewsList from '@/app/components/news/NewList';
import FilterBar from '@/app/components/news/NewsFilterBar';
import NewsPick from '@/app/components/news/NewsPick';
import { NEWS_VIEW_TYPE_MAP, PRESS_TYPES_MAP } from '@/app/constants/news';
import { callGet } from '@/app/utils/callApi';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const News = () => {
  const [selectedFilter, setSelectedFilter] = useState('국내주식');
  const [currentKeyword, setCurrentKeyword] = useState('');
  const [selectedNews, setSelectedNews] = useState<string[]>(['한국경제']);
  const [selectedOption, setSelectedOption] = useState<string>('기간 선택');
  const [newsDatas, setNewsDatas] = useState<NewsDataTypes | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [dateRange, setDateRange] = useState<string>('');

  const formatQuery = (selectedPress: string[]) => {
    if (selectedPress.length === 0) {
      return `press=hk`;
    }

    const selectedPressQueries = selectedPress
      .map((press) => `press=${PRESS_TYPES_MAP[press]}`)
      .filter(Boolean)
      .join('&');
    return selectedPressQueries;
  };

  const calculateDateRange = (days: number | undefined): string => {
    // 기본값이 없거나 잘못된 경우 처리
    if (!days || days <= 0) {
      return '기간 선택'; // 기본값을 명시적으로 설정
    }

    const today = new Date();
    const endDate = new Date(today);
    endDate.setDate(today.getDate() - 1);

    const startDate = new Date(endDate);
    startDate.setDate(endDate.getDate() - (days - 1));

    const formatDate = (date: Date) => {
      return `${date.getFullYear()}년 ${String(date.getMonth() + 1).padStart(
        2,
        '0',
      )}월 ${String(date.getDate()).padStart(2, '0')}일`;
    };

    return days === 1
      ? `${formatDate(endDate)}`
      : `${formatDate(startDate)} ~ ${formatDate(endDate)}`;
  };

  const getNews = async () => {
    setLoading(true);
    try {
      const periodDays = NEWS_VIEW_TYPE_MAP[selectedOption] || 1; // 기본값 1일로 설정
      const calculatedRange = calculateDateRange(periodDays);
      setDateRange(calculatedRange);

      const response = await callGet(
        `/api/news/?keyword=${selectedFilter}&period=${periodDays}&${formatQuery(
          selectedNews,
        )}`,
      );
      setNewsDatas(response.result);
      setCurrentKeyword(selectedFilter);
    } catch (error) {
      console.error('뉴스 데이터 로딩 중 오류 발생:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <motion.div
      className="bg-white w-full mx-auto py-12 flex-col-center gap-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className=" text-[36px] font-normal text-black text-center leading-[60px] my-6">
        키워드를 선택하여 <br />
        <span className="font-bold text-[50px]">AI 종합 뉴스</span>
        <span className="text-[50px]"> 요약을 받아보세요</span>
      </h2>
      <FilterBar
        selectedFilters={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <NewsPick
        getNews={getNews}
        selectedNews={selectedNews}
        setSelectedNews={setSelectedNews}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      {loading ? (
        <div className="flex flex-col items-center justify-center text-2xl font-semibold w-[800px] h-[360px] gap-y-10 z-5">
          <motion.div
            className="text-center text-2xl font-semibold"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            😉 뉴스 데이터를 불러오는 중...
          </motion.div>
          <div className="flex gap-3 justify-center items-center mt-7">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-4 h-4 bg-main-1 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        newsDatas && (
          <NewsList
            newsData={newsDatas}
            keyword={currentKeyword}
            dateRange={dateRange}
          />
        )
      )}
    </motion.div>
  );
};

export default News;
