'use client';

import SignInContainer from '@/app/components/auth/signIn/SignInContainer';
import { CATCHPHRASE, TITLE } from '@/app/constants/main';
import { Suspense } from 'react';

function SignInPage() {
  return (
    <section className="relative w-full h-[calc(100vh-80px)]">
      <div className="relative w-full h-full flex-center flex-col">
        <p className="font-dela text-[84px] text-main-1">{TITLE}</p>
        <p className="text-3xl font-bold">{CATCHPHRASE}</p>
        <Suspense fallback={<div>Loading...</div>}>
          <SignInContainer />
        </Suspense>
      </div>
    </section>
  );
}

export default SignInPage;
