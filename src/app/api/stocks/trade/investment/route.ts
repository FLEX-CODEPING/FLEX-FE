import { getInvestmentRecord } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code') || '';
  const size = searchParams.get('size') || '20';
  const page = searchParams.get('page') || '1';
  const property = searchParams.get('property') || 'createdAt';
  const direction = searchParams.get('direction') || 'desc';

  const data = await getInvestmentRecord(
    req,
    code,
    size,
    page,
    property,
    direction,
  );
  return NextResponse.json(data);
}
