import { postCheckBlogName } from '@/app/service/postRequest';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const response = await postCheckBlogName(body, req);
  console.log(response, '서버응답');

  return NextResponse.json(response);
}
