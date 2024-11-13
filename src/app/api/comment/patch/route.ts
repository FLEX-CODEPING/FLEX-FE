import { patchComment } from '@/app/service/patchRequest';
import { NextResponse } from 'next/server';

export async function PATCH(req: Request) {
  const body = await req.json();
  const { searchParams } = new URL(req.url);
  const postId = searchParams.get('postId');
  const commentId = searchParams.get('commentId');

  if (!postId || !commentId) {
    return NextResponse.json({ isSuccess: false, message: 'Invalid request. postId or commentId missing.' }, { status: 400 });
  }

  const response = await patchComment(body, req, postId, commentId);
  return NextResponse.json(response);
}
