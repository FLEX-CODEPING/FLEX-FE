'use client';

import { infoIcon } from '@/app/constants/iconPath';
import {
  PREDICTION_INDICATION_SORT,
  PREDICTION_SIDEBAR_TEXT,
} from '@/app/constants/prediction';
import useStockStore from '@/app/store/store';
import { callPost } from '@/app/utils/callApi';
import { useState } from 'react';
import Button from '../../common/Button';
import Icons from '../../common/Icons';

interface PredictionData {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

interface PredictIndicatorProps {
  onIndicatorsChange: (indicators: string[]) => void;
  onPredictionResult: (result: {
    stockName: string;
    result: string;
    resultPrice: number;
    resultPercent: number;
    chartData: PredictionData[];
  }) => void;
}

const PredictIndicator: React.FC<PredictIndicatorProps> = ({
  onIndicatorsChange,
  onPredictionResult,
}) => {
  const { stockCode } = useStockStore();
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

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
    if (!selectedMethod || !stockCode) {
      window.alert('예측 방법과 종목을 선택해 주세요.');
      return;
    }

    setLoading(true);

    const reqBody = {
      dateFrom: '20240101',
      dateTo: '20241231',
      stockcode: stockCode,
    };

    try {
      const response = await callPost(
        `/api/stocks/predictions?operation=${selectedMethod}`,
        reqBody,
      );

      if (response?.result) {
        console.log('API 응답 데이터:', response.result);

        const newChartData = response.result.dates.map(
          (date: string, index: number) => ({
            time: new Date(date).getTime() / 1000,
            open: response.result.predictions[index],
            high: response.result.predictions[index] * 1.05,
            low: response.result.predictions[index] * 0.95,
            close: response.result.predictions[index],
            volume: Math.floor(Math.random() * 1000),
          }),
        );

        const lastClose = newChartData.at(-2)?.close || 0;
        const predictedLast = newChartData.at(-1)?.close || 0;
        const resultPercent = ((predictedLast - lastClose) / lastClose) * 100;
        const result = predictedLast > lastClose ? '상승' : '하락';

        onPredictionResult({
          stockName: stockCode,
          result,
          resultPrice: Math.round(predictedLast),
          resultPercent: parseFloat(resultPercent.toFixed(2)),
          chartData: newChartData,
        });
      } else {
        console.error('API 응답 에러:', response);
        window.alert('예측 데이터를 가져오지 못했습니다.');
      }
    } catch (error) {
      console.error('API 요청 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div className="w-full px-5 pb-2 pt-3 flex-col-center rounded-[10px] border border-gray-4">
      <div className="flex w-full justify-between items-end pb-1 px-1 border-b border-b-gray-2">
        <p>{PREDICTION_SIDEBAR_TEXT[0]}</p>
        <div
          className="relative flex items-center gap-0.5"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Icons name={infoIcon} />
          <p className="text-[10px] text-gray-1">
            각기 다른 예측 결과를 확인해보세요
          </p>
          {isTooltipVisible && (
            <div className="absolute top-[-58px] right-[145px] w-[240px] p-3 bg-gray-100 text-gray-800 rounded-lg shadow-lg z-10">
              <p className="text-[10px] font-bold">
                {PREDICTION_SIDEBAR_TEXT[3]}
                <span className="text-[8px] font-normal">
                  {PREDICTION_SIDEBAR_TEXT[4]}
                </span>
              </p>
              <p className="text-[10px] font-bold">
                {PREDICTION_SIDEBAR_TEXT[5]}
                <span className="text-[8px] font-normal">
                  {PREDICTION_SIDEBAR_TEXT[6]}
                </span>
              </p>
              <p className="text-[10px] font-bold">
                {PREDICTION_SIDEBAR_TEXT[7]}
                <span className="text-[8px] font-normal">
                  {PREDICTION_SIDEBAR_TEXT[8]}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="w-full py-3 px-5 flex-col flex gap-y-3 rounded mb-1">
        {PREDICTION_INDICATION_SORT.map((method, index) => (
          <label
            key={method}
            htmlFor={method}
            className="flex w-full flex-col gap-1 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <input
                id={method}
                type="radio"
                name="prediction-method"
                checked={selectedMethod === method}
                onChange={() => handleCheckboxChange(method)}
              />
              <span className="text-[11px] font-semibold">{method}</span>
            </div>
            <p className="text-[10px] text-gray-500 pl-3">
              {PREDICTION_SIDEBAR_TEXT[index + 3]}
            </p>
          </label>
        ))}
      </div>
      <div className="w-full px-5">
        <Button
          buttonText={loading ? '분석 중...' : '예측하기'}
          type="default"
          className="bg-black-1 text-[13px] py-1.5 rounded-lg text-white"
          onClickHandler={handlePredictionClick}
          isDisabled={loading}
        />
      </div>
    </div>
  );
};

export default PredictIndicator;
