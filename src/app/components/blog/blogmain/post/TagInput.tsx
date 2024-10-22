import { EDITBLOG_TEXT } from '@/app/constants/blog';
import { useState } from 'react';

export default function TagInput() {
  const [inputValue, setInputValue] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [isComposing, setIsComposing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addTag = () => {
    if (inputValue.trim() !== '' && !tags.includes(inputValue.trim())) {
      setTags((prevTags) => [...prevTags, inputValue.trim()]);
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
    setTags((prevTags) =>
      prevTags.filter((_, index) => index !== indexToRemove),
    );
  };

  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionEnd = () => {
    setIsComposing(false);
  };

  return (
    <div className="w-[1200px] h-[80px] mt-[10px] ">
      <div className="flex items-center flex-wrap space-x-2 py-3 border-b border-black/25">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
          placeholder={EDITBLOG_TEXT[1]}
          className="focus:outline-none focus:ring-0 w-[200px] h-[32px] text-black text-xl ml-[17px] "
        />
        {tags.map((tag, index) => (
          <div
            key={tag}
            className="bg-main-1/20 text-black px-3 py-1 rounded-full cursor-pointer"
            onClick={() => removeTag(index)}
          >
            {tag}
          </div>
        ))}
      </div>
      <p className="text-gray-400 mt-[10px] ml-[17px] mb-2 text-sm">
        {EDITBLOG_TEXT[2]}
      </p>
    </div>
  );
}
