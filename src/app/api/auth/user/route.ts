import { getUsers } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  // const data = await getUsers(req);
  // console.log(data);
  const userData: UserTypes = {
    isSuccess: true,
    code: '200',
    message: 'User data retrieved successfully',
    result: {
      nickname: 'JohnDoe',
      profileImageUrl: 'https://example.com/profile.jpg',
    },
  };

  return NextResponse.json(userData);
}
