'use client';

import { useState } from 'react';
import Input from '../../../common/Input';
import Button from '../../../common/Button';
import SetWebhook from './SetWebhook';
import PredictionResult from '../PredictionResult';

interface PredictResultAlertProps {
  stockName: string;
  result: string;
  resultPrice: number;
  resultPercent: number;
}

const PredictionAlert = ({
  stockName,
  result,
  resultPrice,
  resultPercent,
}: PredictResultAlertProps) => {
  const [targetPrice, setTargetPrice] = useState('');
  const [isDiscordModalOpen, setIsDiscordModalOpen] = useState(false);
  const [isTelegramModalOpen, setIsTelegramModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (Number(value) <= 9999999) {
      setTargetPrice(value);
    }
  };

  const toggleDiscordModal = () => setIsDiscordModalOpen(!isDiscordModalOpen);
  const toggleTelegramModal = () =>
    setIsTelegramModalOpen(!isTelegramModalOpen);

  return (
    <div className="flex-col-center gap-y-3">
      <PredictionResult
        stockName={stockName}
        result={result}
        resultPrice={resultPrice}
        resultPercent={resultPercent}
      />

      <div className="w-full px-5 py-3.5 flex-col-center gap-y-2.5 rounded-[10px] border border-gray-4">
        <div className="flex w-full justify-between items-end border-b border-b-gray-2 pb-1 px-1">
          <p>알림 설정</p>
        </div>
        <div className="flex px-2 w-full justify-between items-center mb-0.5 mt-3.5 text-xs">
          <p className="text-sm">알림 기준가:</p>
          <Input
            className="text-right outline-none"
            type="trade"
            textValue={targetPrice}
            inputType="number"
            placeholder="0"
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-center gap-10">
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

        <Button
          buttonText="알림 등록"
          type="prediction"
          onClickHandler={() => console.log('알림 등록...')}
          className="mt-1"
        />
      </div>

      {isDiscordModalOpen && (
        <SetWebhook type="discord" onClose={toggleDiscordModal} />
      )}
      {isTelegramModalOpen && (
        <SetWebhook type="telegram" onClose={toggleTelegramModal} />
      )}
    </div>
  );
};

export default PredictionAlert;
