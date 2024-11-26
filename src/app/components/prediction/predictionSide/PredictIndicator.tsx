'use client';

import { useState } from 'react';
import { infoIcon } from '@/app/constants/iconPath';
import {
  PREDICTION_SIDEBAR_TEXT,
  PREDICTION_INDICATION_SORT,
} from '@/app/constants/prediction';
import { fetchPredictionData } from './PredictionSide';
import Button from '../../common/Button';
import Icons from '../../common/Icons';

interface PredictionData {
  dates: string[];
  predictions: number[];
}

interface PredictIndicatorProps {
  onIndicatorsChange: (indicators: string[]) => void;
}

const PredictIndicator: React.FC<PredictIndicatorProps> = ({
  onIndicatorsChange,
}) => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [predictionData, setPredictionData] = useState<PredictionData | null>(
    null,
  );

  const handleCheckboxChange = (method: string) => {
    if (selectedMethod === method) {
      setSelectedMethod(null);
      onIndicatorsChange([]);
    } else {
      setSelectedMethod(method);
      onIndicatorsChange([method]);
    }
  };

  const handlePredictionClick = async () => {
    if (!selectedMethod) {
      window.alert('예측 방법을 선택해 주세요.');
      return;
    }

    setLoading(true);
    console.info('분석 중...');
    const results = await fetchPredictionData([selectedMethod]);
    setLoading(false);

    if (results && results.length > 0) {
      const validResult = results.find((result) => result.data);
      if (validResult && validResult.data) {
        setPredictionData({
          dates: validResult.data.dates,
          predictions: validResult.data.predictions,
        });
        return;
      }
    }

    setPredictionData(null);
    window.alert('예측 데이터를 가져오지 못했습니다.');
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
              selectedMethod === method ? 'text-orange-500' : ''
            }`}
          >
            <input
              id={method}
              type="radio"
              name="prediction-method"
              checked={selectedMethod === method}
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
