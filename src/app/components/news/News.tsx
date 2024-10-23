'use client';

import NewsList from '@/app/components/news/NewList';
import FilterBar from '@/app/components/news/NewsFilterBar';
import NewsPick from '@/app/components/news/NewsPick';
import { useState } from 'react';

const News = () => {
  const [selectedFilter, setSelectedFilter] = useState('');

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
      <NewsPick />
      <NewsList />
    </div>
  );
};

export default News;
