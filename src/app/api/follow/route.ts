import { postFollow } from '@/app/service/postRequest';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json(
        { isSuccess: false, message: 'userId가 필요합니다.' },
        { status: 400 },
      );
    }

    const response = await postFollow(req, userId);
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { isSuccess: false, message: '요청 처리 중 오류 발생', error },
      { status: 500 },
    );
  }
}
