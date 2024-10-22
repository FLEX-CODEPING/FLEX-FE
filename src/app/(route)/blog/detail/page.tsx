'use client';

import BlogDetail from '@/app/components/blog/detail/BlogDetailContainer';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const BlogDetailPage = () => {
  const searchParams = useSearchParams();
  const postId = Number(searchParams.get('id'));

  if (!postId) {
    return <div>잘못된 요청입니다. 게시물 ID를 제공해주세요.</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="w-full h-full flex items-center flex-col mt-[40px]">
        <BlogDetail postId={postId} likeStatus="INACTIVE" />
      </section>
    </Suspense>
  );
};
export default BlogDetailPage;
