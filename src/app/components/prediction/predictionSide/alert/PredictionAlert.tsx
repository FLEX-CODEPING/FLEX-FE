'use client';

import { ALARM_STANDARD } from '@/app/constants/prediction';
import useStockStore from '@/app/store/store';
import Image from 'next/image';
import { useState } from 'react';
import Input from '../../../common/Input';
import PredictionResult from '../PredictionResult';
import SetWebhook from './SetWebhook';

interface PredictResultAlertProps {
  result: string;
  resultPrice: number;
  resultPercent: number;
}

const PredictionAlert = ({
  result,
  resultPrice,
  resultPercent,
}: PredictResultAlertProps) => {
  const { stockName, stockCode } = useStockStore();
  const [targetPrice, setTargetPrice] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDiscordModalOpen, setIsDiscordModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (Number(value) <= 9999999) {
      setTargetPrice(value);
    }
  };

  const toggleDiscordModal = () => setIsDiscordModalOpen(!isDiscordModalOpen);

  return (
    <div className="flex-col-center gap-y-3">
      <PredictionResult
        stockName={stockName || ''}
        result={result}
        resultPrice={resultPrice}
        resultPercent={resultPercent}
      />

      <div className="w-full px-5 py-3.5 flex-col-center gap-y-2.5 rounded-[10px] border border-gray-4">
        <div className="flex w-full justify-between items-end border-b border-b-gray-2 px-1">
          알림 설정
        </div>
        {stockName ? (
          <div className="flex w-full px-2 items-end gap-x-1">
            <p className="text-[13px]">{stockName}</p>
            <p className="text-[10px] font-light text-gray-1">{stockCode}</p>
          </div>
        ) : (
          <div className="flex w-full h-5 pl-2 text-sm text-gray-4">
            주식을 검색해주세요
          </div>
        )}

        <div className="flex w-full justify-between px-2">
          {ALARM_STANDARD.map((standard, i) => (
            <button
              key={standard}
              type="button"
              onClick={() => setSelectedIndex(i)}
              className={`px-3 py-1 border rounded text-xs ${
                selectedIndex === i
                  ? 'border-orange-500 text-orange-500'
                  : 'border-gray-300 text-gray-500'
              }`}
            >
              {standard}
            </button>
          ))}
        </div>

        <div className="flex flex-col px-2 w-full justify-between gap-y-1 text-xs">
          <p className="text-xs">알림 기준가</p>
          <div className="w-full flex relative">
            <Input
              className="text-right outline-none border text-gray-1 border-gray-2 h-8 rounded-md pr-6"
              type="default"
              textValue={targetPrice}
              inputType="number"
              placeholder="0"
              onChange={handleChange}
            />
            <p className="absolute right-3 top-2 text-gray-1">원</p>
          </div>
        </div>

        <div className="flex justify-center gap-10 pt-1">
          <button
            type="button"
            onClick={toggleDiscordModal}
            className="flex items-center px-2.5 py-1 border rounded-lg border-[#5865F2] text-[#5865F2] hover:bg-[#f0f4ff] w-24"
          >
            <div className="relative w-4 h-3 mr-1">
              <Image src="/images/Discord.png" alt="Discord" fill />
            </div>
            <span className="text-sm">Discord</span>
          </button>
        </div>
      </div>

      {isDiscordModalOpen && (
        <SetWebhook
          onClose={toggleDiscordModal}
          target={targetPrice}
          selectedIndex={selectedIndex}
        />
      )}
    </div>
  );
};

export default PredictionAlert;
