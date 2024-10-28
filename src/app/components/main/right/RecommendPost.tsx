'use client';

import { likeSmall } from '@/app/constants/iconPath';
import { MAIN_CONTENTS_TITLE } from '@/app/constants/main';
import { RECOMMEND_ARTICLES } from '@/app/data/main';
import Image from 'next/image';
import { useState } from 'react';
import Icons from '../../common/Icons';

const RecommendPost = () => {
  const [populartData, setNewsData] =
    useState<RecommendPostTypes[]>(RECOMMEND_ARTICLES);
  // useEffect(() => {
  //   const fetchPost = async () => {
  //     const response = await callGet(
  //       `/api/main/landing?viewType=${LANDING_VIEWTYPE_MAP[viewType]}`,
  //     );
  //     setPostData(response.result);
  //   };
  //   fetchPost();
  // }, [viewType]);

  return (
    <div className="flex-col-center w-full gap-y-5">
      <div className="w-full flex flex-col gap-y-4 px-3 py-4 border-b border-gray-2">
        <p className="text-2xl font-semibold">{MAIN_CONTENTS_TITLE[4]}</p>
        <div className="flex gap-x-3 text-[11px] font-medium">
          <div className="flex-center bg-main-4 px-2.5 py-1 rounded-xl">
            부동산
          </div>
          <div className="flex-center bg-main-4 px-2.5 py-1 rounded-xl">
            21 ~ 30
          </div>
          <div className="flex-center bg-main-4 px-2.5 py-1 rounded-xl">
            3천 이하
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-[18px]">
        {populartData.map((data, i) => (
          <div
            className="w-full flex gap-x-10 py-2 px-4 gap-y-1 cursor-pointer border-b border-b-gray-2"
            key={data.title}
          >
            <div className="w-full flex flex-col">
              <p className="text-[10px] font-bold text-main-1">
                {data.category}
              </p>
              <p className="text-[15px] font-semibold">{data.title}</p>
              <div className="flex py-[5px] w-full justify-between items-center mt-2">
                <div className="flex items-center gap-x-1">
                  {data.tags.split(',').map((tag, i) => (
                    <div className="bg-gray-3 text-xs px-1 py-0.5 rounded">
                      # {tag}
                    </div>
                  ))}
                </div>
                <div className="flex w-[48px] justify-between items-center">
                  <Icons name={likeSmall} />
                  <p className="text-sm font-bold">{data.likeCount}</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden w-[120px] h-[70px]">
              <Image
                className="rounded transition-transform duration-300 ease-in-out hover:scale-110 "
                src={'/images/3c.png'}
                alt={'thumbnail'}
                width={120}
                height={70}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendPost;
