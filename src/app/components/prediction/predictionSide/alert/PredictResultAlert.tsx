'use client';

import { blueArrow, infoIcon } from '@/app/constants/iconPath';
import {
  PREDICTION_ALARM_TEXT,
  PREDICTION_SIDEBAR_RESULT,
} from '@/app/constants/prediction';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from '../../../common/Button';
import Icons from '../../../common/Icons';
import Input from '../../../common/Input';
import SetWebhook from './SetWebhook';

interface PredictResultAlertProps {
  stockName: string;
  result: string;
  resultPrice: number;
  resultPercent: number;
  userWebhookUrl?: string;
}

const PredictResultAlert = ({
  stockName,
  result,
  resultPrice,
  resultPercent,
  userWebhookUrl,
}: PredictResultAlertProps) => {
  const [targetPrice, setTargetPrice] = useState('');
  const [isDiscordModalOpen, setIsDiscordModalOpen] = useState(false);
  const [isTelegramModalOpen, setIsTelegramModalOpen] = useState(false);
  const mainColor = result === '하락' ? 'text-blue-1' : 'text-red-1';
  const router = useRouter();

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
      <div className="w-full px-5 py-3.5 flex-col-center rounded-[10px] border border-gray-4">
        <div className="flex w-full justify-between items-end border-b border-b-gray-2 pb-1 px-1">
          <p>{PREDICTION_SIDEBAR_RESULT[0]}</p>
          <p className="text-[10px] text-gray-1 flex gap-0.5">
            <Icons name={infoIcon} />
            {PREDICTION_SIDEBAR_RESULT[1]}
          </p>
        </div>
        <div className="flex px-2 w-full justify-between items-end mb-1 mt-2.5 text-xs">
          <div className="flex gap-1 text-sm">
            <p className="font-semibold">{stockName}</p>
            <p>{PREDICTION_SIDEBAR_RESULT[2]}</p>
          </div>
          <p className={`text-xl font-semibold ${mainColor}`}>{result}</p>
        </div>
        <div className="flex px-2 w-full justify-between items-end mb-3 mt-2.5 text-xs">
          <p>{PREDICTION_SIDEBAR_RESULT[3]}</p>
          <div className={`flex gap-1 ${mainColor} items-center`}>
            <Icons name={blueArrow} />
            <p className="text-xs">({resultPercent})%</p>
            <p className="text-sm">{resultPrice}원</p>
          </div>
        </div>
        <Button
          buttonText={PREDICTION_SIDEBAR_RESULT[4]}
          type="prediction"
          onClickHandler={() => console.log('분석 중...')}
        />
      </div>

      <div className="w-full px-5 py-3.5 flex-col-center gap-y-2.5 rounded-[10px] border border-gray-4">
        <div className="flex w-full justify-between items-end border-b border-b-gray-2 pb-1 px-1">
          <p>{PREDICTION_ALARM_TEXT[0]}</p>
          <p className="text-[10px] text-gray-1 flex gap-0.5">
            {PREDICTION_ALARM_TEXT[1]}
          </p>
        </div>
        <div className="flex px-2 w-full justify-between items-center mb-0.5 mt-3.5 text-xs">
          <p className="text-sm">{PREDICTION_ALARM_TEXT[2]}</p>
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
            <span className="text-sm">{PREDICTION_ALARM_TEXT[4]}</span>
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
            <span className="text-sm">{PREDICTION_ALARM_TEXT[5]}</span>
          </button>
        </div>

        <Button
          buttonText={PREDICTION_ALARM_TEXT[3]}
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

export default PredictResultAlert;
