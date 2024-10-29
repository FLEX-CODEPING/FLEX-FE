'use client';

import Icons from '@/app/components/common/Icons';
import { searchBig } from '@/app/constants/iconPath';

interface ResultsProps {
  results: BlogPost[];
  searchExecuted: boolean;
  loading: boolean;
}

const Results: React.FC<ResultsProps> = ({
  results,
  searchExecuted,
  loading,
}) => {
  return (
    <div className="w-full">
      {searchExecuted && results.length > -1 && (
        <div className="flex justify-center mt-[27px] text-[20px]">
          <p>
            총 <span className="font-bold">{results.length}</span>개의 포스트를
            찾았습니다.
          </p>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center h-[60px]">
          <p>로딩 중...</p>
        </div>
      ) : searchExecuted && results.length === 0 ? (
        <div className="flex flex-col items-center text-center mt-[193px]">
          <Icons name={searchBig} />
          <p>검색 결과가 없습니다.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[4px] ml-8 p-4">
          {/* {results.map((post) => (
            // <PostCard key={post.id} post={post} />
          ))} */}
        </div>
      )}
    </div>
  );
};

export default Results;
