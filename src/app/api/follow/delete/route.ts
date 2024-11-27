import { deleteFollow } from '@/app/service/deleteRequest';
import { NextResponse } from 'next/server';

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id') || '';

  const response = await deleteFollow(id, req);
  return NextResponse.json(response);
}
