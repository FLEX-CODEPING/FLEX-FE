'use client';

import { COMMENT } from '@/app/constants/blog';
import { useState } from 'react';

interface Comment {
  id: number;
  author: string;
  date: string;
  content: string;
}

const BlogComment = () => {
  const [commentInput, setCommentInput] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentInput(e.target.value);
  };

  const handleAddComment = () => {
    if (commentInput.trim() !== '') {
      const newComment: Comment = {
        id: comments.length + 1,
        author: '낙도핑',
        date: new Date().toISOString().slice(0, 10),
        content: commentInput,
      };
      setComments([...comments, newComment]);
      setCommentInput('');
    }
  };

  return (
    <div className="w-[880px] mt-5 mb-[100px]">
      <div className="text-xl font-bold mb-2 ml-1">
        {comments.length}
        {COMMENT[0]}
      </div>
      <textarea
        value={commentInput}
        placeholder={COMMENT[1]}
        onChange={(e) => handleChange(e)}
        className="w-full h-[80px] pl-3 pt-2 pr-2 pb-2 text-sm rounded-[10px] border resize-none border-gray-2 outline-none focus:border-main-1"
      />
      <div className="flex justify-end mt-3">
        <button
          type="button"
          onClick={handleAddComment}
          className="bg-black text-white px-8 py-2 rounded-lg font-semibold "
        >
          {COMMENT[2]}
        </button>
      </div>

      <div className="mt-[60px] mb-[100px]">
        {comments.map((comment) => (
          <div key={comment.id} className="mb-10">
            <div className="flex items-start gap-4">
              <div className="flex justify-between w-full">
                <div className="inline-flex items-center gap-3">
                  <img
                    src="https://bff-images.bemypet.kr/media/medias/all/993-image_picker152967371293908462.jpg"
                    alt="프로필 이미지"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="font-bold text-lg">{comment.author}</span>
                </div>
                <span className="text-gray-500 text-sm flex items-end">{comment.date}</span>
              </div>
            </div>
            <div className="py-[18px] font-normal border-b border-gray-3">
              {comment.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BlogComment;
