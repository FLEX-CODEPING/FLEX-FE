import Icons from '@/app/components/common/Icons';
import { likeSmall } from '@/app/constants/iconPath';
import { formatDate } from '@/app/utils/date';
import { truncateString } from '@/app/utils/truncate';
import Image from 'next/image';

interface MainPostProps {
  post: LandingPostTypes;
}

const MainPost = ({ post }: MainPostProps) => {
  const formattedTags = post.tags.split(',').map((tag: string) => `#${tag}`);

  return (
    <div
      key={post.id}
      className="w-[382px] cursor-pointer px-2.5 py-2 bg-white rounded-lg relative transition-all duration-300 ease-in-out hover:shadow-lg"
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-x-1">
          {formattedTags.map((tag, i) => (
            <div className="bg-gray-200 px-2 py-1 mb-[5px] rounded-md text-sm font-semibold text-gray-700">
              {tag}
            </div>
          ))}
        </div>

        <div className="flex items-center text-sm text-gray-500 gap-x-2.5">
          <Icons name={likeSmall} />
          <p>{post.likeCount}</p>
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
        <p className="text-sm text-gray-700 mb-2 ">
          {truncateString(post.content, 64)}
        </p>
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
          <span className=" text-gray-500">{formatDate(post.createdAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default MainPost;
