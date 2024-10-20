'use client';

import {
  MAIN_FEAT,
  MAIN_FEAT_DETAIL,
  MAIN_FEAT_IMG,
} from '@/app/constants/main';
import { callPost } from '@/app/utils/callApi';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

function SignInContainer() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&scope=account_email`;

  useEffect(() => {
    const handleLogin = async () => {
      if (code) {
        const response = await callPost('/api/auth/login', { code });
        console.log('서버 응답:', response);

        // 예: redirect('/auth/signUp');
      }
    };

    handleLogin();
  }, [code]);

  return (
    <div className="gap-y-[64px] flex flex-col mt-8">
      <div className="flex flex-col gap-y-1 items-center">
        {MAIN_FEAT.map((feat, i) => (
          <div className="flex items-center" key={feat}>
            <Image
              width={84}
              height={84}
              src={`/images/${MAIN_FEAT_IMG[i]}`}
              alt="logoImg"
            />
            <div className="flex flex-col">
              <p className="text-2xl font-bold">{feat}</p>
              <p className="texl-xl">{MAIN_FEAT_DETAIL[i]}</p>
            </div>
          </div>
        ))}
      </div>
      <Link className="cursor-pointer" href={KAKAO_AUTH_URL}>
        <Image
          src="/images/kakao_login.png"
          alt="loginImg"
          width={360}
          height={55}
        />
      </Link>
    </div>
  );
}

export default SignInContainer;
