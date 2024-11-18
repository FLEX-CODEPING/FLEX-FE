import { getBlogsMain } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const age = searchParams.get('age');
  const salary = searchParams.get('salary');
  const page = searchParams.get('page') || '0';
  const filter = searchParams.get('filter') || '0';
  const data = await getBlogsMain(req, page, salary, age, filter);

  return NextResponse.json(data);
}
