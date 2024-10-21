import { EDITBLOG_TEXT } from '@/app/constants/blog';
import TagInput from './TagInput';

const BlogInfoContainer = () => {
  return (
    <div>
      <div className="w-[1200px] h-[60px] relative">
        <div className="w-[1200px] h-[60px] left-0 top-0 absolute bg-white border-b border-black/25" />
        <input
          type="text"
          placeholder={EDITBLOG_TEXT[0]}
          className="w-[400.29px] h-[26.83px] left-[17.23px] top-[16.33px] absolute text-[#414141] text-[28px] font-medium border-none outline-none"
        />
      </div>
      <TagInput />
    </div>
  );
};
export default BlogInfoContainer;
