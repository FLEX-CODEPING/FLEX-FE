import { COMMENT } from '@/app/constants/blog';
import { callGet } from '@/app/utils/callApi';
import { useEffect, useState } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

interface BlogCommentProps {
  postId: string;
  currentUserId?: string;
}

const BlogComment = ({ postId, currentUserId }: BlogCommentProps) => {
  const [comments, setComments] = useState<CommentTypes[]>([]);

  const fetchComments = async () => {
    try {
      const response = await callGet(`/api/comment?id=${postId}`);
      if (response.isSuccess) {
        setComments(response.result);
      }
    } catch (error) {
      console.error('댓글 갱신 실패:', error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  return (
    <div className="w-[880px] mt-5 mb-[100px]">
      <div className="text-xl font-bold mb-2 ml-1">
        {comments.length} {COMMENT[0]}
      </div>
      <CommentInput postId={postId} onAddComment={fetchComments} />
      <CommentList
        comments={comments}
        currentUserId={currentUserId}
        onUpdateComments={fetchComments}
      />
    </div>
  );
};

export default BlogComment;
