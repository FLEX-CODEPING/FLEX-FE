import CommentItem from './CommentItem';

interface CommentListProps {
  comments: CommentTypes[];
  currentUserId?: string;
  onUpdateComments: () => void;
}

const CommentList = ({
  comments,
  currentUserId,
  onUpdateComments,
}: CommentListProps) => {
  return (
    <div className="mt-[60px] mb-[100px]">
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          currentUserId={currentUserId}
          onUpdateComments={onUpdateComments}
        />
      ))}
    </div>
  );
};

export default CommentList;
