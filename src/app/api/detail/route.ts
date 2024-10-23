import { getPostDetail } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const id = searchParams.get('id') || '';
  const data = await getPostDetail(req, id);

  return NextResponse.json(data);
}
