import { postInquirePrice } from '@/app/service/postRequest';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const stockcode = searchParams.get('stockcode') || '';
  const data = await postInquirePrice(req, stockcode);
  return NextResponse.json(data);
}
