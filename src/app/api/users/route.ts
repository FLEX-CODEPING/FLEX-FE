import { patchProfile } from '@/app/service/patchRequest';
import { NextResponse } from 'next/server';

export async function PATCH(req: Request) {
  const body = await req.json();

  const response = await patchProfile(body, req);

  return NextResponse.json(response);
}
