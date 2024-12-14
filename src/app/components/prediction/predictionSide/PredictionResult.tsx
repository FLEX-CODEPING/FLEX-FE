'use client';

import React, { useState } from 'react';
import useStockStore from '@/app/store/store';
import Icons from '../../common/Icons';
import { blueArrow, redArrow, infoIcon } from '../../../constants/iconPath';
import { PREDICTION_SIDEBAR_RESULT } from '../../../constants/prediction';

interface PredictionSidebarProps {
  stockName: string;
  result: string;
  resultPrice: number;
  resultPercent: number;
}

const PredictionResult = ({
  stockName,
  result: predictionResult,
  resultPrice,
  resultPercent,
}: PredictionSidebarProps) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const getMainColor = (result: string): string => {
    if (result === '하락') return 'text-blue-1';
    if (result === '상승') return 'text-red-1';
    return 'text-gray-1';
  };

  const handleMouseEnter = () => setIsTooltipVisible(true);
  const handleMouseLeave = () => setIsTooltipVisible(false);

  return (
    <div className="w-full px-5 py-3 flex-col-center rounded-[10px] border border-gray-4">
      <div className="flex w-full justify-between items-end border-b border-b-gray-2 pb-1 px-1">
        <p>{PREDICTION_SIDEBAR_RESULT[0]}</p>
        <div
          className="relative flex gap-0.5 items-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Icons name={infoIcon} />
          <p className="text-[10px] text-gray-1">
            {PREDICTION_SIDEBAR_RESULT[1]}
          </p>
          {isTooltipVisible && (
            <div className="absolute top-[-550%] right-[60px] z-8 w-[288px] p-2 bg-gray-100 text-gray-700 rounded-md shadow-lg whitespace-pre-line">
              <div className="flex items-center mb-1">
                <strong className="text-[12px] font-bold">
                  {PREDICTION_SIDEBAR_RESULT[5]}
                </strong>
              </div>
              <p className="text-[8px] text-gray-800">
                {PREDICTION_SIDEBAR_RESULT[6]}
              </p>
              <div className="mt-2">
                <strong className="text-[10px] font-semibold">
                  {PREDICTION_SIDEBAR_RESULT[7]}
                </strong>
                <span className="text-[8px] text-gray-800">
                  {PREDICTION_SIDEBAR_RESULT[8]}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex px-2 w-full justify-between items-end mb-2 mt-2.5 text-xs">
        <div className="flex text-sm">
          <p className="font-semibold">{stockName}</p>
          <p>{PREDICTION_SIDEBAR_RESULT[2]}</p>
        </div>
        <p
          className={`text-base font-semibold ${getMainColor(predictionResult)}`}
        >
          {predictionResult}
        </p>
      </div>
      <div className="flex px-2 w-full justify-between items-end text-xs">
        <p>{PREDICTION_SIDEBAR_RESULT[3]}</p>
        <div
          className={`flex gap-1 items-center ${getMainColor(predictionResult)}`}
        >
          <Icons name={predictionResult === '하락' ? blueArrow : redArrow} />
          <p className="text-xs">({resultPercent})%</p>
          <p className="text-sm">{resultPrice}원</p>
        </div>
      </div>
    </div>
  );
};

export default PredictionResult;
