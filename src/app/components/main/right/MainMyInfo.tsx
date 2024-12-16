'use client';

import { mainRightArrow, profitIcon, viewIcon } from '@/app/constants/iconPath';
import {
  KAKAO_BTN_TEXT,
  MAIN_MYINFO,
  MAIN_MYINFO_TEXT,
} from '@/app/constants/main';
import { useUserStore } from '@/app/store/store';
import Kakao from '@/app/styles/svgs/Kakao';
import { callGet } from '@/app/utils/callApi';
import { isProfit } from '@/app/utils/formatNum';
import { valueColor } from '@/app/utils/qualify';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Icons from '../../common/Icons';

interface MainMyInfoProps {
  nickname: string;
  followers: number;
  profile: string;
  views: number;
}

const MainMyInfo = ({
  nickname,
  followers,
  profile,
  views,
}: MainMyInfoProps) => {
  const { user } = useUserStore();
  const [profit, setProfit] = useState<UserBalanceTypes | null>();

  useEffect(() => {
    const getBalance = async () => {
      const response = await callGet('/api/stocks/trade/balance');
      response.isSuccess && setProfit(response.result);
    };
    getBalance();
  }, []);
  return (
    <div className="flex-col flex w-full mt-8">
      {user?.isSuccess ? (
        <div className="w-full flex-col-center gap-y-5">
          <div className="flex gap-x-5 px-2 w-full">
            <Image
              src="/images/complete2.png"
              width={54}
              height={54}
              alt="profile"
            />
            <div className="flex w-full justify-between">
              <div className="flex flex-col gap-y-1">
                <p className="text-xl font-semibold">
                  {user.result.nickname || nickname}
                </p>
                <div className="flex text-sm">
                  <p>{MAIN_MYINFO_TEXT[0]}</p>
                  <p className="font-semibold">{followers}명</p>
                </div>
              </div>
              <Link className="flex w-20 items-center gap-x-2.5" href="/mypage">
                <p className="text-sm">{MAIN_MYINFO_TEXT[1]}</p>
                <Icons name={mainRightArrow} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-1.5 px-6 py-3 w-full rounded-xl border border-gray-2">
            <div className="flex w-full justify-between items-center">
              <div className="flex items-center gap-x-3 text-base">
                <Icons name={profitIcon} />
                <p>{MAIN_MYINFO_TEXT[2]}</p>
              </div>
              <div className="flex text-xl gap-x-0.5">
                {profit && (
                  <p className={`${valueColor(profit?.totalProfit)}`}>
                    {isProfit(profit?.totalProfit)}
                  </p>
                )}
                <p>원</p>
              </div>
            </div>
            <div className="border w-full border-gray-3" />
            <div className="flex w-full justify-between items-center">
              <div className="flex items-center gap-x-3 text-base">
                <Icons name={viewIcon} />
                <p>{MAIN_MYINFO_TEXT[3]}</p>
              </div>
              <div className="flex text-xl gap-x-0.5">
                <p>{views}</p>
                <p>회</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-col-center gap-y-6 pb-5 pt-[34px]">
          <div className="w-full flex text-lg text-black-0 gap-x-1">
            <p>{MAIN_MYINFO[0]}</p>
            <p className="text-main-1">{MAIN_MYINFO[1]}</p>
            <p>{MAIN_MYINFO[2]}</p>
          </div>
          <Link
            className="flex relative w-full h-16 rounded-xl bg-[#FEE500] px-6 items-center justify-center gap-x-8"
            href="/auth"
          >
            <Kakao />
            <p className="text-xl">{KAKAO_BTN_TEXT}</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MainMyInfo;
