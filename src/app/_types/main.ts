type MainPostViewTypes = '최신' | '인기' | '팔로잉';

type MainPostViewApiTypes = 'CREATED_AT' | 'LIKE_COUNT' | 'FOLLOWING';

interface LandingPostTypes {
  id: number;
  userId: number;
  title: string;
  content: string;
  tags: string;
  createdAt: string;
  updatedAt: string;
  imageUrls: string[];
  likeCount: 0;
}

interface DailyArticleTypes {
  title: string;
  content: string;
  media: string;
  thumbnail: string;
}

interface RankingTypes {
  title: string;
  profit: number;
  thumbnail: string;
}

interface UserResultTypes {
  nickname: string;
  profileImageUrl: string;
}
interface UserTypes {
  isSuccess: boolean;
  code: string;
  message: string;
  result: UserResultTypes;
}
