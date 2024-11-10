import { RECOMMEND_RESULT } from '@/app/data/main';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  //   const data = await getRecommendPost(req);

  const recommendResult = {
    isSuccess: true,
    code: 'SUCCESS',
    message: '성공',
    result: RECOMMEND_RESULT,
  };

  return NextResponse.json(recommendResult);
}
