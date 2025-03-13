import { postRefresh } from '@/app/service/postRequest';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const response = await postRefresh(req);
  return NextResponse.json(response);
}
