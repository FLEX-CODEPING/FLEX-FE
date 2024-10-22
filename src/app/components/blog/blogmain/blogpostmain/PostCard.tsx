import Image from 'next/image';
import { BlogPost } from '../../../../_types/blog/blog'; 
import Icons from '@/app/components/common/Icons';
import { likeSmall } from '@/app/constants/iconPath';

interface PostCardProps {
  post: BlogPost; 
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    
    <div className="w-[402px] cursor-pointer bg-white shadow-none rounded-lg relative transition-all duration-300 ease-in-out hover:shadow-lg  mb-10"> 
      <div className="flex justify-between items-center mt-5 px-[1px]">
        <div className="bg-gray-200 px-2 py-1 mb-[5px] rounded-md text-sm font-semibold text-gray-700">
          #{post.category}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <p>{post.likes}</p>
          <Icons name={likeSmall} />
        </div>
      </div>

      <div className="relative w-full h-56 border border-gray-300 rounded-md">
        <Image
          src={post.imageUrl}
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
              src={post.authorImageUrl}
              alt={post.author}
              width={20}
              height={20}
              className="rounded-full"
            />
            <span className="ml-2  text-gray-500">{post.author}</span>
          </div>
          <span className=" text-gray-500">{post.date}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
