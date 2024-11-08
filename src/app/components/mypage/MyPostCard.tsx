import { likeSmall } from '@/app/constants/iconPath';
import Image from 'next/image';
import Icons from '../common/Icons';

interface MyPostCardsProps{
  mypost:MyPostCardTypes
}

const MyPostCard = ({mypost}:MyPostCardsProps) => {
  const likeCount = 27;
  const tags = ['주식', '투자'];

  return (
    <div className="w-full h-[590px] flex-col  inline-flex transition-all rounded-lg duration-300 ease-in-out hover:shadow-lg">
      <div className="w-full h-[400px] relative rounded-[10px]">
        <Image
          fill
          className="rounded-[10px]"
          src={mypost.image}
          alt="thumbnail"
        />
      </div>
      <div className="w-full  px-3 py-[18px] flex-col gap-2 flex">
        <div className="pt-[5px] pb-1 gap-2 flex justify-between items-center text-black-0 text-lg font-bold">
          <span>{mypost.title}</span>
          <div className="flex items-center gap-1">
            <Icons name={likeSmall} />
            <span className="text-black-0 font-bold">{mypost.helpful}</span>
          </div>
        </div>
        <div className="justify-start items-start gap-2 inline-flex">
          <div className="h-[45px] text-black-0 text-base overflow-hidden text-ellipsis">
            {mypost.content}
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-x-2">
            {mypost.tag.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 px-3 py-1 rounded-full text-gray-800 text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="text-right text-[#7a7a7a] text-sm font-normal">
            {mypost.createdAt}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyPostCard;
