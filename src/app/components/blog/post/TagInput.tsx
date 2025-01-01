import { EDITBLOG_TEXT } from '@/app/constants/blog';
import { useState } from 'react';

interface TagInputProps {
  tags: string[];
  setTags: (tags: string[]) => void;
}

export default function TagInput({ tags, setTags }: TagInputProps) {
  const [inputValue, setInputValue] = useState('');
  const [isComposing, setIsComposing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addTag = () => {
    if (inputValue.trim() !== '' && !tags.includes(inputValue.trim())) {
      const updatedTags = [...tags, inputValue.trim()];
      setTags(updatedTags);
      setInputValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '' && !isComposing) {
      e.preventDefault();
      addTag();
    }
  };

  const removeTag = (indexToRemove: number) => {
    const updatedTags = tags.filter((_, index) => index !== indexToRemove);
    setTags(updatedTags);
  };

  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionEnd = () => {
    setIsComposing(false);
  };

  return (
    <div className="w-[1200px] h-20 mt-2.5">
      <div className="flex items-center flex-wrap space-x-2 py-3 border-b border-black/25">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
          placeholder={EDITBLOG_TEXT[1]}
          className="focus:outline-none focus:ring-0 w-[200px] h-8 text-black text-xl ml-[17px] "
        />
        {tags.map((tag, index) => (
          <div
            key={tag}
            className="bg-main-1/20 text-black-0 px-3 py-1 rounded-full cursor-pointer"
            onClick={() => removeTag(index)}
          >
            {tag}
          </div>
        ))}
      </div>
      <p className="text-gray-400 mt-2.5 ml-[17px] mb-2 text-sm">
        {EDITBLOG_TEXT[2]}
      </p>
    </div>
  );
}
