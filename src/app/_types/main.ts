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
