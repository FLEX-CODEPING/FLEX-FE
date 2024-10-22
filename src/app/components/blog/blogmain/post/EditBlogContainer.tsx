'use client';

import dynamic from 'next/dynamic';
import BlogInfoContainer from './BlogInfoContainer';
import { useState } from 'react';

const MyEditor = dynamic(() => import('./markdown/MyEditor'), { ssr: false });

const EditBlogContainer = () => {
  const [postData, setPostData] = useState<PostTypes>();

  const setTitle = (title: string) => {
    setPostData((prevPost) => ({
      ...prevPost,
      title,
    } as PostTypes));
  };

  const setTags = (tags: string[]) => {
    setPostData((prevPost) => ({
      ...prevPost,
      tags,
    } as PostTypes));
  };

  const setContent = (content: string) => {
    setPostData((prevPost) => ({
      ...prevPost,
      content,
    } as PostTypes));
  };

  const handlePostSubmit = async () => {
    

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('Failed to post data');
      }

      console.log('Post submitted successfully!');
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };
  
  return (
    <div className="mb-[50px]">
      <BlogInfoContainer setTitle={setTitle} setTags={setTags} />
      <div className="mt-[20px] mb-10">
        <MyEditor setContent={setContent} />
        <div className="mt-10 flex justify-end">
          <button
            type="submit"
            onClick={handlePostSubmit}
            className="w-36 h-10 bg-[#000000] text-white rounded-[10px] font-bold text-xl "
          >
            출간하기
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditBlogContainer;
