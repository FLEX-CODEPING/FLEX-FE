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
  '우리들의 재테크 정보, 재테크 전용 블로그',
  'FLEX',
  '와 함께',
];

export const MAIN_POST_TAG: MainPostViewTypes[] = ['최신', '인기', '팔로잉'];

export const LANDING_VIEWTYPE_MAP: Record<
  MainPostViewTypes,
  MainPostViewApiTypes
> = {
  최신: 'CREATED_AT',
  인기: 'LIKE_COUNT',
  팔로잉: 'FOLLOWING',
};
