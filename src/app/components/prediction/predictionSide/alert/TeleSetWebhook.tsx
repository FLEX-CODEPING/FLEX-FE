'use client';

import { useState } from 'react';

const TeleSetWebhook = ({ onClose }: { onClose: () => void }) => {
  const [telegramUrl, setTelegramUrl] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelegramUrl(e.target.value);
  };

  const saveTelegramWebhook = async () => {
    try {
      const response = await fetch('/api/save-webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ telegramUrl }),
      });
      if (response.ok) {
        alert('텔레그램 웹훅 URL이 성공적으로 저장되었습니다!');
        onClose();
      } else {
        alert('저장 실패! 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('웹훅 저장 중 오류:', error);
      alert('저장 중 문제가 발생했습니다.');
    }
  };

  const openTelegramGuide = () => {
    window.open('https://core.telegram.org/bots/api#making-requests', '_blank');
  };

  return (
    <div className="fixed inset-0 bg-glay-1 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-start p-6 gap-4 w-[600px] h-auto bg-white rounded-[12px] shadow-lg">
        <div className="flex items-center gap-2">
          <img
            src="/images/Telegram.png"
            alt="Telegram Logo"
            className="w-6 h-6"
          />
          <h2 className="text-lg font-semibold text-gray-900">
            텔레그램 웹 훅 URL 설정
          </h2>
        </div>

        <p className="text-sm text-gray-600">
          아래 링크를 통해 가이드라인을 따라보세요.
        </p>
        <button
          type="button"
          onClick={openTelegramGuide}
          className="text-sm text-black-1 underline"
        >
          웹 훅 설정 가이드 라인 - 텔레그램
        </button>

        <input
          type="text"
          value={telegramUrl}
          onChange={handleChange}
          placeholder="텔레그램 웹훅 URL 입력"
          className="w-full px-4 py-3 border border-gray-300 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#0088cc] text-sm"
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
            onClick={saveTelegramWebhook}
            className="px-6 py-2 text-sm bg-[#0088cc] text-white rounded-[6px] hover:bg-[#0077b3]"
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeleSetWebhook;
