import { getMyPosts } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const data = await getMyPosts(req);
  console.log(data);
  
  
  return NextResponse.json(data);
};

