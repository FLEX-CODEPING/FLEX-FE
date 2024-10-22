import { postBlog } from '@/app/service/postReq';
import { NextResponse } from 'next/server';
import { getCookie } from '@/app/utils/setToken';

export async function POST(request: Request) {
  let accessToken = getCookie(request, 'accessToken');
  const content = await request.json();
  try {
    const data = await postBlog(
      content,
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZSI6InVzZXIiLCJ0eXBlIjoiQUNDRVNTIiwiZW1haWwiOiJuYWtkb0BnbWFpbC5jb20iLCJleHAiOjE3Mjk2ODM5Mjl9.Asj_IJYuwnV0ONhPYSItoRycCxqSliSk4zEETzpTncw',
    );

    return NextResponse.json(data);
  } catch (error) {}
}
