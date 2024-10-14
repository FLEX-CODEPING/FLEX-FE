import Image from 'next/image';
import { BlogPost } from '../../_types/blog'; 
import Icons from '@/app/components/common/Icons'
import {likeSmall} from '@/app/constants/iconPath'

interface PostCardProps {
  post: BlogPost; 
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="post-card cursor-pointer">
      <div className="flex justify-between items-center mb-2">
        <div className="bg-gray-200 px-2 py-1 rounded-md text-sm font-semibold text-gray-700">
          #{post.category}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <p>{post.likes}</p>
          {/* <Image
            src="/images/like.png"
            alt="좋아요"
            width={20}
            height={20}
          /> */}
          <Icons name={likeSmall}/>
        </div>
      </div>

      <div className="relative w-full h-48 border border-gray-300 rounded-md">
        <Image
          src={post.imageUrl}
          alt={post.title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="post-content p-4">
        <h2 className="font-bold text-lg mb-2">{post.title}</h2>
        <p className="text-sm text-gray-700 mb-2">{post.content}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src={post.authorImageUrl}
              alt={post.author}
              width={20}
              height={20}
              className="rounded-full"
            />
            <span className="ml-2 text-xs text-gray-500">{post.author}</span>
          </div>
          <span className="text-xs text-gray-500">{post.date}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
