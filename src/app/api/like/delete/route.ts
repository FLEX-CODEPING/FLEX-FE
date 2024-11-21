import { deleteLike } from '@/app/service/deleteRequest';
import { NextResponse } from 'next/server';

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id') || '';

  const response = await deleteLike(id, req);
  return NextResponse.json(response);
}
