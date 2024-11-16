'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { blueArrow, infoIcon } from '@/app/constants/iconPath';
import {
  PREDICTION_ALARM_TEXT,
  PREDICTION_SIDEBAR_RESULT,
} from '@/app/constants/prediction';
import Button from '../../common/Button';
import Icons from '../../common/Icons';
import Input from '../../common/Input';

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
  const mainColor = result === '하락' ? 'text-blue-1' : 'text-red-1';
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (Number(value) <= 9999999) {
      setTargetPrice(value);
    }
  };

  const handleDiscordNotification = () => {
    if (userWebhookUrl) {
      console.log('알림 등록 중...');

      const data = {
        username: 'FLEX-bot',
        content: `${stockName}의 목표가 ${targetPrice}원에 도달 시 알림이 전송됩니다.`,
      };
      fetch(userWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => console.log('알림 전송 성공:', response))
        .catch((error) => console.error('알림 전송 오류:', error));
    } else {
      router.push('/set-webhook');
    }
  };

  const handleTelegramNotification = () => {
    console.log('Telegram 알림 등록 중...');
    // Telegram 알림 설정 로직 추가
  };

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
        <div className="flex px-2 w-full justify-between items-center mb-0.5 mt-2.5 text-xs">
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
        <div className="flex justify-center gap-2">
          <Button
            buttonText="Discord"
            type="notification"
            onClickHandler={handleDiscordNotification}
          />
          <Button
            buttonText="Telegram"
            type="notification"
            onClickHandler={handleTelegramNotification}
          />
        </div>
        <Button
          buttonText={PREDICTION_ALARM_TEXT[3]}
          type="prediction"
          onClickHandler={() => console.log('알림 등록...')}
        />
      </div>
    </div>
  );
};

export default PredictResultAlert;
