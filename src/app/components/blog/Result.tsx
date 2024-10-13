import React from 'react';
import { BlogPost } from '../../_types/blog'; // 정확한 경로 확인
import PostCard from './PostCard';

interface ResultsProps {
  results: BlogPost[];
  currentPage: number;
  postsPerPage: number;
  searchExecuted: boolean;
  loading: boolean;
}

const Results: React.FC<ResultsProps> = ({
  results,
  currentPage,
  postsPerPage,
  searchExecuted,
  loading,
}) => {
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = results.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      {/* 검색이 실행되면 결과 개수 텍스트를 표시 */}
      {searchExecuted && results.length > 0 && (
        <div className="result-count">
          <p>총 {results.length}개의 포스트를 찾았습니다.</p>
        </div>
      )}

      {/* 로딩 상태 */}
      {loading ? (
        <div className="loading-container">
          <p>로딩 중...</p>
        </div>
      ) : searchExecuted && currentPosts.length === 0 ? (
        /* 검색 결과가 없을 때 */
        <div className="no-results-container">
          <img src="/images/2c.png" alt="no-results" className="no-results-image" />
          <p>검색 결과가 없습니다.</p>
        </div>
      ) : (
        /* 검색 결과가 있을 때 */
        <div className="posts-container">
          {currentPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </>
  );
};

export default Results;
