'use client';

import Navigation from '@/app/components/blog/main/all/Navigation';
import Pagination from '@/app/components/common/Pagination';
import {
  AGE_RANGE_MAP,
  FILTER_OPTIONS_MAP,
  SALARY_RANGE_MAP,
} from '@/app/constants/blog';
import { callGet } from '@/app/utils/callApi';
import { useEffect, useState } from 'react';
import FollowerFilter from '../following/FollowerFilter';
import RecommendFilter from '../recommend/RecommendFilter';
import BlogPost from './BlogPost';
import TagsFilter from './TagsFilter';

const BlogContainer = () => {
  const [postDatas, setPostDatas] = useState<BlogDataTypes | null>(null);
  const [selectedNav, setSelectedNav] = useState<BlogViewType>('전체');
  const [selectedOption, setSelectedOption] =
    useState<BlogFilterType>('최신순');
  const [page, setPage] = useState(1);
  const [selectedAges, setSelectedAges] = useState('');
  const [selectedSalaries, setSelectedSalaries] = useState('');
  console.log(FILTER_OPTIONS_MAP[selectedOption], '태그 매핑');

  const apiPaths = {
    전체: `/api/blog/main?age=${AGE_RANGE_MAP[selectedAges]}&salary=${SALARY_RANGE_MAP[selectedSalaries]}&page=${page - 1}&filter=${FILTER_OPTIONS_MAP[selectedOption]}`,
    추천: `/api/blog/recommend?filter=${FILTER_OPTIONS_MAP[selectedOption]}&page=${page - 1}`,
    팔로잉: `/api/blog/following?filter=${FILTER_OPTIONS_MAP[selectedOption]}&page=${page - 1}`,
  };

  const apiPath = apiPaths[selectedNav];
  console.log(apiPath,'로 요청');
  

  useEffect(() => {
    const fetchPost = async () => {
      const response = await callGet(apiPath);
      console.log(response, '응답');
      setPostDatas(response.result);
    };
    fetchPost();
  }, [selectedAges, selectedOption, selectedSalaries, selectedNav, page]);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(() => selected + 1);
  };

  const optionsBar = (selectedType: BlogViewType) => {
    if (selectedType === '전체') {
      return (
        <TagsFilter
          selectedAges={selectedAges}
          setSelectedAges={setSelectedAges}
          selectedSalaries={selectedSalaries}
          setSelectedSalaries={setSelectedSalaries}
        />
      );
    }
    if (selectedType === '추천')
      return <RecommendFilter myInterests={postDatas?.myInterests || []} />;
    return (
      <FollowerFilter
        first={postDatas?.firstFollowingNickname || ''}
        followingCount={postDatas?.followingCount || 10}
      />
    );
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex flex-col items-start max-w-[1280px]">
        <Navigation
          selectedNav={selectedNav}
          setSelectedNav={setSelectedNav}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        {optionsBar(selectedNav)}
      </div>
      <div className="w-full flex flex-wrap max-w-[1280px] gap-y-10 gap-x-[67px] mt-8">
        {postDatas &&
          postDatas.content.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
      </div>
      <Pagination
        onPageChange={handlePageChange}
        totalPages={postDatas?.totalPages || 1}
      />
    </div>
  );
};

export default BlogContainer;
