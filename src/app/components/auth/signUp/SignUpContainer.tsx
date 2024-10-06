'use client';

import { AUTH_BTN_TEXT, INITIAL_SIGNUP_DATA } from '@/app/constants/auth';
import { useState } from 'react';
import Button from '../../common/Button';
import IncomeInterestForm from './IncomeInterestForm';
import PersonalInfoForm from './PersonalInfoForm';

function SignInContainer() {
  const [formData, setFormData] =
    useState<SignUpFormTypes>(INITIAL_SIGNUP_DATA);

  const updateFormData = (key: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  // 임시함수
  const handleSignUpClick = () => {
    updateFormData('year', 2000);
  };

  return (
    <div className="w-[500px] gap-y-10 flex flex-col mt-12">
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

export default SignInContainer;
