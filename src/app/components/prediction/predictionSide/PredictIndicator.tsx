'use client';

import { checkBox, infoIcon } from '@/app/constants/iconPath';
import {
  PREDICTION_INDICATION_SORT,
  PREDICTION_SIDEBAR_TEXT,
} from '@/app/constants/prediction';
import { useState } from 'react';
import Button from '../../common/Button';
import Icons from '../../common/Icons';

const PredictIndicator = () => {
  const [indicators, setIndicators] = useState<string[]>([]);

  const handleCheckbox = (name: string) => {
    setIndicators((prevIndicators) =>
      prevIndicators.includes(name)
        ? prevIndicators.filter((indicator) => indicator !== name)
        : [...prevIndicators, name],
    );
  };

  return (
    <div className="w-full px-5 py-3.5 flex-col-center rounded-[10px] border border-gray-4">
      <div className="flex w-full justify-between items-end border-b border-b-gray-2 pb-1">
        <p>{PREDICTION_SIDEBAR_TEXT[0]}</p>
        <p className="text-[10px] text-gray-1">{PREDICTION_SIDEBAR_TEXT[1]}</p>
      </div>
      <div className="flex px-2 w-full justify-between items-end mb-1 mt-4 text-xs">
        <p>{PREDICTION_SIDEBAR_TEXT[2]}</p>
        <div className="flex items-center gap-x-0.5">
          <Icons name={infoIcon} />
          <p className="text-[10px] text-gray-1">
            {PREDICTION_SIDEBAR_TEXT[3]}
          </p>
        </div>
      </div>
      <div className="w-full py-4 px-5 flex-col flex gap-y-4 rounded border border-gray-2 mb-6">
        {PREDICTION_INDICATION_SORT.map((name, i) => (
          <div
            className="flex gap-3 cursor-pointer"
            onClick={() => handleCheckbox(name)}
          >
            {indicators.includes(name) ? (
              <Icons name={checkBox} className="rounded" />
            ) : (
              <div className="w-[17px] h-4 rounded border border-gray-2" />
            )}
            <p className="text-[11px] font-bold">{name}</p>
          </div>
        ))}
      </div>
      <Button
        buttonText={PREDICTION_SIDEBAR_TEXT[4]}
        type="prediction"
        onClickHandler={() => console.log('분석 중...')}
      />
    </div>
  );
};

export default PredictIndicator;
