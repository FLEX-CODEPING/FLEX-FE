import { postMinData } from '@/app/service/postRequest';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await postMinData(req);
  return NextResponse.json(data);
}
