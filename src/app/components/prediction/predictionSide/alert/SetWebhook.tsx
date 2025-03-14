'use client';

import { ALARM_STANDARD } from '@/app/constants/prediction';
import { WEBHOOK_GUIDE_LINKS, WEBHOOK_TEXTS } from '@/app/constants/webhook';
import useStockStore from '@/app/store/store';
import { callPost } from '@/app/utils/callApi';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface SetWebhookProps {
  onClose: () => void;
  selectedIndex: number;
  target?: string;
}

const SetWebhook: React.FC<SetWebhookProps> = ({
  onClose,
  selectedIndex,
  target,
}) => {
  const [webhookUrl, setWebhookUrl] = useState('');
  const { stockCode } = useStockStore();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWebhookUrl(e.target.value);
  };

  const handleRegisterAlert = async () => {
    const standard = selectedIndex === 0 ? 'PR' : ALARM_STANDARD[selectedIndex];

    if (!stockCode || !target) {
      window.alert('모든 필드를 입력해주세요.');
      return;
    }
    const payload = {
      stockcode: stockCode,
      target: Number(target),
      webhookUrl,
    };
    const response = await callPost(
      `/api/stocks/predictions/notification?operation=${standard}`,
      payload,
    );
    if (response.isSuccess) {
      window.alert('알림이 성공적으로 등록되었습니다.');
      onClose();
    } else {
      window.alert(`등록 실패: ${response?.message || '알 수 없는 에러'}`);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-1 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-start p-6 gap-4 w-[600px] h-auto bg-white rounded-[12px] shadow-lg">
        <div className="flex items-center gap-2">
          <div className="relative w-6 h-4.5 mr-1">
            <Image src="/images/Discord.png" alt="Discord" fill />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">
            {WEBHOOK_TEXTS[0]}
          </h2>
        </div>
        <p className="text-sm text-gray-600">
          아래 링크를 통해 가이드라인을 따라보세요.
        </p>
        <Link
          href={WEBHOOK_GUIDE_LINKS.url}
          target="_blank"
          className="text-sm text-black-1 underline"
        >
          {WEBHOOK_GUIDE_LINKS.text}
        </Link>
        <input
          type="text"
          value={webhookUrl}
          onChange={handleChange}
          placeholder={WEBHOOK_TEXTS[1]}
          className="w-full px-4 py-3 border border-gray-300 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
        <div className="flex justify-end gap-4 w-full mt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 text-sm border border-gray-300 text-gray-700 rounded-[6px] hover:bg-gray-100"
          >
            취소
          </button>
          <button
            type="button"
            onClick={handleRegisterAlert}
            className="px-6 py-2 text-sm bg-blue-500 text-white rounded-[6px] hover:bg-blue-700"
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetWebhook;
