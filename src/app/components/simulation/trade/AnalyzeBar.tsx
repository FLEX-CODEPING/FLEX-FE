'use client';

import { analyze } from '@/app/constants/iconPath';
import { ANALYZEBAR_TEXT } from '@/app/constants/simulation';
import Link from 'next/link';
import Icons from '../../common/Icons';

const AnalyzeBar = () => {
  return (
    <div className="w-[300px] px-8 py-5 h-[145px] flex flex-col items-center rounded-[10px] border border-gray-4">
      <div className="flex w-full justify-start gap-x-1 items-center">
        <Icons name={analyze} />
        <p className="text-base font-bold">{ANALYZEBAR_TEXT[0]}</p>
      </div>
      <p className="text-xs flex w-full ">{ANALYZEBAR_TEXT[1]}</p>
      <Link
        className="bg-black-0 text-white mt-6 w-60 h-8 rounded-lg font-semibold text-[15px] flex-center"
        href="/analyze"
      >
        {ANALYZEBAR_TEXT[2]}
      </Link>
    </div>
  );
};

export default AnalyzeBar;
