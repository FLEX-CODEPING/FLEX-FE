import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code') || '';

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/api/auth/login/${code}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      },
    );

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error();
  }
}
