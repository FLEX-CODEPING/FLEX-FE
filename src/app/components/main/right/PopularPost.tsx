'use client';

import { likeSmall } from '@/app/constants/iconPath';
import { MAIN_CONTENTS_TITLE } from '@/app/constants/main';
import { POPULAR_ARTICLES } from '@/app/data/main';
import { formatDate } from '@/app/utils/date';
import { truncateString } from '@/app/utils/truncate';
import { useState } from 'react';
import Icons from '../../common/Icons';

const PopularPost = () => {
  const [populartData, setNewsData] =
    useState<PopularPostTypes[]>(POPULAR_ARTICLES);

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
        <p className="text-2xl font-semibold">{MAIN_CONTENTS_TITLE[3]}</p>
        <p className="text-xs">{formatDate('2024.10.04')}</p>
      </div>
      <div className="w-full flex flex-col gap-y-3">
        {populartData.map((data, i) => (
          <div
            className="w-full flex-col flex py-3 px-2 gap-y-1 cursor-pointer border-b border-b-gray-3 hover:border-b-main-1 transition duration-500"
            key={data.title}
          >
            <div className="w-full flex justify-between">
              <p className="text-[10px]">{data.nickname}</p>
              <div className="flex w-[48px] justify-between items-center">
                <Icons name={likeSmall} />
                <p className="text-sm font-medium">{data.likeCount}</p>
              </div>
            </div>
            <p className="font-semibold">{truncateString(data.title, 120)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPost;
