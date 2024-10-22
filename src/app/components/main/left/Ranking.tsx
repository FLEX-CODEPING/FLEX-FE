import { mainRightArrow } from '@/app/constants/iconPath';
import {
  MAIN_LEFT_ETC,
  MAIN_LEFT_TITLE,
  RANKING_COLOR,
} from '@/app/constants/main';
import { MOOK_RANKINGS } from '@/app/data/main';
import Image from 'next/image';
import Link from 'next/link';
import Icons from '../../common/Icons';

const Ranking = () => {
  return (
    <div className="px-6 py-4 flex-col flex w-full">
      <div className="flex w-full justify-between items-end mb-5">
        <p className="text-xl font-bold">{MAIN_LEFT_TITLE[1]}</p>
        <p className="text-xs">2024.10.04</p>
      </div>
      <div className="w-full flex-col-center gap-y-5">
        {MOOK_RANKINGS.map((ranker, i) => (
          <div
            className={`flex gap-x-6 w-full items-center justify-between px-6 py-5 ${RANKING_COLOR[i]} rounded-lg shadow`}
          >
            <div className="flex gap-x-4">
              <p className="text-3xl font-semibold">{i + 1}</p>
              <Image
                src={ranker.thumbnail}
                alt={''}
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col w-full gap-y-1">
              <div className="flex w-full justify-between">
                <p className="text-base">{ranker.title}</p>
                <Link
                  className="text-xs text-gray-1 flex gap-x-1 items-center"
                  href={'/blog'}
                >
                  {MAIN_LEFT_ETC[1]}
                  <Icons name={mainRightArrow}  className='pb-0.5'/>
                </Link>
              </div>
              <p className="text-xs text-gray-1 font-semibold">
                총 수익 : {ranker.profit}원
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ranking;
