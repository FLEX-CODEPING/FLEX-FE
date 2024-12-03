import { getHoldStock } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const holdStatus = searchParams.get('holdStatus') || 'HOLDING';
  const page = searchParams.get('page') || '1';
  const size = searchParams.get('size') || '20';
  const property = searchParams.get('property') || 'createdAt';
  const direction = searchParams.get('direction') || 'desc';
  const data = await getHoldStock(
    req,
    holdStatus,
    page,
    size,
    property,
    direction,
  );
  return NextResponse.json(data);
}
