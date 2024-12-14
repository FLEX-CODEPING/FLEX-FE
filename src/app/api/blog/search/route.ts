import { getSearchPost } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get('query') || ''; // 검색어
  const page = searchParams.get('page') || '1'; // 페이지 번호

  const data = await getSearchPost(req, query);

  return NextResponse.json(data);
}
