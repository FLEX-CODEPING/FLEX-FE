import { getLandingNews } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const data = await getLandingNews(req);
  return NextResponse.json(data);
}
