'use client';

import {
  AUTH_BTN_TEXT,
  CHECK_STATUS,
  INITIAL_SIGNUP_DATA,
} from '@/app/constants/auth';
import { callPost } from '@/app/utils/callApi';
import { isCorrect } from '@/app/utils/qualify';
import { setTokens } from '@/app/utils/setToken';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Button from '../../common/Button';
import IncomeInterestForm from './IncomeInterestForm';
import PersonalInfoForm from './PersonalInfoForm';

function SignUpContainer() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [formData, setFormData] =
    useState<SignUpFormTypes>(INITIAL_SIGNUP_DATA);
  const id = searchParams.get('id');
  const isSatisfied =
    isCorrect(formData.blogName) &&
    isCorrect(formData.nickname) &&
    formData.isPossible &&
    formData.interestKeywords.length !== 0;

  const updateFormData = (key: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  useEffect(() => {
    updateFormData('socialId', Number(id));
  }, [id]);

  const handleSignUpClick = async () => {
    if (isSatisfied) {
      const response = await callPost('/api/auth/signup', { ...formData });
      if (response.isSuccess) {
        setTokens(response.result.accessToken, response.result.refreshToken);
        router.push('/auth/complete');
      }
    } else alert(CHECK_STATUS[2]);
  };

  return (
    <div className="w-[500px] gap-y-3 flex flex-col mt-4">
      <PersonalInfoForm formData={formData} updateFormData={updateFormData} />
      <IncomeInterestForm formData={formData} updateFormData={updateFormData} />
      <Button
        buttonText={AUTH_BTN_TEXT}
        type="signUp"
        onClickHandler={handleSignUpClick}
      />
    </div>
  );
}

export default SignUpContainer;
