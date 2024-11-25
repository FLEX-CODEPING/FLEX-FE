'use client';

import { useState } from 'react';
import Link from 'next/link';
import { WEBHOOK_GUIDE_LINKS, WEBHOOK_TEXTS } from '@/app/constants/webhook';

interface SetWebhookProps {
  type: 'discord' | 'telegram';
  onClose: () => void;
}

const SetWebhook: React.FC<SetWebhookProps> = ({ type, onClose }) => {
  const [webhookUrl, setWebhookUrl] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWebhookUrl(e.target.value);
  };

  const saveWebhookUrl = async () => {
    const apiUrl = '/api/save-webhook';
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ webhookUrl }),
      });
      if (response.ok) {
        alert(type === 'discord' ? WEBHOOK_TEXTS[4] : WEBHOOK_TEXTS[5]);
        onClose();
      } else {
        alert(WEBHOOK_TEXTS[6]);
      }
    } catch (error) {
      console.error('웹훅 저장 중 오류:', error);
      alert(WEBHOOK_TEXTS[7]);
    }
  };

  const index = type === 'discord' ? 0 : 1;
  const { url, text } = WEBHOOK_GUIDE_LINKS[index];
  const title = WEBHOOK_TEXTS[index];
  const placeholder = WEBHOOK_TEXTS[index + 2];

  return (
    <div className="fixed inset-0 bg-gray-1 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-start p-6 gap-4 w-[600px] h-auto bg-white rounded-[12px] shadow-lg">
        <div className="flex items-center gap-2">
          <img
            src={
              type === 'discord'
                ? '/images/Discord.png'
                : '/images/Telegram.png'
            }
            alt={`${type === 'discord' ? 'Discord' : 'Telegram'} Logo`}
            className={type === 'discord' ? 'w-6 h-4.5' : 'w-6 h-6'}
          />
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        </div>
        <p className="text-sm text-gray-600">
          아래 링크를 통해 가이드라인을 따라보세요.
        </p>
        <Link
          href={url}
          target="_blank"
          className="text-sm text-black-1 underline"
        >
          {text}
        </Link>
        <input
          type="text"
          value={webhookUrl}
          onChange={handleChange}
          placeholder={placeholder}
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
            onClick={saveWebhookUrl}
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
