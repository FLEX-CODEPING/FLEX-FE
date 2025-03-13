import {
  BIRTH,
  BLOGNAME_TEXT,
  CHECK_STATUS,
  CHECK_STATUS_TEXT,
  NICKNAME_TEXT,
} from '@/app/constants/auth';
import { callPost } from '@/app/utils/callApi';
import { isCorrect } from '@/app/utils/qualify';
import { useState } from 'react';
import Button from '../../common/Button';
import Input from '../../common/Input';

interface PersonalInfoFormProps {
  formData: SignUpFormTypes;
  updateFormData: (key: string, value: any) => void;
}

const PersonalInfoForm = ({
  formData,
  updateFormData,
}: PersonalInfoFormProps) => {
  const [checkStatus, setCheckStatus] =
    useState<BlogNameCheckTypes>(CHECK_STATUS_TEXT);

  const interestStock = async () => {
    if (!isCorrect(formData.blogName)) return;
    if (formData.isPossible) {
      setCheckStatus({ text: CHECK_STATUS_TEXT.text, textColor: 'gray-1' });
      updateFormData('isPossible', false);
    } else {
      const response = await callPost('/api/auth/signup/blogname', {
        blogName: formData.blogName,
      });
      const text = response.isSuccess ? CHECK_STATUS[0] : CHECK_STATUS[1];
      const color = response.isSuccess ? 'blue-1' : 'red-1';
      setCheckStatus({ text, textColor: color });
      response.isSuccess && updateFormData('isPossible', true);
    }
  };

  return (
    <div className="w-full flex flex-col gap-y-3">
      <div className="w-full flex flex-col gap-x-2.5 gap-y-1">
        <div className="text-sm pl-2.5">{BIRTH[0]}</div>
        <div className="w-full flex gap-x-2.5">
          <Input
            className="cursor-pointer pr-8"
            type="signUp"
            inputType="date"
            onClick={(e) => (e.target as HTMLInputElement).showPicker()}
            min="1900-01-01"
            max={new Date().toISOString().split('T')[0]}
            textValue={formData.birth}
            onChange={(e) => updateFormData('birth', e.target.value)}
          />
        </div>
        <div className="text-xs pl-2.5 text-gray-1">{BIRTH[1]}</div>
      </div>
      <div className="w-full flex flex-col gap-x-2.5 gap-y-1">
        <div className="text-sm pl-2.5">{NICKNAME_TEXT[0]}</div>
        <Input
          type="signUp"
          textValue={formData.nickname}
          onChange={(e) => updateFormData('nickname', e.target.value)}
          placeholder={NICKNAME_TEXT[1]}
          maxLength={8}
          className="pr-8"
        />
        <div
          className={`text-xs pl-2.5 text-gray-1 ${!isCorrect(formData.nickname) && 'text-red-1'}`}
        >
          {NICKNAME_TEXT[2]}
        </div>
      </div>
      <div className="w-full flex flex-col gap-x-2.5 gap-y-1">
        <div className="flex text-sm pl-2.5 pr-[120px] items-end w-full justify-between">
          <div>{BLOGNAME_TEXT[0]}</div>
          <div className={`text-[10px] text-${checkStatus.textColor}`}>
            {checkStatus.text}
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <Input
            type="blogName"
            textValue={formData.blogName}
            onChange={(e) => updateFormData('blogName', e.target.value)}
            placeholder={BLOGNAME_TEXT[1]}
            maxLength={8}
            isDisabled={formData.isPossible}
          />
          <Button
            buttonText={formData.isPossible ? '재선택' : '중복체크'}
            className={formData.isPossible ? 'bg-gray-1' : 'bg-main-1'}
            type="checkName"
            onClickHandler={interestStock}
          />
        </div>
        <div
          className={`text-xs pl-2.5 text-gray-1 ${!isCorrect(formData.blogName) && 'text-red-1'}`}
        >
          {BLOGNAME_TEXT[2]}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
