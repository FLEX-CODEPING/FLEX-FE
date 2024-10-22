import { EDITBLOG_TEXT } from '@/app/constants/blog';
import TagInput from './TagInput';
import { useState } from 'react';

interface BlogInfo {
  setTitle: (value: string) => void;
  setTags: (value: string[]) => void;
  tags: string[];
}

const BlogInfoContainer = ({ setTitle,tags, setTags }: BlogInfo) => {
  const [title, updateTitle] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    updateTitle(newTitle);
    setTitle(newTitle);
  };

  return (
    <div>
      <div className="w-[1200px] h-[60px] relative">
        <div className="w-[1200px] h-[60px] left-0 top-0 absolute bg-white border-b border-black/25" />
        <input
          type="text"
          placeholder={EDITBLOG_TEXT[0]}
          value={title}
          onChange={handleTitleChange}
          className="w-[400.29px] h-[26.83px] left-[17.23px] top-[16.33px] absolute text-[#414141] text-[28px] font-medium border-none outline-none"
        />
      </div>
      <TagInput tags={tags} setTags={setTags} />
    </div>
  );
};
export default BlogInfoContainer;
