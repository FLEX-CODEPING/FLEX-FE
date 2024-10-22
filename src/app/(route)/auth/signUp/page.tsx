'use client';

import SignUpContainer from '@/app/components/auth/signUp/SignUpContainer';
import { AUTH_TITLE } from '@/app/constants/auth';
import { Suspense } from 'react';

function SignUpPage() {
  return (
    <section className="w-full h-[calc(100vh-80px)] flex-col-center justify-center">
      <p className="text-4xl font-medium">{AUTH_TITLE}</p>
      <Suspense fallback={<div>Loading...</div>}>
        <SignUpContainer />
      </Suspense>
    </section>
  );
}

export default SignUpPage;
