import Icons from '@/app/components/common/Icons';
import { likeSmall } from '@/app/constants/iconPath';
import Image from 'next/image';

interface MainPostProps {
  post: LandingPostTypes;
}

const MainPost = ({ post }: MainPostProps) => {
  const formattedTags = post.tags.split(',').map((tag: string) => `#${tag}`);

  return (
    <div
      key={post.id}
      className="w-[402px] cursor-pointer bg-white shadow-none rounded-lg relative transition-all duration-300 ease-in-out hover:shadow-lg  mb-10"
    >
      <div className="flex justify-between items-center mt-5 px-[1px]">
        {formattedTags.map((tag, i) => (
          <div className="bg-gray-200 px-2 py-1 mb-[5px] rounded-md text-sm font-semibold text-gray-700">
            {tag}
          </div>
        ))}
        <div className="flex items-center text-sm text-gray-500 gap-x-2.5">
          <p>{post.likeCount}</p>
          <Icons name={likeSmall} />
        </div>
      </div>

      <div className="relative w-full h-56 border border-gray-300 rounded-md">
        <Image
          src={post.imageUrls[0] || '/images/3c.png'}
          alt={post.title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="">
        <h2 className="font-bold text-lg mb-2 ">{post.title}</h2>
        <p className="text-sm text-gray-700 mb-2 ">{post.content}</p>
        <div className="flex justify-between items-center text-xs ">
          <div className="flex items-center text-xs">
            <Image
              src={post.imageUrls[0] || '/images/4c.png'}
              alt={post.title}
              width={20}
              height={20}
              className="rounded-full"
            />
            <span className="ml-2  text-gray-500">코드핑</span>
          </div>
          <span className=" text-gray-500">{post.createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default MainPost;
