import { BLOG_FOLLOWING_TEXT } from '@/app/constants/blog';
import Image from 'next/image';

const FollowerFilter = () => {
  return (
    <div className="mt-9  px-6 text-xs flex-center h-10 gap-x-[15px] py-2.5 rounded-xl text-white bg-black-1">
      <div className="relative flex w-12">
        <Image
          src={'/images/complete1.png'}
          alt={'profile'}
          width={20}
          height={20}
          className="border-white border rounded-full"
        />
        <Image
          src={'/images/complete2.png'}
          alt={'profile'}
          width={20}
          height={20}
          className="border-white border rounded-full absolute left-3"
        />
        <Image
          src={'/images/complete3.png'}
          alt={'profile'}
          width={20}
          height={20}
          className="border-white border rounded-full absolute left-6"
        />
      </div>
      <div className="flex gap-x-0.5">
        <p>{BLOG_FOLLOWING_TEXT[0]}</p>
        <p className="font-semibold">코드핑님</p>
        <p>{BLOG_FOLLOWING_TEXT[1]}</p>
        <p className="font-semibold">13</p>
        <p>{BLOG_FOLLOWING_TEXT[2]}</p>
      </div>
    </div>
  );
};

export default FollowerFilter;
