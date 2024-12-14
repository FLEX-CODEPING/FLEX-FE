import { deleteFollow } from '@/app/service/deleteBodyReq';
import { NextResponse } from 'next/server';

export async function DELETE(req: Request) {
  try {
    const { userId } = await req.json(); // 객체 구조 분해를 사용하여 userId 추출

    if (!userId) {
      return NextResponse.json(
        { isSuccess: false, message: 'userId가 필요합니다.' },
        { status: 400 },
      );
    }

    const response = await deleteFollow(req, userId); // 서버 요청
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { isSuccess: false, message: '요청 처리 중 오류 발생', error },
      { status: 500 },
    );
  }
}
