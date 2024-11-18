import { useState } from 'react';
import { callDelete, callPatch } from '@/app/utils/callApi';
import Image from 'next/image';
import { deleteIcon, pencilIcon } from '@/app/constants/iconPath';
import Icons from '../../common/Icons';
import CommentInput from './CommentInput';

interface CommentItemProps {
  comment: CommentTypes;
  currentUserId?: string;
  onUpdateComments: () => void;
}

const CommentItem = ({
  comment,
  currentUserId,
  onUpdateComments,
}: CommentItemProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedCommentInput, setEditedCommentInput] = useState<string>(
    comment.content,
  );
  const [replyOpen, setReplyOpen] = useState<boolean>(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = async () => {
    try {
      const response = await callPatch(
        `/api/comment/patch?postId=${comment.postId}&commentId=${comment.id}`,
        {
          content: editedCommentInput,
        },
      );
      if (response.isSuccess) {
        setIsEditing(false);
        onUpdateComments();
      }
    } catch (error) {
      console.error('Failed to edit comment:', error);
    }
  };

  const handleDeleteComment = async () => {
    try {
      const response = await callDelete(
        `/api/comment/delete?postId=${comment.postId}&commentId=${comment.id}`,
      );
      if (response && response.isSuccess) {
        onUpdateComments();
      }
    } catch (error) {
      console.error('Failed to delete comment:', error);
    }
  };

  return (
    <div className="mb-10">
      <div className="flex items-start gap-4">
        <div className="flex justify-between w-full">
          <div className="inline-flex items-center gap-3">
            <Image
              src={
                comment.profileImageUrl ||
                'https://bff-images.bemypet.kr/media/medias/all/993-image_picker152967371293908462.jpg'
              }
              alt="프로필 이미지"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="font-bold text-lg">{comment.nickname}</span>
            <span className="text-gray-500 text-sm">{comment.timeAgo}</span>
          </div>
          {currentUserId === comment.nickname && (
            <div className="flex items-center gap-1 ml-auto">
              <Icons
                name={pencilIcon}
                className="cursor-pointer w-6 h-6 text-gray-600"
                onClick={handleEditClick}
              />
              <Icons
                name={deleteIcon}
                className="cursor-pointer w-6 h-6 text-gray-600"
                onClick={handleDeleteComment}
              />
            </div>
          )}
        </div>
      </div>
      <div className="py-[18px] font-normal border-b border-gray-3">
        {isEditing ? (
          <div>
            <textarea
              value={editedCommentInput}
              onChange={(e) => setEditedCommentInput(e.target.value)}
              className="w-full h-[60px] pl-3 pr-2 py-2 text-sm rounded-[10px] border resize-none border-gray-2 outline-none focus:border-main-1 overflow-y-auto hide-scrollbar"
            />
            <div className="flex justify-end mt-2">
              <button
                type="button"
                onClick={handleSaveEdit}
                className="border border-gray-1 text-black-0 px-4 py-1 rounded-lg font-semibold text-sm"
              >
                저장
              </button>
            </div>
          </div>
        ) : (
          comment.content
        )}
      </div>
      <button
        type="button"
        onClick={() => setReplyOpen(!replyOpen)}
        className="text-black-0/60 text-sm font-semibold"
      >
        답글 달기
      </button>
      {replyOpen && (
        <CommentInput
          postId={comment.postId}
          parentCommentId={comment.id}
          onAddComment={onUpdateComments}
        />
      )}
      {comment.childComments.length > 0 && (
        <div className="ml-8 mt-[36px] ">
          {comment.childComments.map((child) => (
            <div key={child.id} className="mb-6 ">
              <div className="flex items-start gap-3 bg-main-1/5 p-3 rounded-t-[10px]">
                <Image
                  src={
                    child.profileImageUrl ||
                    'https://bff-images.bemypet.kr/media/medias/all/993-image_picker152967371293908462.jpg'
                  }
                  alt="프로필 이미지"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="font-bold text-md">{child.nickname}</span>
                <span className="text-gray-500 text-sm">{child.timeAgo}</span>
              </div>
              <div className="pl-3 border-b bg-main-1/5 p-3 rounded-b-[10px]">
                {child.content}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentItem;
