import Icons from '@/app/components/common/Icons';
import { likeSmall } from '@/app/constants/iconPath';
import { formatDate } from '@/app/utils/date';
import { truncateString } from '@/app/utils/truncate';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPostProps {
  post: LandingPostTypes;
}

const BlogPost = ({ post }: BlogPostProps) => {
  const formattedTags = post.tags
    ? post.tags.split(',').map((tag: string) => `#${tag}`)
    : [];

  const textContent = post.content.replace(/!\[.*?\]\(.*?\)/g, '').trim();

  return (
    <Link
      href={`blog/detail?id=${post.id}`}
      key={post.id}
      className="w-[382px] cursor-pointer bg-white rounded-md relative group"
    >
      <div className="relative w-full h-40 overflow-hidden rounded-md">
        <Image
          src={post.imageUrls[0] || '/images/thumbnail/stock3.png'}
          alt={post.title}
          fill
          objectFit="cover"
          className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="flex flex-col w-full px-3 py-3 gap-y-2">
        <div className="flex justify-between items-center text-xs h-6">
          <div className="flex items-center text-sm gap-x-2 text-black-0">
            <Image
              src="/images/complete1.png"
              alt={post.title}
              width={20}
              height={20}
              className="rounded-full"
            />
            <span>{post.nickname}</span>
          </div>
          <span className="text-gray-1">{formatDate(post.createdAt)}</span>
        </div>
        <h2 className="font-semibold text-base">{post.title}</h2>
        <p className="text-sm text-gray-700 h-10">
          {truncateString(textContent, 68)}
        </p>

        <div className="flex justify-between items-center h-[30px]">
          <div className="flex gap-x-1">
            {formattedTags.map((tag, i) => (
              <div
                key={tag}
                className="bg-gray-200 px-1 py-0.5 rounded text-xs font-semibold text-gray-700"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="flex w-10 justify-between font-semibold items-center text-[15px] text-black-0 gap-x-2">
            <Icons name={likeSmall} />
            <p>{post.likeCount}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPost;
