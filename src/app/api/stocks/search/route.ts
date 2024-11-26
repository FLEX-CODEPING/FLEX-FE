import { getStockSearch } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const keyword = searchParams.get('keyword');

  const data = await getStockSearch(req, keyword || '');
  return NextResponse.json(data);
}
