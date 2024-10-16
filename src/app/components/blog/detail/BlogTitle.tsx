'use client';
import { useState } from 'react';

interface BlogTitleProps {
  title: string
  membername: string
  date: string
}

const BlogTitle = ({title, membername, date}:BlogTitleProps) => {

  const [isFollowing, setIsFollowing] = useState(false); // 팔로우 상태 관리

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing); // 팔로우 상태를 반전
  };

  return (
    <div className="w-[780px] h-[111px] mt-2 border-b border-[#7a7a7a] flex flex-col gap-6">
      <div className="w-full justify-start items-center text-5xl font-bold">
        {title}
      </div>
      <div className="ml-1 w-full flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-black/80 text-xl font-bold mr-2">
            {membername}
          </span>
          <button
            onClick={handleFollowClick} // 클릭 시 팔로우 상태 변경
            className={`px-2 py-1 text-sm font-bold rounded-md border ${
              isFollowing
                ? 'bg-white border-black text-black'
                : 'bg-white border-black/20 text-black/70'
            }`}
          >
            {isFollowing ? '팔로잉' : '팔로우'}
          </button>
        </div>
        <div className="text-black/60 text-sm mr-1">{date}</div>
      </div>
    </div>
  );
};
export default BlogTitle;
