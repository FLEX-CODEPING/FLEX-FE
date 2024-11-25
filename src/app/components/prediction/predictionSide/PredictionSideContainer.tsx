'use client';

import { useModal } from '@/app/hooks/useModal';
import { useState } from 'react';
import PredictIndicator from './PredictIndicator';
import PredictionEmpty from './PredictionEmpty';
import PredictResultAlert from './alert/PredictResultAlert';

const PredictionSideContainer = () => {
  const { isOpen, openModal, closeModal } = useModal(false);
  const [predictData, setPredictData] = useState(true);
  const isQualified = 11 > 0;

  const handleIndicatorsChange = (indicators: string[]) => {
    console.log('Selected indicators:', indicators);
  };

  return (
    <div className="w-[320px] flex flex-col pt-[85px] gap-y-2">
      {predictData ? (
        <div className="w-full flex flex-col gap-y-3">
          <PredictIndicator onIndicatorsChange={handleIndicatorsChange} />
          <PredictResultAlert
            stockName="삼성전자"
            result="하락"
            resultPrice={59000}
            resultPercent={-2.73}
          />
        </div>
      ) : (
        <PredictionEmpty />
      )}
    </div>
  );
};

export default PredictionSideContainer;
