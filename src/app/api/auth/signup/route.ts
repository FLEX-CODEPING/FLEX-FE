import { postSignUp } from '@/app/service/postRequest';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body, '요청 바디');

  const response = await postSignUp(body, req);

  return NextResponse.json(response);
}
