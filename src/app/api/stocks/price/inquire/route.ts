import { postDailyPrice } from '@/app/service/postRequest';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const stock_code = searchParams.get('stock_code');
  const data = await postDailyPrice(req, stock_code);
  return NextResponse.json(data);
}
