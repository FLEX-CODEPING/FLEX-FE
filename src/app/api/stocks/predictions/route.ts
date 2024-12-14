import { postStockPredictions } from '@/app/service/postRequest';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  const { searchParams } = new URL(req.url);
  const operation = searchParams.get('operation');

  if (!operation) {
    return NextResponse.json(
      { error: 'Operation parameter is missing.' },
      { status: 400 },
    );
  }

  const data = await postStockPredictions(req, body, operation);
  return NextResponse.json(data);
}
