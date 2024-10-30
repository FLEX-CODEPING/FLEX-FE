'use client'

import { LOGIN_MODAL_TEXT, LOGIN_TEXT } from '@/app/constants/common';
import { TITLE } from '@/app/constants/main';
import Link from 'next/link';
import { useEffect } from 'react';

const LoginModal = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 flex-center bg-gray-1 bg-opacity-70 z-50">
      <div className="w-[800px] h-[300px] pt-[60px] pb-12 bg-white rounded-[20px] flex-col-center shadow-lg">
        <div className="text-gray-800 text-xl font-semibold">
          {LOGIN_MODAL_TEXT[0]}
        </div>
        <div className="flex text-2xl text-black-0 gap-x-1 mb-12 mt-4">
          <p>{LOGIN_MODAL_TEXT[1]}</p>
          <p className="text-main-1 font-semibold">{TITLE}</p>
          <p>{LOGIN_MODAL_TEXT[2]}</p>
        </div>
        <div className="flex gap-x-8">
          <Link
            className="w-[180px] h-12 flex-center text-black-0 bg-gray-2 rounded-[15px] text-lg font-medium shadow"
            href="/"
          >
            {LOGIN_TEXT[2]}
          </Link>
          <Link
            className="w-[180px] h-12 flex-center text-white bg-main-1 rounded-[15px] text-lg font-medium shadow"
            href="/auth"
          >
            {LOGIN_TEXT[1]}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
