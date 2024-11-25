import { getStockDetail } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');
  const date = searchParams.get('date');

  const data = await getStockDetail(req, code || '', date || '');
  return NextResponse.json(data);
}
