'use client';

import NewsList from '@/app/components/news/NewList';
import FilterBar from '@/app/components/news/NewsFilterBar';
import NewsPick from '@/app/components/news/NewsPick';
import { INTEREST_MAP } from '@/app/constants/auth';
import { NEWS_VIEW_TYPE_MAP, PRESS_TYPES_MAP } from '@/app/constants/news';
import { callGet } from '@/app/utils/callApi';
import { useState } from 'react';

const News = () => {
  const [selectedFilter, setSelectedFilter] = useState('국내주식');
  const [selectedNews, setSelectedNews] = useState<string[]>(['한국경제']);
  const [selectedOption, setSelectedOption] = useState<string>('기간 선택');
  const [newsDatas, setNewsDatas] = useState<NewsDataTypes | null>(null);

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

  const getNews = async () => {
    const response = await callGet(
      `/api/news/?keyword=${selectedFilter}&period=${NEWS_VIEW_TYPE_MAP[selectedOption]}&${formatQuery(selectedNews)}`,
    );
    setNewsDatas(response.result);
    console.log(response.result, '뉴스 응답');
  };

  console.log(newsDatas, '뉴스  스테이트');
  return (
    <div className="news-page-container bg-white w-full mx-auto py-12">
      <div className="news-title text-center mt-12">
        <h2 className=" text-[36px] font-normal text-black text-center leading-[60px] mb-12">
          키워드를 선택하여 <br />
          <span className="text-black font-bold text-[50px]">AI 종합 뉴스</span>
          <span className="text-black text-[50px]"> 요약을 받아보세요</span>
        </h2>
      </div>
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
      <NewsList />
    </div>
  );
};

export default News;
