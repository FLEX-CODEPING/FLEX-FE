'use client';

import { MAIN_CONTENTS_TITLE } from '@/app/constants/main';
import { MOOK_DAILY_POSTS } from '@/app/data/main';
import { getTodayDate } from '@/app/utils/date';
import { useState } from 'react';
import DailyPost from './DailyPost';

const DailyPostContainer = () => {
  const [postData, setPostData] =
    useState<LandingPostTypes[]>(MOOK_DAILY_POSTS);
  const today = getTodayDate();
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
      <div className="w-full flex items-end justify-between px-3 py-4 border-b border-[#cbcaca]">
        <p className="text-2xl font-semibold">{MAIN_CONTENTS_TITLE[0]}</p>
        <p className="text-xs">{today}</p>
      </div>
      <div className="w-full flex-wrap flex gap-x-12 gap-y-5">
        {postData.map((post, i) => (
          <DailyPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default DailyPostContainer;
