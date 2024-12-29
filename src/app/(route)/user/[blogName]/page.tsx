'use client';

import UserPageContainer from '@/app/components/userpage/UserPageContainer';
import { useParams } from 'next/navigation';

const UserPage = () => {
  const { blogName } = useParams();
  const decodedBlogName = decodeURIComponent(blogName as string);
  return (
    <section className="wh-fullex flex-col mt-[40px]">
      <UserPageContainer blogName={decodedBlogName} />
    </section>
  );
};

export default UserPage;
