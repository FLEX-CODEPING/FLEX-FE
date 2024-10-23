'use client';

import NewsList from '@/app/components/news/NewList';
import FilterBar from '@/app/components/news/NewsFilterBar';
import NewsPick from '@/app/components/news/NewsPick';
import { loadingCircle } from '@/app/constants/iconPath';
import { NEWS_VIEW_TYPE_MAP, PRESS_TYPES_MAP } from '@/app/constants/news';
import { callGet } from '@/app/utils/callApi';
import { useEffect, useState } from 'react';
import Icons from '../common/Icons';

const News = () => {
  const [selectedFilter, setSelectedFilter] = useState('국내주식');
  const [selectedNews, setSelectedNews] = useState<string[]>(['한국경제']);
  const [selectedOption, setSelectedOption] = useState<string>('기간 선택');
  const [newsDatas, setNewsDatas] = useState<NewsDataTypes | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

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

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true); // 로딩 시작
      try {
        const response = await callGet(
          `/api/news/?keyword=${selectedFilter}&period=${NEWS_VIEW_TYPE_MAP[selectedOption]}&${formatQuery(selectedNews)}`,
        );
        setNewsDatas(response.result);
        console.log(response.result, '뉴스 응답');
      } catch (error) {
        console.error('뉴스 데이터 로딩 중 오류 발생:', error);
      } finally {
        setLoading(false); // 로딩 끝
      }
    };
    fetchNews();
  }, [selectedFilter, selectedOption, selectedNews]); // 의존성 배열 추가/

  const getNews = async () => {
    setLoading(true); // 로딩 시작
    try {
      const response = await callGet(
        `/api/news/?keyword=${selectedFilter}&period=${NEWS_VIEW_TYPE_MAP[selectedOption]}&${formatQuery(selectedNews)}`,
      );
      setNewsDatas(response.result);
      console.log(response.result, '뉴스 응답');
    } catch (error) {
      console.error('뉴스 데이터 로딩 중 오류 발생:', error);
    } finally {
      setLoading(false);
    }
  };

  console.log(newsDatas, '뉴스  스테이트');
  return (
    <div className="bg-white w-full mx-auto py-12 flex-col-center gap-y-4">
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
        <div className="text-center flex-col-center justify-center text-2xl font-semibold w-[800px] h-[360px] gap-y-10">
          😉 뉴스 데이터를 불러오는 중...
          <div className="animate-spin">
            <Icons name={loadingCircle} />
          </div>
        </div>
      ) : (
        newsDatas && <NewsList newsData={newsDatas} keyword={selectedFilter} />
      )}
    </div>
  );
};

export default News;
