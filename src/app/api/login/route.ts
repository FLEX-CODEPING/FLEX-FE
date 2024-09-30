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

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const db: any = {};
    const collection = db.collection('article');

    const result = await collection.insertOne(body);

    return NextResponse.json(
      { message: 'Article created successfully', data: result },
      { status: 201 },
    );
  } catch (e) {
    console.error('Error creating article:', e);
    return NextResponse.json(
      { message: 'Failed to create article' },
      { status: 500 },
    );
  }
}
