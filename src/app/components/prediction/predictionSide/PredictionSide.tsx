'use client';

import { TRADE_BUY_TEXT } from '@/app/constants/simulation';
import { useModal } from '@/app/hooks/useModal';
import { useState } from 'react';
import Button from '../../common/Button';
import PredictionEmpty from './PredictionEmpty';

const PredictionSide = () => {
  const { isOpen, openModal, closeModal } = useModal(false);
  const [predictData, setPredictData] = useState(false);
  const isQualified = 11 > 0;

  return (
    <div className="w-[300px] flex flex-col pt-[85px] gap-y-2">
      {predictData ? (
        <div className="w-[300px] h-[623px] px-8 py-4 flex flex-col rounded-[10px] border border-gray-4">
          <div className="flex flex-col gap-y-4">
            <p>{TRADE_BUY_TEXT[0]}</p>
            <div className="w-full flex px-5 py-1 bg-[#e6e6e6] rounded-[25px] justify-between text-sm font-semibold">
              <div>{TRADE_BUY_TEXT[1]}</div>
              <div>{TRADE_BUY_TEXT[2]}</div>
            </div>
            <div className="flex w-full flex-col gap-y-3 text-sm">
              <div className=" flex w-full justify-between items-center">
                <div className="w-[140px] h-[33px] px-3 py-2 flex items-center justify-end rounded-md border border-gray-2 font-light text-black-1 text-sm">
                  72,000원
                </div>
              </div>
              <div className=" flex w-full justify-between items-center">
                <p>{TRADE_BUY_TEXT[4]}</p>
                <Button
                  buttonText="분석하기"
                  isDisabled={!isQualified}
                  type="trade"
                  className={
                    isQualified ? 'bg-blue-1' : 'bg-gray-1 cursor-not-allowed'
                  }
                  onClickHandler={openModal}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <PredictionEmpty />
      )}
    </div>
  );
};

export default PredictionSide;
