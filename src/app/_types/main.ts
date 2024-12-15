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
  date: string;
  title: string;
  content: string;
  url: string;
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
  id: string;
  userId: string;
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

type StockRankingTypes = '거래량' | '등락률';

interface VolumeRankTypes {
  corpName: string;
  stockCode: string;
  ranking: string;
  curPrice: string;
  priceChangeSign: string;
  priceChange: string;
  priceChangeRate: string;
  accTradingVolume: string;
  preDayTradingVolume: string;
  listedShares: string;
  avgTradingVolume: string;
  prevPeriodPriceChangeRate: string;
  volIncreaseRate: string;
  volTurnoverRate: string;
  periodVolTurnoverRate: string;
  avgTradingValue: string;
  accTradingValue: string;
}

interface FluctuationRankTypes {
  rank: string;
  stockName: string;
  cumulativeVolume: string;
  highPrice: string;
  highPriceTime: string;
  highPriceDate: string;
  lowPrice: string;
  lowPriceTime: string;
  lowPriceDate: string;
  currentPriceToLowRate: string;
  currentPriceToClosingRate: string;
  consecutiveRisingDays: string;
  currentPriceToHighRate: string;
  consecutiveFallingDays: string;
  priceChangeFromOpenSign: string;
  priceChangeFromOpen: string;
  priceChangeFromOpenRate: string;
  periodPriceChange: string;
  periodPriceChangeRate: string;
}

interface UserBalanceTypes {
  balance: number;
  totalProfit: number;
  recentTransactionAt: string;
}
