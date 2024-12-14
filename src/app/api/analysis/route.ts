import { getAnalysis } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const data = await getAnalysis(req);
  console.log(data);

  return NextResponse.json(data);
}
