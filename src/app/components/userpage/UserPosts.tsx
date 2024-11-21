import { searchSmall } from '@/app/constants/iconPath';
import Icons from '../common/Icons';
import Input from '../common/Input';
import UserPostCard from './UserPostCard';

interface UserPostsProps {
  posts: MyPostCardTypes[];
}

const UserPosts = ({ posts }: UserPostsProps) => {
  return (
    <div className="w-full flex-col flex">
      <div className="flex justify-between items-center">
        <div className="text-black-0 font-bold text-xl">
          포스팅 ({posts ? posts.length : 0})
        </div>
        <div className="w-[200px] py-2 items-center flex border-gray-500 border rounded-lg pl-3">
          <Icons name={searchSmall} />
          <Input type="search" onChange={(e) => {}} className="ml-1" />
        </div>
      </div>
      <div className="mt-8 gap-y-10 flex flex-col">
        {posts?.map((post) => (
          <UserPostCard key={post.postId} userpost={post} />
        ))}
      </div>
    </div>
  );
};

export default UserPosts;
