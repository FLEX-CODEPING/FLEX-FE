'use client';
import Icons from '@/app/components/common/Icons';
import { likeSmall } from '@/app/constants/iconPath';
import React, { useState } from 'react';
import FilterBar from '@/app/components/news/FilterBar';
import { filterOptions } from '@/app/constants/news';
import NewsPick from '@/app/components/news/NewsPick';
import NewsList from '@/app/components/news/NewList';

const News = (): JSX.Element => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterClick = (option: string) => {
    if (selectedFilters.includes(option)) {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== option));
    } else {
      if (selectedFilters.length < 1) {
        setSelectedFilters([...selectedFilters, option]);
      } 
    }
  };

  return (
    <div className="news-page-container bg-white w-full mx-auto py-12">
      <div className="news-title text-center mt-12">
        <h2 className=" text-[36px] font-normal text-black text-center leading-[60px] mb-12">
          키워드를 선택하여 <br />
          <span className="text-black font-bold text-[50px]">
            AI 종합 뉴스{' '}
          </span>
          <span className="text-black text-[50px]"> 요약을 받아보세요</span>
        </h2>
      </div>

      <FilterBar
        selectedFilters={selectedFilters}
        handleFilterClick={handleFilterClick}
        filterOptions={filterOptions}
      />

      <NewsPick />

      <NewsList />
    </div>
  );
};

export default News;
