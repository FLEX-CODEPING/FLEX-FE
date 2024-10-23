import React, { useState, useEffect } from 'react';
import { fetchBlogPosts } from '@/app/api/blog/route'; // API 호출 함수 임포트

const BlogApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const posts = await fetchBlogPosts(); // API 호출
        setData(posts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 발생: {error}</p>;

  return (
    <div>
      <h1>블로그 포스트 목록</h1>
      <ul>{data && data.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
    </div>
  );
};

export default BlogApi;
