'use client';

import { MAIN_POST_TAG } from '@/app/constants/main';
import { useState } from 'react';

const MainPostContainer = () => {
  const [viewType, setViewType] = useState<MainPostViewTypes>('최신');
  const [postData, setPostData] = useState<LandingPostTypes[]>([]);
  console.log(viewType, '타입');
  return (
    <div className="flex-col-center w-full mt-20">
      <div className="w-80 flex gap-x-[45px]">
        {MAIN_POST_TAG.map((tag, i) => (
          <div
            key={tag}
            className={`w-20 h-12 flex-center text-2xl font-medium cursor-pointer box-content	 ${viewType === tag && 'border-b border-main-1'}`}
            onClick={() => setViewType(tag)}
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="w-[1280px] flex-wrap">{}</div>
    </div>
  );
};

export default MainPostContainer;
