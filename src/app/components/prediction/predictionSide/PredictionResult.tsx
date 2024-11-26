'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Icons from '../../common/Icons';
import Button from '../../common/Button';
import { blueArrow, infoIcon } from '../../../constants/iconPath';
import { PREDICTION_SIDEBAR_RESULT } from '../../../constants/prediction';

interface PredictionSidebarProps {
  stockName: string;
  result: string;
  resultPrice: number;
  resultPercent: number;
}

const PredictionResult = ({
  stockName,
  result,
  resultPrice,
  resultPercent,
}: PredictionSidebarProps) => {
  const mainColor = result === '하락' ? 'text-blue-1' : 'text-red-1';
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div className="w-full px-5 py-3.5 flex-col-center rounded-[10px] border border-gray-4">
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
            <div className="absolute top-[-150%] right-0 z-8 w-[288px] p-2 bg-gray-100 text-gray-700 rounded-md shadow-lg whitespace-pre-line">
              <div className="flex items-center mb-1">
                <Image
                  src="/images/emer.png"
                  alt="Alert Icon"
                  width={13}
                  height={13}
                  className="mr-1 mb-0.5"
                />
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
      <div className="flex px-2 w-full justify-between items-end mb-1 mt-2.5 text-xs">
        <div className="flex gap-1 text-sm">
          <p className="font-semibold">{stockName}</p>
          <p>{PREDICTION_SIDEBAR_RESULT[2]}</p>
        </div>
        <p className={`text-xl font-semibold ${mainColor}`}>{result}</p>
      </div>
      <div className="flex px-2 w-full justify-between items-end mb-3 mt-2.5 text-xs">
        <p>{PREDICTION_SIDEBAR_RESULT[3]}</p>
        <div className={`flex gap-1 ${mainColor} items-center`}>
          <Icons name={blueArrow} />
          <p className="text-xs">({resultPercent})%</p>
          <p className="text-sm">{resultPrice}원</p>
        </div>
      </div>
      <Button
        buttonText={PREDICTION_SIDEBAR_RESULT[4]}
        type="prediction"
        onClickHandler={() => console.log('분석 중...')}
      />
    </div>
  );
};

export default PredictionResult;
