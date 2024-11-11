import { mockPosts } from '@/app/constants/mypage';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  // const data = await getMyPosts(req);
  // console.log(data);
  const MyAccountData: MyPostTypes = {
    isSuccess: true,
    code: 'COMMON200',
    message: '마이페이지 조회 성공',
    result: {
      blogName: '민규의 블로그',
      nickname: 'nakdo',
      profileImageUrl: '/images/profile.png',
      followingCount: 124,
      followerCount: 101,
      posts: mockPosts,
    },
  };

  return NextResponse.json(MyAccountData);
}
