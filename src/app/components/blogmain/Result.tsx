import React from 'react';
import { BlogPost } from '../../_types/blog'; 
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
      ) : searchExecuted && currentPosts.length === 0 ? (
        <div className="no-results-container">
          <img src="/images/2c.png" alt="no-results" className="no-results-image" />
          <p>검색 결과가 없습니다.</p>
        </div>
      ) : (
        <div className="posts-container">
          {currentPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
