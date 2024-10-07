'use client';

import {
  MAIN_FEAT,
  MAIN_FEAT_DETAIL,
  MAIN_FEAT_IMG,
} from '@/app/constants/main';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';

function SignInContainer() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="gap-y-[84px] flex flex-col mt-">
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
      {session?.user?.name}님 반갑습니다 <br />
      <div onClick={() => signIn('kakao')}>
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
