import { getLandingPost } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const viewType = searchParams.get('viewType') || '';
  const data = await getLandingPost(req, viewType);

  return NextResponse.json(data);
}
