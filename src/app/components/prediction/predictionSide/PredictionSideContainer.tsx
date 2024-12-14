'use client';

import { useModal } from '@/app/hooks/useModal';
import { useState } from 'react';
import PredictIndicator from './PredictIndicator';
import PredictionEmpty from './PredictionEmpty';
import PredictResultAlert from './alert/PredictionAlert';

const PredictionSideContainer = () => {
  const { isOpen, openModal, closeModal } = useModal(false);
  const [predictionResult, setPredictionResult] = useState({
    stockName: '',
    result: '',
    resultPrice: 0,
    resultPercent: 0,
  });

  const handleIndicatorsChange = (indicators: string[]) => {
    console.log('Selected indicators:', indicators);
  };

  const handlePredictionResult = (result: {
    stockName: string;
    result: string;
    resultPrice: number;
    resultPercent: number;
  }) => {
    setPredictionResult({
      ...result,
      resultPrice: Math.round(result.resultPrice),
    });
  };

  return (
    <div className="w-[320px] flex flex-col pt-[80px] gap-y-2">
      <div className="w-full flex flex-col gap-y-3">
        <PredictIndicator
          onIndicatorsChange={handleIndicatorsChange}
          onPredictionResult={handlePredictionResult}
        />
        <PredictResultAlert
          result={predictionResult.result || '결과 없음'}
          resultPrice={predictionResult.resultPrice || 0}
          resultPercent={predictionResult.resultPercent || 0}
        />
      </div>
    </div>
  );
};

export default PredictionSideContainer;
