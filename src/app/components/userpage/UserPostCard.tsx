import { likeSmall } from '@/app/constants/iconPath';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Icons from '../common/Icons';

interface UserPostCardProps {
  userpost: MyPostCardTypes;
}

const UserPostCard = ({ userpost }: UserPostCardProps) => {
  const tagsArray = userpost.tags.split(',').map((tag) => tag.trim());
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/blog/detail?id=${userpost.postId}`);
  };

  return (
    <div
      className="w-full h-[590px] flex-col inline-flex transition-all rounded-lg duration-300 ease-in-out hover:shadow-lg cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="w-full h-[400px] relative rounded-[10px]">
        <Image
          src={
            userpost.imageUrls.length > 0
              ? userpost.imageUrls[0]
              : '/images/thumbnail/stock3.png'
          }
          alt="Discord"
          fill
        />
      </div>
      <div className="w-full px-3 py-[18px] flex-col gap-2 flex">
        <div className="pt-[5px] pb-1 gap-2 flex justify-between items-center text-black-0 text-lg font-bold">
          <span>{userpost.title}</span>
          <div className="flex items-center gap-1">
            <Icons name={likeSmall} />
            <span className="text-black-0 font-bold">{userpost.likeCount}</span>
          </div>
        </div>
        <div className="justify-start items-start gap-2 inline-flex">
          <div className="h-[45px] text-black-0 text-base overflow-hidden text-ellipsis">
            {userpost.content}
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-x-2">
            {tagsArray.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 px-3 py-1 rounded-full text-gray-800 text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="text-right text-[#7a7a7a] text-sm font-normal">
            {userpost.createdAt.split('T')[0]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPostCard;
