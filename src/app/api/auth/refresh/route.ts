import { postRefresh } from '@/app/service/postRequest';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const response = await postRefresh(req);
  console.log(response, ' 리ㅍ프레시 서버응답');

  return NextResponse.json(response);
}
