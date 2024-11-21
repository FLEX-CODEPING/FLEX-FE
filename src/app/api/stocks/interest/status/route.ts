import { getInterestedStatus } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code') || '';
  const data = await getInterestedStatus(req, code);
  return NextResponse.json(data);
}
