'use client';

import { useEffect, useState } from 'react';
import { CONTENT } from '@/app/constants/blog';
import BlogContent from './BlogContent';
import BlogHeader from './BlogHeader';
import BlogTitle from './BlogTitle';
import BlogComment from './BlogComment';
import { callGet } from '@/app/utils/callApi';

interface PostDetailProps {
  postId: number;
  likeStatus: 'ACTIVE' | 'INACTIVE';
}

const BlogDetailContainer = ({ postId, likeStatus }: PostDetailProps) => {
  const [blogData, setBlogData] = useState<BlogInfoTypes | null>(null);

  useEffect(() => {
    console.log(postId, '받아온 아이디');

    const fetchData = async () => {
      try {
        const resData = await callGet(`/api/detail?id=${postId}`);

        const tagsArray = resData.result.tags
          .split(',')
          .map((tag: string) => tag.trim());
        const formattedCreatedAt = resData.result.createdAt.split('T')[0];

        setBlogData({
          ...resData.result,
          tags: tagsArray,
          createdAt: formattedCreatedAt,
        });
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };
    fetchData();

    window.scrollTo(0, 0);
  }, [postId]);

  return (
    <div>
      <BlogHeader
        tags={blogData?.tags}
        likeStatus={likeStatus}
        likeCount={blogData?.likeCount}
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
