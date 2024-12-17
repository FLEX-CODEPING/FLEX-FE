import { mainRightArrow } from '@/app/constants/iconPath';
import {
  MAIN_CONTENTS_TITLE,
  MAIN_LEFT_ETC,
  RANKING_COLOR,
} from '@/app/constants/main';
import { callGet } from '@/app/utils/callApi';
import { getTodayDateBar } from '@/app/utils/date';
import { formatCurrency } from '@/app/utils/formatNum';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Icons from '../../common/Icons';

const SimulateRank = () => {
  const today = getTodayDateBar();
  const [rank, setRank] = useState<RankDataTypes[]>([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await callGet(`/api/main/userRank`);
      response.isSuccess && setRank(response.result);
    };

    fetchPost();
  }, []);
  console.log(rank, '순위 데이터');

  return (
    <div className="flex-col-center px-3 w-full gap-y-4">
      <div className="flex w-full justify-between items-end">
        <p className="text-2xl font-semibold">{MAIN_CONTENTS_TITLE[5]}</p>
        <p className="text-xs">{today}</p>
      </div>
      <div className="w-full flex-col-center gap-y-6">
        {rank.map((rankData, i) => (
          <Link
            key={rankData.nickname}
            href={`/user/${rankData.blogName}`}
            className={`flex gap-x-4 w-full items-center justify-between px-6 py-4 ${RANKING_COLOR[i]} rounded-lg shadow`}
          >
            <div className="flex gap-x-3 w-[87px]">
              <p className="w-5 text-3xl font-semibold">{i + 1}</p>
              <div className="relative w-10 h-10">
                <Image
                  src={rankData.profileImageUrl || '/images/complete1.png'}
                  alt="유저 프로필"
                  className="rounded-full"
                  fill
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-y-1">
              <div className="flex w-full justify-between">
                <p className="text-base">{rankData.nickname}</p>
                <div className="text-xs text-gray-1 flex gap-x-1 items-center">
                  {MAIN_LEFT_ETC[1]}
                  <Icons name={mainRightArrow} className="pb-0.5" />
                </div>
              </div>
              <p className="text-xs text-gray-1 font-semibold">
                총 수익 : {formatCurrency(Math.floor(rankData.totalProfit))}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimulateRank;
