'use client';
import Icons from '@/app/components/common/Icons';
import { likeSmall, title, k } from '@/app/constants/iconPath';
import React, { useState } from 'react';
import FilterBar from '@/app/components/news/FilterBar';
import { newsSummaries, additionalNews } from '@/app/constants/newsdata';
import { filterOptions } from '@/app/constants/news'; 

const News = (): JSX.Element => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]); 

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
      
      <div className="news-title text-center mt-12">
        <h2 className=" text-[36px] font-normal text-black text-center leading-[60px] mb-12">
          키워드를 선택하여 <br />
          <span className="text-black font-bold text-[50px]">AI 종합 뉴스 </span>요약을 받아보세요
        </h2>
      </div>

      
      <FilterBar
        selectedFilters={selectedFilters}
        handleFilterClick={handleFilterClick}
        filterOptions={filterOptions}
      />

      
      <div className="max-w-[1200px] mx-auto mt-24">
        <div className="flex items-center mb-4">
          <Icons name={title} /> 
          <h3 className="text-xl font-bold ml-2">{newsSummaries[0].title}</h3>
        </div>
        <div className="news-items p-4 border border-[#7a7a7a] rounded-[15px]">
          <ul className="list-none space-y-2">
            {newsSummaries[0].content.map((item, index) => (
              <li key={index} className="flex">
                <span className="font-bold">{item.title}</span>
                <span className="ml-2">{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      
      <div className="mt-12 max-w-[1200px] mx-auto">
        <ul className="space-y-4">
          {additionalNews.map((news, index) => (
            <li key={index} className="flex justify-between items-start pb-2">
               <span className="text-sm text-gray-500 text-left" style={{ width: "150px" }}>{news.date}</span>
        <span className="font-semibold text-gray-700 text-left" style={{ width: "400px" }}>{news.headline}</span>
        <span className="text-sm text-gray-500 text-left" style={{ width: "500px" }}>{news.summary}</span>
        <Icons name={k} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default News;
