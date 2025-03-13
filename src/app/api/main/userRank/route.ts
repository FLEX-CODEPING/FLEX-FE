import { getUserRanking } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const data = await getUserRanking(req);

  return NextResponse.json(data);
}
