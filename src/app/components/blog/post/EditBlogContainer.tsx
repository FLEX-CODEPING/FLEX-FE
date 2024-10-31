'use client';

import Button from '@/app/components/common/Button';
import { POST_BTN_TEXT } from '@/app/constants/blog';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import BlogInfoContainer from './BlogInfoContainer';
import PostFinModal from './postFinModal';
import PostModal from './postModal';

const MyEditor = dynamic(() => import('./markdown/MyEditor'), { ssr: false });
const EditBlogContainer = () => {
  const [postData, setPostData] = useState<PostTypes>({
    title: '',
    content: '',
    tags: [],
  });
  const [tags, setTags] = useState<string[]>([]);
  const [newPostId, setNewPostId] = useState<number | null>(null);
  const router = useRouter();
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isPostFinModalOpen, setIsPostFinModalOpen] = useState(false);

  const setTitle = (title: string) => {
    setPostData(
      (prevPost) =>
        ({
          ...prevPost,
          title,
        }) as PostTypes,
    );
  };

  const setContent = (content: string) => {
    setPostData(
      (prevPost) =>
        ({
          ...prevPost,
          content,
        }) as PostTypes,
    );
  };

  const handlePostSubmit = async () => {
    const postDataToSubmit = {
      ...postData,
      tags: tags.join(', '),
    };

    if (
      !postDataToSubmit.title ||
      !postDataToSubmit.content ||
      postDataToSubmit.tags === ''
    ) {
      alert('필수정보를 입력해주세요!');
      return;
    }

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postDataToSubmit),
      });

      if (!response.ok) {
        throw new Error('Failed to post data');
      }
      const resData = await response.json();
      const newId = resData.result;

      setNewPostId(newId);
      setIsPostModalOpen(false);
      setIsPostFinModalOpen(true);

      setTimeout(() => {
        router.push(`/blog/detail?id=${newId}`);
      }, 3000);
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  const goBack = () => {
    router.push('/');
  };

  return (
    <div className="mb-12.5">
      <BlogInfoContainer setTitle={setTitle} setTags={setTags} tags={tags} />
      <div className="mt-5 mb-10">
        <MyEditor setContent={setContent} />
        <div className="mt-10 flex justify-between">
          <Button
            buttonText={POST_BTN_TEXT[0]}
            type="blogPost"
            onClickHandler={goBack}
          />
          <Button
            buttonText={POST_BTN_TEXT[1]}
            type="blogPost"
            onClickHandler={() => setIsPostModalOpen(true)}
          />
        </div>
      </div>
      {isPostModalOpen && (
        <PostModal
          onClose={() => setIsPostModalOpen(false)}
          onSave={() => {
            handlePostSubmit();
          }}
        />
      )}
      {isPostFinModalOpen && (
        <PostFinModal
          onClose={() => {
            setIsPostFinModalOpen(false);
            router.push(`/blog/detail?id=${newPostId}`);
          }}
        />
      )}
    </div>
  );
};
export default EditBlogContainer;
