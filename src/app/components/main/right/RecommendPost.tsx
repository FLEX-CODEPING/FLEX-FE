'use client';

import { likeSmall } from '@/app/constants/iconPath';
import { MAIN_CONTENTS_TITLE } from '@/app/constants/main';
import { useUserStore } from '@/app/store/store';
import { callGet } from '@/app/utils/callApi';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Icons from '../../common/Icons';
import NoneContent from '../NoneContent';
import RecommendBlur from './RecommendBlur';

const RecommendPost = () => {
  const { user } = useUserStore();
  const [datas, setDatas] = useState<RecommendPostResultTypes | null>({
    content: [],
    myInterests: [],
  });

  useEffect(() => {
    const fetchPost = async () => {
      const response = await callGet(`/api/main/recommend`);
      console.log(response, '데이터 배열');

      response.isSuccess && setDatas(response.result);
    };

    fetchPost();
  }, [user]);

  return (
    <div className="flex-col-center w-full gap-y-5">
      <div className="w-full flex flex-col gap-y-4 px-3 py-4 border-b border-gray-2">
        <p className="text-2xl font-semibold">{MAIN_CONTENTS_TITLE[4]}</p>
        {user?.isSuccess ? (
          <div className="flex gap-x-3 text-[11px] font-medium">
            {datas?.myInterests.map((interest) => (
              <div
                className="flex-center bg-main-4 px-2.5 py-1 rounded-xl"
                key={interest}
              >
                {interest}
              </div>
            ))}
          </div>
        ) : (
          <div className="h-[24.5px]" />
        )}
      </div>
      {user?.isSuccess ? (
        datas?.content.length !== 0 ? (
          <div className="w-full flex flex-col gap-y-[18px]">
            {datas?.content.map((data, i) => (
              <Link
                href={`/blog/detail?id=${data.id}`}
                className="w-full flex gap-x-5 py-2 px-4 gap-y-1 cursor-pointer border-b border-b-gray-2 group"
                key={data.id}
              >
                <div className="w-[300px] flex flex-col">
                  <p className="text-[10px] font-bold text-main-1">
                    {data.tags}
                  </p>
                  <p className="text-[15px] font-semibold">{data.title}</p>
                  <div className="flex py-[5px] w-full justify-between items-center mt-2">
                    <div className="flex items-center gap-x-1">
                      {data.commonInterests.map((interest) => (
                        <div
                          className="bg-gray-3 text-xs px-1 py-0.5 rounded"
                          key={data.id}
                        >
                          # {interest}
                        </div>
                      ))}
                    </div>
                    <div className="flex w-[48px] justify-between items-center">
                      <Icons name={likeSmall} />
                      <p className="text-sm font-medium">{data.likeCount}</p>
                    </div>
                  </div>
                </div>
                <div className="relative w-[120px] h-16 overflow-hidden rounded">
                  <Image
                    fill
                    className="rounded transition-transform duration-300 ease-in-out group-hover:scale-110 "
                    src={data.imageUrls[0] || `/images/thumbnail/stock${i+1}.png`}
                    alt="thumbnail"
                    loading="lazy"
                  />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="w-full h-[448px]">
            <NoneContent />
          </div>
        )
      ) : (
        <RecommendBlur />
      )}
    </div>
  );
};

export default RecommendPost;
