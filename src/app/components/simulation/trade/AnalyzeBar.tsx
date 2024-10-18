'use client';

import { analyze } from '@/app/constants/iconPath';
import { ANALYZEBAR_TEXT } from '@/app/constants/simulation';
import Button from '../../common/Button';
import Icons from '../../common/Icons';

const AnalyzeBar = () => {
  return (
    <div className="w-[300px] px-8 py-5 h-[140px] flex flex-col items-center rounded-[10px] border border-gray-4">
      <div className="flex w-full justify-start gap-x-1 items-center">
        <Icons name={analyze} />
        <p className="text-base font-bold">{ANALYZEBAR_TEXT[0]}</p>
      </div>
      <p className="text-xs flex w-full ">{ANALYZEBAR_TEXT[1]}</p>
      <Button
        buttonText={ANALYZEBAR_TEXT[2]}
        type="trade"
        className="bg-black-0 text-white mt-6"
        onClickHandler={() => console.log('타입 분석중...')}
      />
    </div>
  );
};

export default AnalyzeBar;
