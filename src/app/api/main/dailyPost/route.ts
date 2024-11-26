import { getLandingLatest } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const data = await getLandingLatest(req);
  return NextResponse.json(data);
}
