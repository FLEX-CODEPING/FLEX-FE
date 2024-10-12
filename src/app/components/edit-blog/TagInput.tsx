import { EDITBLOG_TEXT } from '@/app/constants/blog';
import { useState } from 'react';

export default function TagInput() {
  const [inputValue, setInputValue] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();
      addTag();
    }
  };

  const addTag = () => {
    if (inputValue.trim() !== '' && !tags.includes(inputValue.trim())) {
      setTags((prevTags) => [...prevTags, inputValue.trim()]);
      setInputValue('');
    }
  };

  const removeTag = (indexToRemove: number) => {
    setTags((prevTags) =>
      prevTags.filter((_, index) => index !== indexToRemove),
    );
  };

  return (
    <div className="w-[1200px] h-[80px] mt-[10px] ">
      <div className="flex items-center flex-wrap space-x-2 py-2 border-b border-black/25">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="bg-gray-200 text-main-1 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-300"
            onClick={() => removeTag(index)}
          >
            {tag}
          </div>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={EDITBLOG_TEXT[1]}
          className="focus:outline-none focus:ring-0 w-[200px] text-black text-xl ml-[17px]"
        />
      </div>
      <p className="text-gray-400 mt-3 ml-[17px] text-sm">{EDITBLOG_TEXT[2]}</p>
    </div>
  );
}
