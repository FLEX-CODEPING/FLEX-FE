'use client';

import {
  FLUCTUATION_PARAMS,
  MAIN_CONTENTS_TITLE,
  RANK_TYPE_MAP,
  STOCK_RANKING_TYPE,
  VOLUME_PARAMS,
} from '@/app/constants/main';
import { callPost } from '@/app/utils/callApi';
import { getTodayDateBar } from '@/app/utils/date';
import { useEffect, useState } from 'react';
import FluctuationRank from './FluctuationRank';
import VolumeRank from './VolumeRank';

const StockRank = () => {
  const today = getTodayDateBar();
  const [rankType, setRankType] = useState<StockRankingTypes>('거래량');
  const [volumeData, setVolumeData] = useState<VolumeRankTypes[]>([]);
  const [flucData, setFLucData] = useState<FluctuationRankTypes[]>([]);
  const isVolume = rankType === '거래량';
  const requestBody = isVolume ? VOLUME_PARAMS : FLUCTUATION_PARAMS;

  useEffect(() => {
    const fetchRank = async () => {
      const response = await callPost(
        `/api/main/stockRank?type=${RANK_TYPE_MAP[rankType]}`,
        {
          ...requestBody,
        },
      );
      response.isSuccess && isVolume
        ? setVolumeData(response.result)
        : setFLucData(response.result);
    };

    fetchRank();
  }, [rankType]);

  return (
    <div className="flex-col-center w-full gap-y-3">
      <div className="w-full flex items-end justify-between px-3 py-2">
        <div className="flex gap-x-3 items-end">
          <p className="text-2xl font-semibold">{MAIN_CONTENTS_TITLE[2]}</p>
          <div className="flex border-b border-gray-2 text-sm">
            {STOCK_RANKING_TYPE.map((type, i) => (
              <div
                className={`w-[58px] flex-center cursor-pointer ${rankType === type && 'font-semibold text-black border-black-0 border-b-2'}`}
                onClick={() => setRankType(type)}
              >
                {type}
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs">{today}</p>
      </div>
      <div className="flex gap-y-4 w-full flex-col">
        {rankType === '거래량'
          ? volumeData
              .slice(0, 10)
              .map((data) => <VolumeRank rankData={data} />)
          : flucData
              .slice(0, 10)
              .map((data) => <FluctuationRank rankData={data} />)}
      </div>
    </div>
  );
};

export default StockRank;
