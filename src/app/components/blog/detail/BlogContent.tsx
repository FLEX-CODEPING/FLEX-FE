'use client';

interface BlogContentProps {
  content: string;
}

const BlogContent = ({ content }: BlogContentProps) => {
  return (
    <div className="w-[880px] mt-5 mb-[100px] flex flex-col gap-11">
      <div className="w-full justify-center items-center text-lg font-medium">
        {content}
      </div>
      <img
        className="w-full"
        src="https://stockboy.co.kr/wp-content/uploads/2023/11/Screenshot-2023-11-18-at-11.35.59-PM-1024x550-optimized.png"
        alt=""
      />
      <div className="w-full justify-center items-center text-lg font-medium">
        {content}
      </div>
    </div>
  );
};
export default BlogContent;
