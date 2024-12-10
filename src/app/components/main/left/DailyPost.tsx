import Icons from '@/app/components/common/Icons';
import { likeSmall } from '@/app/constants/iconPath';
import { truncateString } from '@/app/utils/truncate';
import Image from 'next/image';
import Link from 'next/link';

interface DailyPostProps {
  post: LandingPostTypes;
}

const DailyPost = ({ post }: DailyPostProps) => {
  const formattedTags = post.tags
    ? post.tags.split(',').map((tag: string) => `#${tag}`)
    : [];

  const textContent = post.content.replace(/!\[.*?\]\(.*?\)/g, '').trim();

  return (
    <Link
      href={`blog/detail?id=${post.id}`}
      key={post.id}
      className="w-[344px] flex flex-col gap-y-2.5 cursor-pointer bg-white rounded group"
    >
      <div className="relative w-full h-32 overflow-hidden rounded">
        <Image
          src={post.imageUrls[0] || '/images/3c.png'}
          alt={post.title}
          fill
          objectFit="cover"
          className="rounded transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      <h2 className="font-semibold">{post.title}</h2>
      <p className="text-sm h-9 font-light text-black-0">
        {truncateString(textContent, 66)}
      </p>
      <div className="flex justify-between items-center h-5">
        <div className="flex gap-x-[5px]">
          {formattedTags.map((tag, i) => (
            <div
              key={tag}
              className="bg-gray-3 px-1 py-0.5 rounded-md text-xs font-semibold text-black-1"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="w-8 justify-between flex items-center text-xs text-black-0 font-medium">
          <Icons name={likeSmall} />
          <p>{post.likeCount}</p>
        </div>
      </div>
      <div className="w-full border-b border-gray-2 mt-0.5" />
    </Link>
  );
};

export default DailyPost;
