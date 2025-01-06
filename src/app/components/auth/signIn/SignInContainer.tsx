'use client';

import {
  MAIN_FEAT,
  MAIN_FEAT_DETAIL,
  MAIN_FEAT_IMG,
} from '@/app/constants/main';
import { useUserStore } from '@/app/store/store';
import { callPost } from '@/app/utils/callApi';
import { setTokens } from '@/app/utils/setToken';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

function SignInContainer() {
  const searchParams = useSearchParams();
  const { fetchUser } = useUserStore();
  const code = searchParams.get('code');
  const router = useRouter();

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&scope=account_email`;

  useEffect(() => {
    const handleLogin = async () => {
      if (code) {
        const response = await callPost('/api/auth/login', { code });
        if (response.result.userStatus === 'PENDING') {
          router.push(`/auth/signUp?id=${response.result.socialId}`);
        } else if (response.isSuccess) {
          setTokens(response.result.accessToken, response.result.refreshToken);
          await fetchUser();
          router.push('/');
        }
      }
    };
    handleLogin();
  }, [code]);

  return (
    <div className="gap-y-12 flex flex-col mt-4">
      <div className="flex flex-col gap-y-1 items-center pr-6">
        {MAIN_FEAT.map((feat, i) => (
          <div className="flex items-center" key={feat}>
            <Image
              width={84}
              height={84}
              src={`/images/${MAIN_FEAT_IMG[i]}`}
              alt="logoImg"
            />
            <div className="flex flex-col">
              <p className="text-xl font-bold">{feat}</p>
              <p className="texl-lg">{MAIN_FEAT_DETAIL[i]}</p>
            </div>
          </div>
        ))}
      </div>
      <Link className="cursor-pointer w-full flex-center" href={KAKAO_AUTH_URL}>
        <Image
          src="/images/kakao_login.png"
          alt="loginImg"
          width={320}
          height={48}
        />
      </Link>
    </div>
  );
}

export default SignInContainer;
