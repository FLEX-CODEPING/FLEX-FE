import { getNews } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  console.log(searchParams, '요청 url');

  const pressArray = searchParams.getAll('press');
  const period = searchParams.get('period') || '1';
  const keyword = searchParams.get('keyword') || 'DOMESTIC_STOCK';

  console.log(pressArray, 'press');
  console.log(period, ' 기간');
  console.log(keyword, ' keyword');

  const data = await getNews(req, keyword, pressArray, period);
console.log(data, '서버응답');

  return NextResponse.json(data);
}
