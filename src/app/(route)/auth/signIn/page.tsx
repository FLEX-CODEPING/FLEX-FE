'use client';

import SignInContainer from '@/app/components/auth/signIn/SignInContainer';
import { dela } from '@/app/components/common/layout/Header';
import { CATCHPHRASE, TITLE } from '@/app/constants/main';
import { Suspense } from 'react';

function SignInPage() {
  return (
    <section className="w-full h-full flex items-center flex-col mt-[1%]">
      <p className={`${dela.className} text-[84px] text-main-1`}>{TITLE}</p>
      <p className="text-3xl font-bold">{CATCHPHRASE}</p>
      <Suspense fallback={<div>Loading...</div>}>
        <SignInContainer />
      </Suspense>
    </section>
  );
}

export default SignInPage;
