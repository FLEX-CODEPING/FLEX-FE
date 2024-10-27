'use client';

import { AUTH_BTN_TEXT, INITIAL_SIGNUP_DATA } from '@/app/constants/auth';
import { callPost } from '@/app/utils/callApi';
import { isCorrect } from '@/app/utils/qualify';
import { setTokens } from '@/app/utils/setToken';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Button from '../../common/Button';
import MyPersonalInfo from './MyPersonalInfo';
import MyInterest from './MyInterest';
import { ACCOUNT_TEXT } from '@/app/constants/mypage';
import Image from 'next/image';

function AccountContainer() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [formData, setFormData] =
    useState<SignUpFormTypes>(INITIAL_SIGNUP_DATA);
  const id = searchParams.get('id');
  const isSatisfied =
    isCorrect(formData.blogName) &&
    isCorrect(formData.nickname) &&
    formData.interestKeywords.length !== 0;

  const updateFormData = (key: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  useEffect(() => {
    updateFormData('socialId', Number(id));
    console.log(id);
  }, [id]);

  const handleSignUpClick = async () => {
    if (isSatisfied) {
      const response = await callPost('/api/auth/signup', { ...formData });
      if (response.isSuccess) {
        setTokens(response.result.accessToken, response.result.refreshToken);
        router.push('/auth/complete');
      }
    } else alert('입력정보를 확인해주세요!');
  };

  return (
    <div className="w-[500px] gap-y-5 flex flex-col ">
      <div className="text-black-0 font-bold text-[26px] flex justify-center">
        {ACCOUNT_TEXT[0]}
      </div>
      <div className="flex justify-center">
        <Image
          src="/images/profile.png"
          alt="profile"
          width={80}
          height={80}
          className="rounded-[32px]"
        />
      </div>
      <MyPersonalInfo formData={formData} updateFormData={updateFormData} />
      <MyInterest formData={formData} updateFormData={updateFormData} />
      <div className='flex justify-center'>
        <Button
          buttonText={ACCOUNT_TEXT[1]}
          type="account"
          onClickHandler={handleSignUpClick}
        />
      </div>
    </div>
  );
}

export default AccountContainer;
