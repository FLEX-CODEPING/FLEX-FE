'use client';

import dynamic from 'next/dynamic';
import BlogInfoContainer from './BlogInfoContainer';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PostModal from './postModal';
import PostFinModal from './postFinModal';

const MyEditor = dynamic(() => import('./markdown/MyEditor'), { ssr: false });

const EditBlogContainer = () => {
  const [postData, setPostData] = useState<PostTypes>({
    title: '',
    content: '',
    tags: [],
  });
  const [tags, setTags] = useState<string[]>([]);
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

    if (!postDataToSubmit.title || !postDataToSubmit.content || postDataToSubmit.tags === '') {
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
      setIsPostModalOpen(false);
      setIsPostFinModalOpen(true);

      setTimeout(() => {
        router.push('/blog');
      }, 5000);
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  const goBack = () => {
    router.push('/');
  };

  return (
    <div className="mb-[50px]">
      <BlogInfoContainer setTitle={setTitle} setTags={setTags} tags={tags} />
      <div className="mt-[20px] mb-10">
        <MyEditor setContent={setContent} />
        <div className="mt-10 flex justify-between">
          <button
            type="submit"
            onClick={goBack}
            className="w-36 h-10 bg-[#000000] text-white rounded-[10px] font-bold text-xl "
          >
            뒤로가기
          </button>
          <button
            type="button"
            onClick={() => setIsPostModalOpen(true)}
            className="w-36 h-10 bg-[#000000] text-white rounded-[10px] font-bold text-xl "
          >
            출간하기
          </button>
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
            router.push('/blog');
          }}
        />
      )}
    </div>
  );
};
export default EditBlogContainer;
