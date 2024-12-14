'use client';

import { likeSmall } from '@/app/constants/iconPath';
import { MAIN_CONTENTS_TITLE } from '@/app/constants/main';
import { callGet } from '@/app/utils/callApi';
import { getTodayDateBar } from '@/app/utils/date';
import { truncateString } from '@/app/utils/truncate';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Icons from '../../common/Icons';
import NoneContent from '../NoneContent';

const PopularPost = () => {
  const [postDatas, setPostData] = useState<MainPostTypes[]>([]);
  const today = getTodayDateBar();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await callGet('/api/main/popular');
      response.isSuccess && setPostData(response.result);
    };
    fetchPost();
  }, []);

  return (
    <div className="flex-col-center w-full gap-y-5">
      <div className="w-full flex items-end justify-between px-3 py-4 border-b border-gray-2">
        <p className="text-2xl font-semibold">{MAIN_CONTENTS_TITLE[3]}</p>
        <p className="text-xs">{today}</p>
      </div>
      {postDatas?.length === 0 ? (
        <div className="w-full h-[328px]">
          <NoneContent />
        </div>
      ) : (
        <div className="w-full flex flex-col gap-y-3">
          {postDatas.map((data, i) => (
            <Link
              href={`/blog/detail?id=${data.id}`}
              className="w-full flex-col flex py-3 px-2 gap-y-1 cursor-pointer border-b border-b-gray-3 hover:border-b-main-1 transition duration-500"
              key={data.id}
            >
              <div className="w-full flex justify-between">
                <p className="text-[12px] text-orange-500 font-semibold">
                  조회수 {data.viewCount}회
                </p>
                <div className="flex w-[48px] justify-between items-center">
                  <Icons name={likeSmall} />
                  <p className="text-sm font-medium">{data.likeCount}</p>
                </div>
              </div>
              <p className="font-semibold">{truncateString(data.title, 120)}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularPost;
