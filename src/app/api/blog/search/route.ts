import { getSearchPost } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get('query') || ''; // 검색어
  const page = parseInt(searchParams.get('page') || '0', 10); // 페이지 번호를 정수로 변환

  const data = await getSearchPost(req, page, query);

  return NextResponse.json(data);
}
