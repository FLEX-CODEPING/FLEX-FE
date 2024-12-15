import { getPresignedUrl } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const bucketName = searchParams.get('bucketName') || '';
  const fileName = searchParams.get('fileName') || '';

  const data = await getPresignedUrl(req, bucketName, fileName);
  return NextResponse.json(data);
}
