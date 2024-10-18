import React from 'react';
import { BlogPost } from '../../../../_types/blog'; 
import PostCard from '../blogpostmain/PostCard';

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
    <div className="results-container"> 
      {searchExecuted && results.length > -1 && (
        <div className="result-count">
          <p>
            총 <span className="font-bold">{results.length}</span>개의 포스트를 찾았습니다.
          </p>
        </div>
      )}

      {loading ? (
        <div className="loading-container">
          <p>로딩 중...</p>
        </div>
      ) : searchExecuted && results.length === 0 ? (
        <div className="no-results-container">
          <img src="/images/2c.png" alt="no-results" className="no-results-image" />
          <p>검색 결과가 없습니다.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[44px] p-4"> {/* 그리드 적용 */}
          {results.map((post) => (
            <PostCard key={post.id} post={post} /> 
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
