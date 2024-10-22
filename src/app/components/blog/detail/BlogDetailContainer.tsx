'use client';

import { useEffect, useState } from 'react';
import { CONTENT } from '@/app/constants/blog';
import BlogContent from './BlogContent';
import BlogHeader from './BlogHeader';
import BlogTitle from './BlogTitle';
import BlogComment from './BlogComment';
import { callGet } from '@/app/utils/callApi';

interface PostDetailProps {
  postId: number
  likeStatus: 'ACTIVE' | 'INACTIVE'
}

const BlogDetailContainer = ({postId, likeStatus}:PostDetailProps) => {
  const [blogData, setBlogData] = useState<BlogInfoTypes | null>(null);
  

  useEffect(() => {
    console.log(postId, '받아온 아이디');
    
    const fetchData = async () => {
      try {
        const response = await callGet(
          `/api/detail?id=${postId}`, // 여기에 postId를 적절히 전달해야 합니다.
        );
        const resData = await response.json();

        // 태그를 쉼표로 나눠서 배열로 만들기
        const tagsArray = resData.result.tags.split(',').map((tag: string) => tag.trim());
        // 받아온 데이터를 상태로 설정
        setBlogData({
          ...resData.result,
          tags: tagsArray, // tags를 배열로 변환하여 blogData에 추가
        });
        
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };
    fetchData();

    // 화면 최상단으로 스크롤
    window.scrollTo(0, 0);
  }, [postId]);

  return (
    <div>
      <BlogHeader
        tags={blogData?.tags}
        initialLikesCount={blogData?.likeCount}
        likeStatus={likeStatus}
      />
      <BlogTitle
        title={blogData?.title}
        nickname={blogData?.nickname}
        createdAt={blogData?.createdAt}
      />
      <BlogContent content={blogData?.content} />
      <BlogComment />
    </div>
  );
};
export default BlogDetailContainer;
