'use client';

import BlogDetailContainer from '@/app/components/blog/detail/BlogDetailContainer';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const ClientOnlyBlogDetail = () => {
  const searchParams = useSearchParams();
  const postId = String(searchParams.get('id'));

  if (!postId) {
    return <div>잘못된 요청입니다. 게시물 ID를 제공해주세요.</div>;
  }

  return (
    <section className="wh-fullex flex-col-center mt-10">
      <BlogDetailContainer postId={postId} />
    </section>
  );
};

const BlogDetailPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientOnlyBlogDetail />
    </Suspense>
  );
};

export default BlogDetailPage;
