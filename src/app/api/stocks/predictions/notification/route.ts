import { postStockNotification } from '@/app/service/postRequest';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  const { searchParams } = new URL(req.url);
  const operation = searchParams.get('operation');

  if (!operation) {
    return NextResponse.json(
      { success: false, message: 'Operation is required' },
      { status: 400 },
    );
  }

  try {
    const data = await postStockNotification(req, body, operation);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error during stock notification request:', error);
    return NextResponse.json(
      { success: false, message: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
