'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../../common/Button';
import Input from '../../common/Input';

const SetWebhook = () => {
  const [webhookUrl, setWebhookUrl] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWebhookUrl(e.target.value);
  };

  const saveWebhookUrl = () => {
    console.log('웹훅 URL 저장:', webhookUrl);
    router.push('/');
  };

  return (
    <div className="flex-col-center gap-y-5 p-5">
      <h2 className="text-lg font-semibold">디스코드 웹훅 URL 설정</h2>
      <p className="text-sm text-gray-700">
        아래 이미지를 참고하여 디스코드에서 웹훅 URL을 생성하고 입력하세요.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <img
          src="/images/discord1.png"
          alt="디스코드 웹훅 생성 단계 1"
          className="w-[384px] h-auto rounded-md" // 가로 크기를 2배 더 크게
        />
        <img
          src="/images/discord2.png"
          alt="디스코드 웹훅 생성 단계 2"
          className="w-[384px] h-auto rounded-md" // 가로 크기를 2배 더 크게
        />
        <img
          src="/images/discord3.png"
          alt="디스코드 웹훅 생성 단계 3"
          className="w-[384px] h-auto rounded-md" // 가로 크기를 2배 더 크게
        />
        <img
          src="/images/discord4.png"
          alt="디스코드 웹훅 생성 단계 4"
          className="w-[384px] h-auto rounded-md" // 가로 크기를 2배 더 크게
        />
      </div>

      <Input
        className="w-full outline-none"
        type="discord"
        textValue={webhookUrl}
        placeholder="디스코드 웹훅 URL 입력"
        onChange={handleChange}
      />
      <Button
        buttonText="저장"
        type="prediction"
        onClickHandler={saveWebhookUrl}
      />
    </div>
  );
};

export default SetWebhook;
