'use client';

import {
  FLUCTUATION_PARAMS,
  MAIN_CONTENTS_TITLE,
  RANK_TYPE_MAP,
  STOCK_RANKING_TYPE,
  VOLUME_PARAMS,
} from '@/app/constants/main';
import { callPost } from '@/app/utils/callApi';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import FluctuationRank from './FluctuationRank';
import VolumeRank from './VolumeRank';

const StockRank = () => {
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
      <div className="w-full flex gap-x-3 px-3 items-end py-4 border-b border-gray-2">
        <p className="text-2xl font-semibold">{MAIN_CONTENTS_TITLE[2]}</p>
        <div className="flex border-b border-gray-2 text-sm">
          {STOCK_RANKING_TYPE.map((type) => (
            <div
              key={type}
              className={`w-[58px] relative flex-center cursor-pointer `}
              onClick={() => setRankType(type)}
            >
              {type}
              {type === rankType && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-black-1"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <motion.div
        key={rankType}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        {rankType === '거래량' ? (
          <div className="flex w-full justify-between">
            <VolumeRank rankData={volumeData.slice(0, 5)} />
            <VolumeRank rankData={volumeData.slice(5, 10)} />
          </div>
        ) : (
          <div className="flex w-full justify-between">
            <FluctuationRank rankData={flucData.slice(0, 5)} />
            <FluctuationRank rankData={flucData.slice(5, 10)} />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default StockRank;
