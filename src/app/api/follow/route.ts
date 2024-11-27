import { postFollow } from '@/app/service/postRequest';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id') || '';

  const response = await postFollow(req, id);

  return NextResponse.json(response);
}
