'use client';

import Navigation from '@/app/components/blog/blogmain/blogpostmain/Navigation';
import MainPost from '@/app/components/main/MainPost';
import { callGet } from '@/app/utils/callApi';
import { useEffect, useState } from 'react';
import Filters from './Filters';

const BlogContainer = () => {
  const [postData, setPostData] = useState<LandingPostTypes[]>([]);
  const [selectedNav, setSelectedNav] = useState('전체');
  const [selectedAges, setSelectedAges] = useState('');
  const [selectedSalaries, setSelectedSalaries] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      const response = await callGet(`/api/blog/main?a`);
      setPostData(response.result);
    };
    fetchPost();
  }, []);

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[44px] pt-4 pr-16">
        {postData.map((post) => (
          <MainPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogContainer;
