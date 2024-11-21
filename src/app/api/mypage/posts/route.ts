import { getMyPosts } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const blogName = searchParams.get('blogName');

  if (!blogName) {
    return NextResponse.json(
      { isSuccess: false, message: 'blogName is required' },
      { status: 400 },
    );
  }

  const data = await getMyPosts(req, blogName);
  return NextResponse.json(data);
}
