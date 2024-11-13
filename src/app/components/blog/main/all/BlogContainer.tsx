'use client';

import Navigation from '@/app/components/blog/main/all/Navigation';
import Pagination from '@/app/components/common/Pagination';
import { AGE_RANGE_MAP, SALARY_RANGE_MAP } from '@/app/constants/blog';
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

  const serverurl = `/api/blog/recommend?filter=${AGE_RANGE_MAP[selectedAges]}&salary=${SALARY_RANGE_MAP[selectedSalaries]}&page=${page - 1}`;

  useEffect(() => {
    const fetchPost = async () => {
      const response = await callGet(
        `/api/blog/main?age=${AGE_RANGE_MAP[selectedAges]}&salary=${SALARY_RANGE_MAP[selectedSalaries]}&page=${page - 1}`,
      );
      console.log(response, '응답');

      setPostDatas(response.result);
    };
    fetchPost();
  }, [selectedAges, selectedSalaries, selectedNav, page]);

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
    if (selectedType === '추천') return <RecommendFilter />;
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
