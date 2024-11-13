import { postComment } from '@/app/service/postRequest';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id') || '';

  if (!body.parentCommentId && !body.content) {
    return NextResponse.json({
      isSuccess: false,
      message: 'parentCommentId or content is missing.',
    });
  }

  const response = await postComment(body, req, id);
  return NextResponse.json(response);
}
