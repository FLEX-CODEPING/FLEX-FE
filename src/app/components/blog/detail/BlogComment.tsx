'use client';

import { COMMENT } from '@/app/constants/blog';
import { callGet, callPost } from '@/app/utils/callApi';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Icons from '../../common/Icons';
import { deleteIcon, pencilIcon } from '@/app/constants/iconPath';

interface BlogCommentProps {
  postId: number;
}

const BlogComment = ({ postId }: BlogCommentProps) => {
  const [commentInput, setCommentInput] = useState<CommentRequestTypes>();
  const [comments, setComments] = useState<CommentTypes[]>([]);

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

  // 댓글 컴포넌트의 useEffect에서 fetchComments 호출
  useEffect(() => {
    fetchComments(); // 컴포넌트가 처음 렌더링될 때 전체 댓글을 가져옵니다
  }, []);

  const handleAddComment = async () => {
    if (commentInput?.content.trim() !== '') {
      try {
        // 댓글 작성 요청을 보냅니다
        const response = await callPost(`/api/comment/post?id=${postId}`, {
          content: commentInput?.content,
          parentCommentId: commentInput?.parentCommentId,
        });

        if (response.isSuccess) {
          // 댓글 작성 후 입력란 초기화
          setCommentInput({
            content: '',
            parentCommentId: null,
          });

          // 댓글 작성이 성공적으로 완료된 후 전체 댓글을 다시 가져옵니다
          fetchComments();
        }
      } catch (error) {
        console.error('Failed to add comment:', error);
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
        value={commentInput?.content} // commentInput 객체의 content 필드를 value로 설정
        placeholder={COMMENT[1]}
        onChange={(e) =>
          setCommentInput({
            ...commentInput,
            content: e.target.value, // content 필드 업데이트
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
                <div className="flex items-center gap-1 ml-auto">
                  <Icons
                    name={pencilIcon}
                    className="cursor-pointer w-6 h-6 text-gray-600"
                  />
                  <Icons
                    name={deleteIcon}
                    className="cursor-pointer w-6 h-6 text-gray-600"
                  />
                </div>
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
