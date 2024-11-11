import { MOOK_DAILY_POSTS } from '@/app/data/main';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  //   const viewType = searchParams.get('viewType') || '';
  //   const data = await getLandingPost(req, viewType);

  const posts = {
    isSuccess: true,
    code: 'COMMON200',
    message: '성공',
    result: MOOK_DAILY_POSTS.slice(0, 4),
  };

  return NextResponse.json(posts);
}
