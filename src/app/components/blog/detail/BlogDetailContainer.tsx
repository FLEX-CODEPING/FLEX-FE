'use client';

import { useUserStore } from '@/app/store/store';
import { callGet } from '@/app/utils/callApi';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useLayoutEffect, useState } from 'react';
import BlogComment from './BlogComment';
import BlogContent from './BlogContent';
import BlogHeader from './BlogHeader';
import BlogTitle from './BlogTitle';

interface PostDetailProps {
  postId: string;
}

const BlogDetailContainer = ({ postId }: PostDetailProps) => {
  const [blogData, setBlogData] = useState<BlogInfoTypes | null>(null);
  const { user } = useUserStore();
  const currentUserId = user?.result?.nickname;
  const router = useRouter();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
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
  }, [postId]);

  if (!blogData) {
    return (
      <div className="flex gap-3 justify-center items-center mt-7">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-4 h-4 bg-main-1 rounded-full"
            animate={{
              y: [0, -10, 0],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        ))}
        {/* <div className="absolute top-[200px] font-semibold text-[20px]">
          게시물을 찾을 수 없습니다.
        </div> */}
      </div>
    );
  }

  const handleNicknameClick = () => {
    router.push(`/user/${blogData.blogName}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -50 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative"
    >
      <motion.div
        className="container mx-auto p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.6,
          ease: 'easeOut',
        }}
      >
        <BlogHeader
          tags={blogData.tags}
          likeStatus={blogData.likeStatus}
          likeCount={blogData.likeCount}
          postId={blogData.id}
        />
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <BlogTitle
            title={blogData.title}
            nickname={blogData.nickname}
            createdAt={blogData.createdAt}
            userId={blogData.userId}
            currentUserId={currentUserId}
            onNicknameClick={handleNicknameClick}
            following={blogData.following}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
        >
          <BlogContent content={blogData.content} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
        >
          <BlogComment postId={blogData.id} currentUserId={currentUserId} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default BlogDetailContainer;
