'use client';

import { COMMENT } from '@/app/constants/blog';
import { callDelete, callGet, callPatch, callPost } from '@/app/utils/callApi';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { deleteIcon, pencilIcon } from '@/app/constants/iconPath';
import Icons from '../../common/Icons';

interface BlogCommentProps {
  postId: number;
  currentUserId?: string;
}

const BlogComment = ({ postId, currentUserId }: BlogCommentProps) => {
  const [commentInput, setCommentInput] = useState<CommentRequestTypes>();
  const [comments, setComments] = useState<CommentTypes[]>([]);
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [editedCommentInput, setEditedCommentInput] = useState<string>('');
  const [replyInput, setReplyInput] = useState<string>('');
  const [activeReplyId, setActiveReplyId] = useState<number | null>(null);

  const fetchComments = async () => {
    try {
      const response = await callGet(`/api/comment?id=${postId}`);
      if (response.isSuccess) {
        setComments(response.result);
      }
    } catch (error) {
      console.error('Failed to fetch comments:', error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleAddComment = async () => {
    if (commentInput?.content.trim() !== '') {
      try {
        const response = await callPost(`/api/comment/post?id=${postId}`, {
          content: commentInput?.content,
          parentCommentId: commentInput?.parentCommentId,
        });

        if (response.isSuccess) {
          setCommentInput({
            content: '',
            parentCommentId: null,
          });

          fetchComments();
        }
      } catch (error) {
        console.error('Failed to add comment:', error);
      }
    }
  };

  const handleEditClick = (commentId: number, content: string) => {
    setIsEditing(commentId);
    setEditedCommentInput(content);
  };

  const handleSaveEdit = async (commentId: number) => {
    try {
      console.log('Trying to save edit for comment ID:', commentId);
      const response = await callPatch(
        `/api/comment/patch?postId=${postId}&commentId=${commentId}`,
        {
          content: editedCommentInput,
        },
      );
      console.log(response);
      if (response.isSuccess) {
        console.log('Comment updated successfully');
        setIsEditing(null);
        setEditedCommentInput('');
        fetchComments();
      } else {
        console.error('Failed to update comment:', response);
      }
    } catch (error) {
      console.error('Failed to edit comment:', error);
    }
  };

  const handleDeleteComment = async (commentId: number) => {
    try {
      console.log('Trying to delete comment ID:', commentId);

      const response = await callDelete(
        `/api/comment/delete?postId=${postId}&commentId=${commentId}`,
      );

      if (response && response.isSuccess) {
        console.log('Successfully deleted comment ID:', commentId);
        await fetchComments();
      } else {
        console.error('Failed to delete comment:', response);
      }
    } catch (error) {
      console.error('Failed to delete comment:', error);
    }
  };

  const handleReplyClick = (commentId: number) => {
    if (activeReplyId === commentId) {
      // 이미 활성화된 답글 창이면 닫기
      setActiveReplyId(null);
    } else {
      // 아니면 답글 창 열기
      setActiveReplyId(commentId);
    }
  };

  const handleAddReply = async (parentCommentId: number) => {
    if (replyInput.trim() !== '') {
      console.log(parentCommentId);
      try {
        const response = await callPost(`/api/comment/post?id=${postId}`, {
          content: replyInput,
          parentCommentId,
        });

        if (response.isSuccess) {
          setReplyInput('');
          setActiveReplyId(null);
          fetchComments();
        }
      } catch (error) {
        console.error('Failed to add reply:', error);
      }
    }
  };

  return (
    <div className="w-[880px] mt-5 mb-[100px]">
      <div className="text-xl font-bold mb-2 ml-1">
        {comments.length}
        {COMMENT[0]}
      </div>
      <textarea
        value={commentInput?.content}
        placeholder={COMMENT[1]}
        onChange={(e) =>
          setCommentInput({
            ...commentInput,
            content: e.target.value,
          })
        }
        className="w-full h-[80px] pl-3 pr-2 py-2 text-sm rounded-[10px] border resize-none border-gray-2 outline-none focus:border-main-1 overflow-y-auto hide-scrollbar"
      />
      <div className="flex justify-end mt-3">
        <button
          type="button"
          onClick={handleAddComment}
          className="bg-black-0 text-white px-8 py-2 rounded-lg font-semibold "
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
                  <span className="text-gray-500 text-sm">
                    {comment.timeAgo}
                  </span>
                </div>
                {currentUserId === comment.nickname && (
                  <div className="flex items-center gap-1 ml-auto">
                    <Icons
                      name={pencilIcon}
                      className="cursor-pointer w-6 h-6 text-gray-600"
                      onClick={() =>
                        handleEditClick(comment.id, comment.content)
                      }
                    />
                    <Icons
                      name={deleteIcon}
                      className="cursor-pointer w-6 h-6 text-gray-600"
                      onClick={() => handleDeleteComment(comment.id)}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="py-[18px] font-normal border-b border-gray-3">
              {isEditing === comment.id ? (
                <div>
                  <textarea
                    value={editedCommentInput}
                    onChange={(e) => setEditedCommentInput(e.target.value)}
                    className="w-full h-[60px] pl-3 pr-2 py-2 text-sm rounded-[10px] border resize-none border-gray-2 outline-none focus:border-main-1 overflow-y-auto hide-scrollbar"
                  />
                  <div className="flex justify-end mt-2">
                    <button
                      type="button"
                      onClick={() => handleSaveEdit(comment.id)}
                      className="border border-gray-1 text-black-0 px-4 py-1 rounded-lg font-semibold text-sm"
                    >
                      {COMMENT[3]}
                    </button>
                  </div>
                </div>
              ) : (
                comment.content
              )}
            </div>
            <div className="mt-2">
              <button
                type="button"
                onClick={() => handleReplyClick(comment.id)}
                className="text-black-0/60 text-sm font-semibold"
              >
                {activeReplyId === comment.id ? COMMENT[6] : COMMENT[4]}
              </button>
              {activeReplyId === comment.id && (
                <div className="mt-2">
                  <textarea
                    value={replyInput}
                    onChange={(e) => setReplyInput(e.target.value)}
                    placeholder="답글을 입력하세요"
                    className="w-full h-[60px] pl-3 pr-2 py-2 text-sm rounded-[10px] border resize-none border-gray-2 outline-none focus:border-main-1 overflow-y-auto hide-scrollbar"
                  />
                  <div className="flex justify-end mt-2">
                    <button
                      type="button"
                      onClick={() => handleAddReply(comment.id)}
                      className="border border-gray-1 text-black-0 px-4 py-1 rounded-lg font-semibold text-sm"
                    >
                      {COMMENT[5]}
                    </button>
                  </div>
                </div>
              )}
            </div>
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
                      <span className="font-bold text-md">
                        {child.nickname}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {child.timeAgo}
                      </span>
                    </div>
                    <div className="pl-3 border-b bg-main-1/5 p-3 rounded-b-[10px]">
                      {child.content}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default BlogComment;
