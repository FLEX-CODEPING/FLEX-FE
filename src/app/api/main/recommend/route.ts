import { getLandingRecommend } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const data = await getLandingRecommend(req);

  return NextResponse.json(data);
}
