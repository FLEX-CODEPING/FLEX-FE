import { postStockFinancial } from '@/app/service/postRequest';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');
  const classCode = searchParams.get('classCode');

  const data = await postStockFinancial(req, code || '', classCode || '');
  return NextResponse.json(data);
}
