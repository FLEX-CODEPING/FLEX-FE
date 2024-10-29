import { LOGIN_MODAL_TEXT, LOGIN_TEXT } from '@/app/constants/common';
import { TITLE } from '@/app/constants/main';
import Link from 'next/link';

const LoginModal = () => {
  return (
    <div className="fixed inset-0 flex-center bg-gray-1 bg-opacity-70 z-50">
      <div className="w-[800px] h-[300px] pt-[60px] pb-12 bg-white rounded-[20px] flex-col-center shadow-lg">
        <div className="text-gray-800 text-xl font-semibold">
          {LOGIN_MODAL_TEXT[0]}
        </div>
        <div className="flex text-2xl text-black-0 gap-x-1 mb-[66px] mt-3">
          <p>{LOGIN_MODAL_TEXT[1]}</p>
          <p className="text-main-1 font-semibold">{TITLE}</p>
          <p>{LOGIN_MODAL_TEXT[2]}</p>
        </div>
        <Link
          className="w-60 h-12 flex-center text-white bg-main-1 rounded-[15px] text-xl font-medium"
          href="/auth"
        >
          {LOGIN_TEXT[1]}
        </Link>
      </div>
    </div>
  );
};

export default LoginModal;
