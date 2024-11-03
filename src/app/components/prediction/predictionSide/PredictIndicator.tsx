'use client';

import { checkBox, infoIcon } from '@/app/constants/iconPath';
import {
  PREDICTION_INDICATION_SORT,
  PREDICTION_SIDEBAR_TEXT,
} from '@/app/constants/prediction';
import { useState } from 'react';
import Button from '../../common/Button';
import Icons from '../../common/Icons';

interface PredictIndicatorProps {
  onIndicatorsChange: (indicators: string[]) => void;
}

const PredictIndicator: React.FC<PredictIndicatorProps> = ({ onIndicatorsChange }) => {
  const [indicators, setIndicators] = useState<string[]>([]);

  const handleCheckbox = (name: string) => {
    const updatedIndicators = indicators.includes(name)
      ? indicators.filter((indicator) => indicator !== name)
      : [...indicators, name];
    setIndicators(updatedIndicators);
    onIndicatorsChange(updatedIndicators);
  };

  return (
    <div className="w-full px-5 py-3.5 flex-col-center rounded-[10px] border border-gray-4">
      <div className="flex w-full justify-between items-center pb-2 px-1">
        <p>{PREDICTION_SIDEBAR_TEXT[0]}</p>
        <div className="flex items-center gap-x-0.5">
          <Icons name={infoIcon} />
          <p className="text-[10px] text-gray-1">
            {PREDICTION_SIDEBAR_TEXT[1]}
          </p>
        </div>
      </div>
      <div className="w-full py-3 px-5 flex-col flex gap-y-3 rounded border border-gray-2 mb-4">
        {PREDICTION_INDICATION_SORT.map((name) => (
          <div
            key={name}
            className="flex gap-3 cursor-pointer"
            onClick={() => handleCheckbox(name)}
          >
            {indicators.includes(name) ? (
              <Icons name={checkBox} className="rounded" />
            ) : (
              <div className="w-[17px] h-4 rounded border border-gray-2" />
            )}
            <p className="text-[11px] font-semibold">{name}</p>
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
