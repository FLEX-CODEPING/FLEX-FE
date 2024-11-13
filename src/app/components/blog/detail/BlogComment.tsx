'use client';

import { COMMENT } from '@/app/constants/blog';
import { callGet, callPatch, callPost } from '@/app/utils/callApi';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Icons from '../../common/Icons';
import { deleteIcon, pencilIcon } from '@/app/constants/iconPath';

interface BlogCommentProps {
  postId: number;
  currentUserId?: string;
}

const BlogComment = ({ postId, currentUserId }: BlogCommentProps) => {
  const [commentInput, setCommentInput] = useState<CommentRequestTypes>();
  const [comments, setComments] = useState<CommentTypes[]>([]);
  const [isEditing, setIsEditing] = useState<number | null>(null); 
  const [editedCommentInput, setEditedCommentInput] = useState<string>(''); 

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
      console.log("Trying to save edit for comment ID:", commentId);
      const response = await callPatch(`/api/comment/patch?postId=${postId}&commentId=${commentId}`, {
        content: editedCommentInput,
      });
      console.log(response)
      if (response.isSuccess) {
        console.log("Comment updated successfully");
        setIsEditing(null);
        setEditedCommentInput('');
        fetchComments();
      }else {
        console.error("Failed to update comment:", response);
      }
    } catch (error) {
      console.error('Failed to edit comment:', error);
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
                  <span className="text-gray-500 text-sm">{comment.timeAgo}</span>
                </div>
                {currentUserId === comment.nickname && (
                  <div className="flex items-center gap-1 ml-auto">
                    <Icons
                      name={pencilIcon}
                      className="cursor-pointer w-6 h-6 text-gray-600"
                      onClick={() => handleEditClick(comment.id, comment.content)}
                    />
                    <Icons
                      name={deleteIcon}
                      className="cursor-pointer w-6 h-6 text-gray-600"
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
                      수정 완료
                    </button>
                  </div>
                </div>
              ) : (
                comment.content
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BlogComment;
