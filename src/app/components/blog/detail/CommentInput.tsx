import { useState } from 'react';
import { callPost } from '@/app/utils/callApi';
import { COMMENT } from '@/app/constants/blog';

interface CommentInputProps {
  postId: string;
  parentCommentId?: number | null;
  onAddComment: () => void;
}

const CommentInput = ({
  postId,
  parentCommentId = null,
  onAddComment,
}: CommentInputProps) => {
  const [commentInput, setCommentInput] = useState<string>('');

  const handleAddComment = async () => {
    if (commentInput.trim() !== '') {
      try {
        const response = await callPost(`/api/comment/post?id=${postId}`, {
          content: commentInput,
          parentCommentId,
        });
        if (response.isSuccess) {
          setCommentInput('');
          onAddComment();
        } else {
          console.error('댓글 작성 실패:', response);
        }
      } catch (error) {
        console.error('댓글 작성 중 오류:', error);
      }
    }
  };

  return (
    <div>
      <textarea
        value={commentInput}
        placeholder={COMMENT[1]}
        onChange={(e) => setCommentInput(e.target.value)}
        className="w-full h-[80px] pl-3 pr-2 py-2 text-sm rounded-[10px] border resize-none border-gray-2 outline-none focus:border-main-1 overflow-y-auto hide-scrollbar"
      />
      <div className="flex justify-end mt-3">
        <button
          type="button"
          onClick={handleAddComment}
          className="bg-black-0 text-white px-6 py-1 rounded-lg font-semibold"
        >
          {COMMENT[2]}
        </button>
      </div>
    </div>
  );
};

export default CommentInput;
