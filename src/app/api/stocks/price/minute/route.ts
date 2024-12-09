import { postMinData } from '@/app/service/postRequest';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const data = await postMinData(req, body);
  return NextResponse.json(data);
}
