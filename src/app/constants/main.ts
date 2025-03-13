export const TITLE = 'FLEX';

export const CATCHPHRASE = '재테크가 낯선 당신의 첫 재테크 친구';

export const MAIN_FEAT = [
  '모의 투자',
  '재테크 블로그 조회',
  '뉴스 요약',
  '주가 예측',
];

export const MAIN_FEAT_DETAIL = [
  '가상의 자금으로 나만의 모의투자 연습',
  '다양한 재테크 팁과 전략을 한눈에 확인',
  'AI 기반 키워드 관련 경제 뉴스를 요약',
  'AI 기반 실시간 주가 예측 정보를 제공',
];

export const MAIN_FEAT_IMG = [
  'coin.png',
  'cursor.png',
  'mail.png',
  'schedule.png',
];

export const CATCH_PHRASE = [
  '나만을 위한 재테크 전용 블로그',
  'FLEX',
  '와 함께',
];

export const MAIN_LEFT_ETC = ['다른 뉴스 보러가기', '블로그 구경가기'];

export const RANKING_COLOR = ['bg-[#FEEAB4]', 'bg-[#e5e5e5]', 'bg-[#e5cbbc]'];

export const MAIN_CONTENTS_TITLE = [
  '최신 게시물',
  '최신 뉴스',
  '주식 차트',
  '️인기 게시물',
  '추천 게시물',
  '모의투자 랭킹',
];

export const MAIN_MYINFO = [
  '로그인 후 ',
  'FLEX ',
  '의  다양한 기능들을 이용해보세요!',
];

export const KAKAO_BTN_TEXT = ['카카오 로그인'];

export const MAIN_MYINFO_TEXT = [
  '팔로워',
  '내 블로그',
  '모의투자 수익',
  '누적 조회수',
];

export const MAIN_FOOTER_INFO = [
  'Home',
  'About',
  'News',
  'QnA',
  'Organization',
];

export const FOOTER_ETC_TEXT = ['copyright@2024', 'contributors'];

export const CONTRIBUTORS = [
  'Dana',
  'J',
  'Nako',
  'Wong',
  'Hwan',
  'Woong',
  'Kyu',
];

export const RECOMMEND_LOGIN = [
  '로그인 후 오직 나만을 위한 게시물들을 만나보세요!',
];

export const NONE_MAIN_INFO = [
  '해당 컨텐츠가 존재하지 않습니다',
  '새로고침 또는 잠시후 시도해보세요',
];

export const STOCK_RANKING_TYPE: StockRankingTypes[] = ['거래량', '등락률'];

export const RANK_TYPE_MAP: Record<StockRankingTypes, string> = {
  등락률: 'fluctuation',
  거래량: 'volume',
};

export const VOLUME_PARAMS = {
  belongCode: '0',
  classCode: '1',
  priceMax: '',
  priceMin: '',
  stockCode: '0001',
  volCount: '',
};

export const FLUCTUATION_PARAMS = {
  marketCode: '0001',
  fluctuationRateMin: '',
  fluctuationRateMax: '',
  sortOrder: '4',
  resultLimit: '0',
  priceType: '1',
  priceMin: '',
  priceMax: '',
  volumeThreshold: '',
  targetType: '0',
  excludeType: '0',
  categoryType: '0',
};
