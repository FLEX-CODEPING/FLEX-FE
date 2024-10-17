'use client';

import { useState } from 'react';
import Input from '../../common/Input';

interface Comment {
  id: number;
  author: string;
  date: string;
  content: string;
}

const BlogComment = () => {
  const [commentInput, setCommentInput] = useState(''); // 댓글 입력 상태
  const [comments, setComments] = useState<Comment[]>([]); // 댓글 목록 상태

  // 댓글 입력 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentInput(e.target.value);
  };

  // 댓글 추가 핸들러
  const handleAddComment = () => {
    if (commentInput.trim() !== '') {
      
      const newComment: Comment = {
        id: comments.length + 1,
        author: '낙도핑', 
        date: new Date().toISOString().slice(0, 10), // 현재 날짜 (간단히 지정)
        content: commentInput,
      };
      setComments([...comments, newComment]);
      setCommentInput(''); // 입력 필드 초기화
    }
  };

  return (
    <div className="w-[880px] mt-5 mb-[100px]">
      <div className="text-xl font-bold ">{comments.length}개의 댓글</div>
      <div className="flex items-center gap-4 mt-4">
        <Input
          type="comment"
          placeholder="댓글을 작성"
          textValue={commentInput}
          onChange={handleChange}
        />
        <button
          onClick={handleAddComment}
          className="bg-main-1 text-white px-4 py-2 rounded-lg font-semibold"
        >
          작성
        </button>
      </div>

      {/* 댓글 목록 */}
      <div className="mt-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex items-start gap-4 mb-4">
            {/* 작성자 이미지 (임시 이미지) */}
            <img
              src="https://via.placeholder.com/40"
              alt="프로필 이미지"
              className="w-10 h-10 rounded-full"
            />
            {/* 댓글 내용 */}
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold">{comment.author}</span>
                <span className="text-gray-500 text-sm">{comment.date}</span>
              </div>
              <p className="mt-1">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BlogComment;
