'use client';

import { useState } from 'react';
import { infoIcon } from '@/app/constants/iconPath';
import {
  PREDICTION_SIDEBAR_TEXT,
  PREDICTION_INDICATION_SORT,
} from '@/app/constants/prediction';
import { fetchPredictionData } from './predictionSide';
import Button from '../../common/Button';
import Icons from '../../common/Icons';

interface PredictIndicatorProps {
  onIndicatorsChange: (indicators: string[]) => void;
}

const PredictIndicator: React.FC<PredictIndicatorProps> = ({
  onIndicatorsChange,
}) => {
  const [selectedMethods, setSelectedMethods] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [predictionData, setPredictionData] = useState<{
    dates: string[];
    predictions: number[];
  } | null>(null);

  const handleCheckboxChange = (method: string) => {
    const updatedMethods = selectedMethods.includes(method)
      ? selectedMethods.filter((m) => m !== method)
      : [...selectedMethods, method];

    setSelectedMethods(updatedMethods);
    onIndicatorsChange(updatedMethods);
  };

  const handlePredictionClick = async () => {
    if (selectedMethods.length === 0) {
      window.alert('예측 방법을 선택해 주세요.');
      return;
    }

    setLoading(true);
    console.info('분석 중...');
    const data = await fetchPredictionData(selectedMethods);
    setLoading(false);

    if (data) {
      setPredictionData(data);
    } else {
      setPredictionData(null);
      window.alert('예측 데이터를 가져오지 못했습니다.');
    }
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
        {PREDICTION_INDICATION_SORT.map((method) => (
          <label
            key={method}
            htmlFor={method}
            className={`flex items-center gap-3 cursor-pointer ${
              selectedMethods.includes(method) ? 'text-orange-500' : ''
            }`}
          >
            <input
              id={method}
              type="checkbox"
              checked={selectedMethods.includes(method)}
              onChange={() => handleCheckboxChange(method)}
            />
            <span className="text-[11px] font-semibold">{method}</span>
          </label>
        ))}
      </div>
      <Button
        buttonText={loading ? '분석 중...' : PREDICTION_SIDEBAR_TEXT[2]}
        type="prediction"
        onClickHandler={handlePredictionClick}
        isDisabled={loading}
      />

      {predictionData && (
        <div className="mt-4">
          <h3 className="text-sm font-semibold mb-2">예측 결과:</h3>
          <ul>
            {predictionData.dates.map((date, index) => (
              <li key={date}>
                {date}: {predictionData.predictions[index]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PredictIndicator;
