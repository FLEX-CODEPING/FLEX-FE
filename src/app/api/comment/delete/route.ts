import { deleteComment } from '@/app/service/deleteRequest';
import { NextResponse } from 'next/server';

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const postId = searchParams.get('postId');
  const commentId = searchParams.get('commentId');

  if (!postId || !commentId) {
    return NextResponse.json({ isSuccess: false, message: 'Invalid request. postId or commentId missing.' }, { status: 400 });
  }

  const response = await deleteComment(req, postId, commentId);
  return NextResponse.json(response);
}