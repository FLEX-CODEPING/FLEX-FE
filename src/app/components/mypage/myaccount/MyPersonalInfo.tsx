import {
  BIRTH,
  BIRTH_DATE,
  BLOGNAME_TEXT,
  NICKNAME_TEXT,
} from '@/app/constants/auth';
import { isCorrect } from '@/app/utils/qualify';
import { ACCOUNT_TEXT } from '@/app/constants/mypage';
import { useState } from 'react';
import { callPost } from '@/app/utils/callApi';
import Input from '../../common/Input';

interface MyPersonalInfoProps {
  formData: AccountFormTypes;
  updateFormData: (key: string, value: any) => void;
}

const MyPersonalInfo = ({ formData, updateFormData }: MyPersonalInfoProps) => {
  const [checkStatus, setCheckStatus] = useState<{
    text: string;
    textColor: string;
  }>({ text: '', textColor: 'gray-1' });

  const handleBlogNameCheck = async () => {
    // 입력값 검증
    if (!isCorrect(formData.blogName)) {
      setCheckStatus({
        text: '유효하지 않은 블로그명입니다.',
        textColor: 'red-1',
      });
      return;
    }

    try {
      const response = await callPost('/api/auth/signup/blogname', {
        blogName: formData.blogName,
      });

      if (response.isSuccess) {
        setCheckStatus({
          text: '사용 가능한 블로그명입니다.',
          textColor: 'blue-1',
        });
        updateFormData('isPossible', true);
      } else {
        setCheckStatus({
          text: '이미 사용 중인 블로그명입니다.',
          textColor: 'red-1',
        });
        updateFormData('isPossible', false);
      }
    } catch (error) {
      console.error('블로그명 중복 확인 실패:', error);
      setCheckStatus({ text: '서버 오류가 발생했습니다.', textColor: 'red-1' });
    }
  };

  return (
    <div className="w-full flex flex-col gap-y-4">
      <div className="w-full flex flex-col gap-x-2.5 gap-y-1">
        <div className="text-sm pl-2.5">{NICKNAME_TEXT[0]}</div>
        <Input
          type="signUp"
          textValue={formData.nickname}
          onChange={(e) => updateFormData('nickname', e.target.value)}
          placeholder="NICKNAME"
          maxLength={8}
          className="pr-8 rounded-[10px]"
        />
      </div>
      <div className="w-full flex flex-col gap-x-2.5 gap-y-1">
        <div className="text-sm pl-2.5">{BLOGNAME_TEXT[0]}</div>
        <div className="flex items-center justify-between gap-2.5">
          <Input
            type="blogName"
            textValue={formData.blogName}
            onChange={(e) => {
              updateFormData('blogName', e.target.value);
              updateFormData('isPossible', false);
              setCheckStatus({ text: '', textColor: 'gray-1' });
            }}
            placeholder={BLOGNAME_TEXT[1]}
            maxLength={8}
          />
          <button
            type="button"
            onClick={handleBlogNameCheck}
            className="py-2 px-4 rounded-[10px] border bg-black-0 text-white text-sm font-medium"
          >
            {ACCOUNT_TEXT[2]}
          </button>
        </div>
        <div className={`text-xs pl-2.5 text-${checkStatus.textColor}`}>
          {checkStatus.text}
        </div>
      </div>
      <div className="w-full flex flex-col gap-x-2.5 gap-y-1">
        <div className="text-sm pl-2.5">{BIRTH[0]}</div>
        <div className="w-full flex gap-x-2.5">
          <div className="w-full rounded-[10px] py-2 px-4 border border-gray-300 bg-gray-50 text-gray-700 text-sm">
            {formData.birth || '생년월일 정보 없음'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPersonalInfo;
