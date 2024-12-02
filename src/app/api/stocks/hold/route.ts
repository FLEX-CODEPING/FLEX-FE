import { getHoldStock } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const data = await getHoldStock(req);
  return NextResponse.json(data);
}
