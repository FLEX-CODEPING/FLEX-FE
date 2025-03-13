import { getNews } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const pressArray = searchParams.getAll('press');
  const period = searchParams.get('period') || '1';
  const keyword = searchParams.get('keyword') || 'DOMESTIC_STOCK';

  const data = await getNews(req, keyword, pressArray, period);

  return NextResponse.json(data);
}
