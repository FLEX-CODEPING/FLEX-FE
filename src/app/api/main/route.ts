import { deleteMain } from '@/app/service/deleteRequest';
import { getMain } from '@/app/service/getRequest';
import { patchMain } from '@/app/service/patchRequest';
import { postMain } from '@/app/service/postRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const data = await getMain(req);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('id') || '';

  try {
    const body = await req.json();
    const data = await postMain(body, req);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}

export async function PATCH(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const particulars = searchParams.get('particulars') || '';

    const body = await req.json();
    const data = await patchMain(body, req);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { postId: string } },
): Promise<NextResponse> {
  try {
    const { postId } = params;
    const data = await deleteMain(postId, req);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
