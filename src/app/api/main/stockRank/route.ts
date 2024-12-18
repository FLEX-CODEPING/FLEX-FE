import { postStockRank } from '@/app/service/postRequest';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type') || '';

  const data = await postStockRank(body, req, type);
  return NextResponse.json(data);
}
