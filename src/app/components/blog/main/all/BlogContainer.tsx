'use client';

import Navigation from '@/app/components/blog/main/all/Navigation';
import { MOOK_DAILY_POSTS } from '@/app/data/main';
import { useState } from 'react';
import RecommendFilter from '../recommend/RecommendFilter';
import BlogPost from './BlogPost';
import TagsFilter from './TagsFilter';

const BlogContainer = () => {
  const [postData, setPostData] = useState<LandingPostTypes[]>([]);
  const [selectedNav, setSelectedNav] = useState<BlogViewType>('전체');
  const [selectedAges, setSelectedAges] = useState('');
  const [selectedSalaries, setSelectedSalaries] = useState('');

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     const response = await callGet(
  //       `/api/blog/main?age=${AGE_RANGE_MAP[selectedAges]}&salary=${SALARY_RANGE_MAP[selectedSalaries]}`,
  //     );
  //     setPostData(response.result);
  //   };
  //   fetchPost();
  // }, [selectedAges, selectedSalaries]);

  const optionsBar = (selectedNav: BlogViewType) => {
    if (selectedNav === '전체')
      return (
        <TagsFilter
          selectedAges={selectedAges}
          setSelectedAges={setSelectedAges}
          selectedSalaries={selectedSalaries}
          setSelectedSalaries={setSelectedSalaries}
        />
      );
    else if (selectedNav === '추천') return <RecommendFilter />;
    else return null;
  };
  
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex flex-col items-start max-w-[1280px]">
        <Navigation selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
        {optionsBar(selectedNav)}
      </div>
      <div className="w-full flex flex-wrap max-w-[1280px] gap-y-10 justify-between mt-8">
        {MOOK_DAILY_POSTS &&
          MOOK_DAILY_POSTS.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
      </div>
    </div>
  );
};

export default BlogContainer;
