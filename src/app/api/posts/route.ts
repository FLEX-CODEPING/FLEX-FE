import { postBlog } from '@/app/service/postRequest';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const body = await req.json();

    const response = await postBlog(body, req);
  
    return NextResponse.json(response);
}
