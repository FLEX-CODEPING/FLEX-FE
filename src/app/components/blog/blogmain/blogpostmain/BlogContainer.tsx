'use client';

import Navigation from '@/app/components/blog/blogmain/blogpostmain/Navigation';
import { dummyPosts } from '@/app/constants/BlogData';
import { useState } from 'react';
import Filters from './Filters';
import PostCard from './PostCard';

const BlogContainer = () => {
  const [postData, setPostData] = useState<LandingPostTypes[]>([]);
  const [selectedNav, setSelectedNav] = useState('전체');
  const [selectedAges, setSelectedAges] = useState('');
  const [selectedSalaries, setSelectedSalaries] = useState('');

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
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex flex-col items-start max-w-[1440px]">
        <Navigation selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
        <Filters
          selectedAges={selectedAges}
          setSelectedAges={setSelectedAges}
          selectedSalaries={selectedSalaries}
          setSelectedSalaries={setSelectedSalaries}
        />
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[44px] p-4">
          {dummyPosts.map((post: BlogPost) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;
