'use client';

import useStockStore from '@/app/store/store';
import { useState } from 'react';
import Input from '../../../common/Input';
import Button from '../../../common/Button';
import SetWebhook from './SetWebhook';
import PredictionResult from '../PredictionResult';

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
  const [selectedIndicator, setSelectedIndicator] = useState('PR');
  const [isDiscordModalOpen, setIsDiscordModalOpen] = useState(false);
  const [isTelegramModalOpen, setIsTelegramModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (Number(value) <= 9999999) {
      setTargetPrice(value);
    }
  };

  const handleIndicatorChange = (indicator: string) => {
    setSelectedIndicator(indicator);
  };

  const toggleDiscordModal = () => setIsDiscordModalOpen(!isDiscordModalOpen);
  const toggleTelegramModal = () =>
    setIsTelegramModalOpen(!isTelegramModalOpen);

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
          <p className="">알림 설정</p>
        </div>

        <div className="flex w-full px-2 items-end gap-x-1">
          <p className="text-[13px]">{stockName}</p>
          <p className="text-[10px] font-light text-gray-1">{stockCode}</p>
        </div>

        <div className="flex w-full justify-between px-2">
          {['PR', 'RSI', 'CCI', 'ATR'].map((indicator) => (
            <button
              key={indicator}
              type="button"
              onClick={() => handleIndicatorChange(indicator)}
              className={`px-3 py-1 border rounded text-xs ${
                selectedIndicator === indicator
                  ? 'border-orange-500 text-orange-500'
                  : 'border-gray-300 text-gray-500'
              }`}
            >
              {indicator}
            </button>
          ))}
        </div>

        <div className="flex flex-col px-2 w-full justify-between gap-y-1 text-xs">
          <p className="text-xs">알림 기준가</p>
          <div className="w-full flex relative">
            <Input
              className="text-right outline-none border border-gray-2 h-8 rounded-md pr-6"
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
            <img
              src="/images/Discord.png"
              alt="Discord"
              className="w-4 h-3 mr-1"
            />
            <span className="text-sm">Discord</span>
          </button>

          <button
            type="button"
            onClick={toggleTelegramModal}
            className="flex items-center px-2 py-1 border rounded-lg border-[#0088cc] text-[#0088cc] hover:bg-[#e6f7ff] w-24"
          >
            <img
              src="/images/Telegram.png"
              alt="Telegram"
              className="w-4 h-4 mr-1"
            />
            <span className="text-sm">Telegram</span>
          </button>
        </div>
      </div>

      {isDiscordModalOpen && (
        <SetWebhook
          type="discord"
          onClose={toggleDiscordModal}
          target={targetPrice}
          selectedIndicator={selectedIndicator}
        />
      )}
      {isTelegramModalOpen && (
        <SetWebhook type="telegram" onClose={toggleTelegramModal} />
      )}
    </div>
  );
};

export default PredictionAlert;
