import { getStockRank } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const type = searchParams.get('type') || '';
  const data = await getStockRank(req, type);

  return NextResponse.json(data);
}
