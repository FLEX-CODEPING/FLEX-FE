"use client";

import React, { useState } from 'react';
import FilterBar from '@/app/components/news/FilterBar'; // 필터 바 컴포넌트
import { newsSummaries, additionalNews } from '@/app/constants/newsdata';
import { filterOptions } from '@/app/constants/news'; // 뉴스 데이터와 필터 옵션

const News = (): JSX.Element => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]); // 선택된 필터를 배열로 관리

  const handleFilterClick = (option: string) => {
    if (selectedFilters.includes(option)) {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== option));
    } else {
      if (selectedFilters.length < 2) {
        setSelectedFilters([...selectedFilters, option]);
      } else {
        alert("최대 2개의 필터만 선택할 수 있습니다.");
      }
    }
  };

  return (
    <div className="news-page-container bg-white w-full max-w-[1400px] mx-auto py-12">
      {/* 뉴스 제목 */}
      <div className="news-title text-center mt-12">
        <h2 className=" text-[36px] font-normal text-black text-center leading-[60px]">
          키워드를 선택하여 <br />
          <span className="text-[#F95700] font-bold text-[50px]">AI 종합 뉴스 요약</span>을 받아보세요
        </h2>
      </div>

      {/* 필터 바 컴포넌트 */}
      <FilterBar
        selectedFilters={selectedFilters}
        handleFilterClick={handleFilterClick}
        filterOptions={filterOptions}
      />

      {/* 뉴스 요약 */}
      <div className=" bg-white p-8 rounded-lg shadow-lg max-w-[1200px] mx-auto mt-12">
        <h3 className="text-xl font-bold mb-4">{newsSummaries[0].title}</h3>
        <div className="news-items p-4 border border-gray-300 rounded-lg">
          <ul className="list-decimal ml-5 space-y-2">
            {newsSummaries[0].content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 추가 뉴스 */}
      <div className="mt-12 max-w-[1200px] mx-auto">
        <ul className="space-y-4">
          {additionalNews.map((news, index) => (
            <li key={index} className="flex justify-between items-center pb-2">
              <span className="text-sm text-gray-500">{news.date}</span>
              <span className="font-semibold text-gray-700">{news.headline}</span>
              <span className="text-sm text-gray-500">{news.summary}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default News;
