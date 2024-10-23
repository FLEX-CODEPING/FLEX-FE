import { getBlogsMain } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const age = searchParams.get('age');
  const salary = searchParams.get('salary');
  const data = await getBlogsMain(req, salary, age);

  return NextResponse.json(data);
}
