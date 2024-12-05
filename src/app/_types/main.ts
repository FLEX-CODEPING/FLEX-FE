type MainPostViewTypes = '최신' | '인기' | '팔로잉';

type MainPostViewApiTypes = 'CREATED_AT' | 'LIKE_COUNT' | 'FOLLOWING';

interface LandingPostTypes {
  id: number;
  userId: number;
  nickname:string;
  title: string;
  content: string;
  tags: string;
  createdAt: string;
  updatedAt: string;
  imageUrls: string[];
  likeCount: number;
}

interface MainPostTypes {
  id: number;
  userId: number;
  nickname: string;
  profileImageUrl: string;
  title: string;
  content: string;
  tags: string;
  createdAt: string;
  updatedAt: string;
  imageUrls: string[];
  likeCount: number;
}

interface DailyArticleTypes {
  title: string;
  content: string;
  media: string;
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

interface PopularPostTypes {
  title: string;
  likeCount: number;
  nickname: string;
}

interface RecommendPostTypes {
  id: number;
  userId: number;
  title: string;
  tags: string;
  imageUrls: string[];
  likeCount: number;
  commonInterests: string[];
}

interface RecommendPostResultTypes {
  content: RecommendPostTypes[];
  myInterests: string[];
}
