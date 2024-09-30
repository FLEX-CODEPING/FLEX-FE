import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const db: any = {};
    const response = await db.collection('article').find().toArray();

    return NextResponse.json(response);
  } catch (e) {
    console.error(e);
  }
}
