import { postBackTest } from '@/app/service/postRequest';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const data = await postBackTest(req, body);
  
  return NextResponse.json(data);
}
