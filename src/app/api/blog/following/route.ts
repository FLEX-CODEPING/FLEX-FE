import { getBlogsFollowing } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const filter = searchParams.get('filter');
  const page = searchParams.get('page') || '0';

  const data = await getBlogsFollowing(req, page, filter);
  return NextResponse.json(data);
}
