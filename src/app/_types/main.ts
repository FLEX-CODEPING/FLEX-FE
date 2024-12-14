type MainPostViewTypes = '최신' | '인기' | '팔로잉';

type MainPostViewApiTypes = 'CREATED_AT' | 'LIKE_COUNT' | 'FOLLOWING';

interface LandingPostTypes {
  id: string;
  userId: string;
  nickname: string;
  profileImageUrl: string | null;
  title: string;
  content: string;
  tags: string; // 콤마로 구분된 태그 문자열
  createdAt: string; // ISO 형식 날짜
  updatedAt: string; // ISO 형식 날짜
  imageUrls: string[]; // 이미지 URL 배열
  likeCount: number;
  viewCount: number;
  thumbnailUrl: string | null;
}

interface MainPostTypes {
  id: string;
  userId: string;
  nickname: string;
  profileImageUrl: string | null;
  title: string;
  content: string;
  tags: string; // 콤마로 구분된 태그 문자열
  createdAt: string; // ISO 형식 날짜
  updatedAt: string; // ISO 형식 날짜
  imageUrls: string[]; // 이미지 URL 배열
  likeCount: number;
  viewCount: number;
  thumbnailUrl: string | null;
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
