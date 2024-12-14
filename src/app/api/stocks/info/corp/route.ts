import { getCorpInfo } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code') || '005930';

  const data = await getCorpInfo(req, code);
  return NextResponse.json(data);
}
