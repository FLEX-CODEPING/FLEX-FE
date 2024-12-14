'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { callGet } from '@/app/utils/callApi';
import { useUserStore } from '@/app/store/store';
import { useRouter } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import BlogContent from './BlogContent';
import BlogHeader from './BlogHeader';
import BlogTitle from './BlogTitle';
import BlogComment from './BlogComment';

interface PostDetailProps {
  postId: string;
}

const BlogDetailContainer = ({ postId }: PostDetailProps) => {
  const [blogData, setBlogData] = useState<BlogInfoTypes | null>(null);
  const { user } = useUserStore();
  const currentUserId = user?.result?.nickname;
  const router = useRouter();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Scroll to top before the component is painted
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        console.log(resData.result.content);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };
    fetchData();
  }, [postId]);

  if (!blogData) {
    console.log(blogData);
    return <div>Loading...</div>;
  }

  const handleNicknameClick = () => {
    router.push(`/user/${blogData.blogName}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* 스크롤 진행바 */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-2 bg-main-1 origin-left z-50"
      />

      {/* 콘텐츠 */}
      <div>
        <BlogHeader
          tags={blogData.tags}
          likeStatus={blogData.likeStatus}
          likeCount={blogData.likeCount}
          postId={blogData.id}
        />
        <BlogTitle
          title={blogData.title}
          nickname={blogData.nickname}
          createdAt={blogData.createdAt}
          userId={blogData.userId}
          onNicknameClick={handleNicknameClick}
          following={blogData.following}
        />
        <BlogContent content={blogData.content} />
        <BlogComment postId={blogData.id} currentUserId={currentUserId} />
      </div>
    </motion.div>
  );
};
export default BlogDetailContainer;
