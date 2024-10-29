import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import Input from '../common/Input';
import MyPostCard from './MyPostCard';

const MyPosts = () => {
  return (
    <div className="w-full flex-col flex">
      <div className="flex justify-between items-center">
        <div className="text-black-0 font-bold text-xl">포스팅 (3)</div>
        <div className="w-[200px]  py-2 items-center flex  border-gray-500 border rounded-lg">
          <Image
            src="/images/2c.png"
            alt="search"
            width={20}
            height={20}
            className="rounded-[32px] ml-3"
          />
          <Input type="search" onChange={(e) => {}} className="ml-1" />
        </div>
      </div>
      <div className="mt-8 gap-y-10 flex flex-col">
        {[1, 2, 3].map(() => (
          <MyPostCard key={uuidv4()} />
        ))}
      </div>
    </div>
  );
};
export default MyPosts;
