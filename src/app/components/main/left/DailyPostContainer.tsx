'use client';

import { MAIN_CONTENTS_TITLE } from '@/app/constants/main';
import { callGet } from '@/app/utils/callApi';
import { useEffect, useState } from 'react';
import NoneContent from '../NoneContent';
import DailyPost from './DailyPost';

const DailyPostContainer = () => {
  const [postData, setPostData] = useState<LandingPostTypes[]>([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await callGet('/api/main/dailyPost');
      response.isSuccess && setPostData(response.result);
    };

    fetchPost();
  }, []);

  return (
    <div className="flex-col-center w-full gap-y-5">
      <div className="w-full flex items-end justify-between px-3 py-4 border-b border-[#cbcaca]">
        <p className="text-2xl font-semibold">{MAIN_CONTENTS_TITLE[0]}</p>
      </div>
      {postData.length === 0 ? (
        <div className="w-full h-[748px]">
          <NoneContent />
        </div>
      ) : (
        <div className="w-full flex-wrap flex gap-x-12 gap-y-5">
          {postData.map((post) => (
            <DailyPost key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DailyPostContainer;
