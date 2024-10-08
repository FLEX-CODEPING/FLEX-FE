'use client';

import {
  MAIN_FEAT,
  MAIN_FEAT_DETAIL,
  MAIN_FEAT_IMG,
} from '@/app/constants/main';
import { getCsrfToken, signIn, useSession } from 'next-auth/react';
import Image from 'next/image';

function SignInContainer() {
  const { data: session, status } = useSession();
  const csrfToken = getCsrfToken();
  console.log(session);
  console.log('토큰 :', csrfToken);
  console.log('상태 :', status);

  return (
    <div className="gap-y-[84px] flex flex-col mt-10">
      <div className="flex flex-col gap-y-3">
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

      <div className="text-sm font-semibold">
        <p>로그인 상태 : {session ? '로그인 완료' : '로그아웃 상태'}</p>
        현재 로그인한 이메일 : {session?.user?.email}
      </div>
      <div
        className="cursor-pointer"
        onClick={() => signIn('kakao', { callbackUrl: '/' })}
      >
        <Image
          src="/images/kakao_login.png"
          alt="loginImg"
          width={360}
          height={55}
        />
      </div>
    </div>
  );
}

export default SignInContainer;
