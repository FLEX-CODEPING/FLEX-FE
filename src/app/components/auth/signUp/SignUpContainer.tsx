'use client';

import { AUTH_BTN_TEXT, INITIAL_SIGNUP_DATA } from '@/app/constants/auth';
import { isCorrect } from '@/app/utils/qualify';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from '../../common/Button';
import IncomeInterestForm from './IncomeInterestForm';
import PersonalInfoForm from './PersonalInfoForm';

function SignUpContainer() {
  const router = useRouter();
  const [formData, setFormData] =
    useState<SignUpFormTypes>(INITIAL_SIGNUP_DATA);

  const isSatisfied =
    isCorrect(formData.blogName) &&
    isCorrect(formData.nickName) &&
    formData.interest.length !== 0;

  const updateFormData = (key: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  console.log(isSatisfied);
  const handleSignUpClick = () => {
    if (isSatisfied) {
      router.push('/auth/complete');
    } else alert('입력정보를 확인해주세요!');
  };

  return (
    <div className="w-[500px] gap-y-5 flex flex-col mt-8">
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
