'use client';

import { githubICon } from '@/app/constants/iconPath';
import {
  CONTRIBUTORS,
  FOOTER_ETC_TEXT,
  MAIN_FOOTER_INFO,
  TITLE,
} from '@/app/constants/main';
import Icons from '../../common/Icons';

const MainFooter = () => {
  return (
    <div className="flex-col-center w-full px-4 py-[14px] mt-4 gap-y-[15px] text-sm text-black-0">
      <div className="w-full flex items-end gap-x-2">
        <p className={`font-dela text-2xl`}>{TITLE}</p>
        <p className="font-semibold">{FOOTER_ETC_TEXT[0]}</p>
      </div>
      <div className="w-full flex font-semibold gap-x-4">
        {MAIN_FOOTER_INFO.map((info, i) => (
          <p className="flex cursor-pointer underline" key={info}>
            {info}
          </p>
        ))}
      </div>
      <div className="flex w-full flex-col gap-y-1 font-medium">
        <div className="flex gap-x-2.5 w-full items-end">
          <Icons name={githubICon} />
          <p className="text-sm">{FOOTER_ETC_TEXT[1]}</p>
        </div>
        <div className="w-full flex gap-x-2 text-[10px] font-medium">
          {CONTRIBUTORS.map((name, i) => (
            <p
              className="flex cursor-pointer bg-black-1 text-white px-2 py-0.5 rounded-lg hover:bg-white hover:text-black-1 border border-transparent hover:border-black-0 box-border"
              key={name}
            >
              @ {name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
