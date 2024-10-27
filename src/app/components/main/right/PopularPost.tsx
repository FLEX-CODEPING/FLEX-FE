'use client';

import { rightArrow } from '@/app/constants/iconPath';
import { MAIN_CONTENTS_TITLE } from '@/app/constants/main';
import { MOOK_ARTICLES } from '@/app/data/main';
import { formatDate } from '@/app/utils/date';
import { truncateString } from '@/app/utils/truncate';
import { useState } from 'react';
import Icons from '../../common/Icons';

const PopularPost = () => {
  const [populartData, setNewsData] =
    useState<DailyArticleTypes[]>(MOOK_ARTICLES);

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
      <div className="w-full flex items-end justify-between px-3 py-4 border-b border-gray-2">
        <p className="text-2xl font-semibold">{MAIN_CONTENTS_TITLE[1]}</p>
        <p className="text-xs">{formatDate('2024.10.04')}</p>
      </div>
      <div className="w-full flex-wrap flex gap-x-12 gap-y-4">
        {populartData.map((data, i) => (
          <div
            className="w-full flex-col-center py-[14px] gap-y-2  border-b border-gray-2 cursor-pointer"
            key={data.title}
          >
            <div className="w-full flex items-center justify-between font-semibold">
              <p className="text-[15px]">{data.title}</p>
              <p className="text-[10px]">{data.media}</p>
            </div>
            <div className="w-full flex items-end justify-between font-normal">
              <p className="text-[13px] w-[580px] h-10">
                {truncateString(data.content, 120)}
              </p>
              <Icons name={rightArrow} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPost;
