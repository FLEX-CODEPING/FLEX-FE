import Icons from '@/app/components/common/Icons';
import { dela } from '@/app/components/common/layout/Header';
import {
  COMPLETE_RECOMMEND_D,
  COMPLETE_RECOMMEND_IMG,
  COMPLETE_RECOMMEND_T,
  COMPLETE_TEXT,
  COMPLETE_TITLE,
  RECOMMEND_PATH,
} from '@/app/constants/auth';
import { rightArrow } from '@/app/constants/iconPath';
import { TITLE } from '@/app/constants/main';
import Image from 'next/image';
import Link from 'next/link';

function Complete() {
  return (
    <section className="w-full h-full flex items-center flex-col mt-[2%] gap-y-[100px]">
      <p className="text-6xl font-semibold">{COMPLETE_TITLE}</p>
      <div className="flex flex-col items-center text-3xl gap-y-2">
        <div className="flex">
          <p>주식핑</p>
          <p>{COMPLETE_TEXT[0]}</p>
        </div>
        <div className="flex">
          <p className={`${dela.className} text-main-1`}>{TITLE}</p>
          <p>{COMPLETE_TEXT[1]}</p>
        </div>
      </div>
      <div className="flex gap-x-6">
        {COMPLETE_RECOMMEND_T.map((title, i) => (
          <Link href={RECOMMEND_PATH[i]}>
            <div
              className="w-[440px] h-[112px] flex items-center gap-x-6 px-7 p-4 border-2 border-gray-2 rounded-2xl hover:border-main-1 cursor-pointer"
              key={title}
            >
              <Image
                src={`/images/${COMPLETE_RECOMMEND_IMG[i]}`}
                alt={title}
                width={80}
                height={80}
              />
              <div className="flex flex-col gap-y-3">
                <p className="flex gap-x-1.5 items-center">
                  {title} <Icons className="mb-0.5" name={rightArrow} />
                </p>
                <p>{COMPLETE_RECOMMEND_D[i]}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link
        className="w-[640px] flex-center text-xl text-semibold h-12 text-white bg-main-1 rounded-lg"
        href="/"
      >
        {COMPLETE_TEXT[2]}
      </Link>
    </section>
  );
}

export default Complete;
