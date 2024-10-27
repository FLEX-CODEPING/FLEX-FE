'use client';

import MyAccount from '@/app/components/mypage/myaccount/MyAccount';
import { Suspense } from 'react';

const MyAccountPage = () => {
  return (
    <section className="w-full h-full flex flex-col mt-[40px]">
      <Suspense fallback={<div>Loading...</div>}>
        <MyAccount />
      </Suspense>
    </section>
  );
};
export default MyAccountPage;
