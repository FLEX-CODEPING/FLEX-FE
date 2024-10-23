'use client';

import { LANDING_VIEWTYPE_MAP, MAIN_POST_TAG } from '@/app/constants/main';
import { callGet } from '@/app/utils/callApi';
import { useEffect, useState } from 'react';
import MainPost from './MainPost';

const MainPostContainer = () => {
  const [viewType, setViewType] = useState<MainPostViewTypes>('최신');
  const [postData, setPostData] = useState<LandingPostTypes[]>([]);
  const filteredPosts = postData.slice(0, 6);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await callGet(
        `/api/main/landing?viewType=${LANDING_VIEWTYPE_MAP[viewType]}`,
      );
      setPostData(response.result);
    };
    fetchPost();
  }, [viewType]);

  return (
    <div className="flex-col-center w-full mt-20 gap-y-12">
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
      <div className="w-[1280px] flex-wrap flex gap-x-9 gap-y-5 mx-auto items-center justify-center">
        {filteredPosts.map((post, i) => (
          <MainPost key={post.id} post={post} />
        ))}
      </div>
      <div className="w-[1280px] border-b-2 border-gray-3" />
    </div>
  );
};

export default MainPostContainer;
