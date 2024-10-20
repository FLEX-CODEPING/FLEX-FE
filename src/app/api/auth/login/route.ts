import { postLogin } from '@/app/service/postRequest';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  const response = await postLogin(body, req);
  console.log(response, '서버응답 res');

  const data = await response.json();
  console.log(response, '서버응답, data');

  return NextResponse.json(data);
}
