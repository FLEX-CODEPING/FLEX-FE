'use client';

import BlogInfoContainer from './BlogInfoContainer';
import dynamic from 'next/dynamic';

const MyEditor = dynamic(() => import('./markdown/MyEditor'), { ssr: false });

const EditBlogContainer = () => {
  return (
    <div className="mb-[50px]">
      <BlogInfoContainer />
      <div className="mt-[20px] mb-10">
        <MyEditor />
      </div>
    </div>
  );
};
export default EditBlogContainer;
