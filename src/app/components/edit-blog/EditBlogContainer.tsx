'use client'

import dynamic from 'next/dynamic';
import BlogContentContainer from './BlogContentContainer';
import BlogInfoContainer from './BlogInfoContainer';

const MyEditor = dynamic(() => import('../markdown/MyEditor'), {
  ssr: false,
  loading: () => <p>Loading Editor...</p>,
});

const EditBlogContainer = () => {
  return (
    <div>
      <BlogInfoContainer />
      <div className="mt-[50px] mb-10">
        <MyEditor/>
      </div>
    </div>
  );
};
export default EditBlogContainer;
