import { deleteInterest } from '@/app/service/deleteRequest';
import { getInterestedStocks } from '@/app/service/getRequest';
import { interestStock } from '@/app/service/postRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const data = await getInterestedStocks(req);
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');

  const response = await interestStock(code || '', req);
  return NextResponse.json(response);
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id') || '';

  const response = await deleteInterest(id, req);
  console.log(response,'삭제 후 응답');
  
  return NextResponse.json(response);
}
