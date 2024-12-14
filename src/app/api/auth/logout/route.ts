import { postLogout } from '@/app/service/postRequest';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const response = await postLogout(req);
  return NextResponse.json(response);
}
