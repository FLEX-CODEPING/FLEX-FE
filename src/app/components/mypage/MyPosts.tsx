import Image from 'next/image';
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
          <Input
            type="search"
            onChange={function (
              e: React.ChangeEvent<HTMLInputElement>,
            ): void {}}
            className="ml-1"
          />
        </div>
      </div>
      <div className='mt-8'>
        <MyPostCard />
      </div>
    </div>
  );
};
export default MyPosts;
