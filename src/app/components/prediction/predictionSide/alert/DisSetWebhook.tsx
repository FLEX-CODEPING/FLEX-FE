'use client';

import { useState } from 'react';

const DisSetWebhook = ({ onClose }: { onClose: () => void }) => {
  const [webhookUrl, setWebhookUrl] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWebhookUrl(e.target.value);
  };

  const saveWebhookUrl = async () => {
    try {
      const response = await fetch('/api/save-webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ webhookUrl }),
      });
      if (response.ok) {
        alert('디스코드 웹훅 URL이 성공적으로 저장되었습니다!');
        onClose();
      } else {
        alert('저장 실패! 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('웹훅 저장 중 오류:', error);
      alert('저장 중 문제가 발생했습니다.');
    }
  };

  const openDiscordPage = () => {
    window.open(
      'https://support.discord.com/hc/ko/articles/228383668-%EC%9B%B9%ED%9B%85%EC%9D%84-%EC%86%8C%EA%B0%9C%ED%95%A9%EB%8B%88%EB%8B%A4',
      '_blank',
    );
  };

  return (
    <div className="fixed inset-0 bg-glay-1 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-start p-6 gap-4 w-[600px] h-auto bg-white rounded-[12px] shadow-lg">
        <div className="flex items-center gap-2">
          <img
            src="/images/DIscord.png"
            alt="Discord Logo"
            className="w-6 h-4.5"
          />
          <h2 className="text-lg font-semibold text-gray-900">
            디스코드 웹 훅 URL 설정
          </h2>
        </div>

        <p className="text-sm text-gray-600">
          아래 링크를 통해 가이드라인을 따라보세요.
        </p>
        <button
          type="button"
          onClick={openDiscordPage}
          className="text-sm text-black-1 underline"
        >
          웹 훅 설정 가이드 라인 - 디스코드
        </button>

        <input
          type="text"
          value={webhookUrl}
          onChange={handleChange}
          placeholder="디스코드 웹훅 URL 입력"
          className="w-full px-4 py-3 border border-gray-300 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#5865F2] text-sm"
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
            className="px-6 py-2 text-sm bg-[#5865F2] text-white rounded-[6px] hover:bg-[#4854c8]"
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisSetWebhook;

/*
'use client';

import { useState } from 'react';

const DisSetWebhook = ({ onClose }: { onClose: () => void }) => {
  const [webhookUrl, setWebhookUrl] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWebhookUrl(e.target.value);
  };

  const saveWebhookUrl = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/save-webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ webhookUrl }),
      });
      if (response.ok) {
        alert('Discord Webhook URL saved successfully!');
        onClose();
      } else {
        alert('Failed to save! Please try again.');
      }
    } catch (error) {
      console.error('Error saving webhook:', error);
      alert('An error occurred while saving the webhook.');
    }
  };

  const executeStockNotification = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/notify-stocks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        alert('Stock notification sent successfully!');
      } else {
        alert('Failed to send stock notification. Please try again.');
      }
    } catch (error) {
      console.error('Error sending stock notification:', error);
      alert('An error occurred while sending stock notifications.');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-1 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-start p-6 gap-4 w-[600px] h-auto bg-white rounded-[12px] shadow-lg">
        <h2 className="text-lg font-semibold text-gray-900">Set Discord Webhook URL</h2>
        <input
          type="text"
          value={webhookUrl}
          onChange={handleChange}
          placeholder="Enter Discord Webhook URL"
          className="w-full px-4 py-3 border border-gray-300 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#5865F2]"
        />
        <div className="flex justify-end gap-4 w-full mt-4">
          <button onClick={onClose} className="px-6 py-2 text-sm border rounded-[6px] hover:bg-gray-100">
            Cancel
          </button>
          <button onClick={saveWebhookUrl} className="px-6 py-2 text-sm bg-[#5865F2] text-white rounded-[6px] hover:bg-[#4854c8]">
            Save
          </button>
          <button onClick={executeStockNotification} className="px-6 py-2 text-sm bg-green-500 text-white rounded-[6px] hover:bg-green-700">
            Notify Stocks
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisSetWebhook;
*/
