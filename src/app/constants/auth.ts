export const AUTH_TITLE = '회원가입';

export const AUTH_BTN_TEXT = '가입하기';

export const INITIAL_SIGNUP_DATA: SignUpFormTypes = {
  birth: '2000-01-01',
  nickname: '',
  blogName: '',
  salary: '',
  interestKeywords: [],
  socialId: 0,
};

export const BIRTH = ['생년월일', '본인의 생년월일을 기입해주세요'];

export const BIRTH_DATE = 'YYYY. MM. DD';
export const BIRTH_GUIDE = '';

export const NICKNAME_TEXT = [
  '닉네임',
  '홍길동',
  '한글, 영문, 숫자로 구성된 2~8글자의 닉네임을 작성해주세요',
];

export const BLOGNAME_TEXT = [
  '내 블로그 이름',
  '홍길동의 블로그',
  '한글, 영문, 숫자로 구성된 2~8글자의블로그 이름을 작성해주세요',
];

export const INCOME_TITLE = '수입';

export const INCOME_RANGE = [
  '3000 이하',
  '5000 이하',
  '7500 이하',
  '1억 이하',
  '1억5천 이하',
  '2억 이하',
  '2억 초과',
];

export const INCOME_RANGE_MAP: Record<string, IncomeTypes> = {
  '3000 이하': 'LESS_3K',
  '5000 이하': 'LESS_5K',
  '7500 이하': 'LESS_8K',
  '1억 이하': 'LESS_100K',
  '1억5천 이하': 'LESS_150K',
  '2억 이하': 'LESS_200K',
  '2억 초과': 'OVER_200K',
};

export const INTEREST_TITLE = '내 관심사';

export const INTEREST_LIST = [
  '국내주식',
  '해외주식',
  '크립토',
  '선물',
  'ETF',
  '정치',
  '경제',
  '환율',
  '부동산',
  '지수',
];

export const INTEREST_MAP: Record<string, InterestTypes> = {
  국내주식: 'DOMESTIC_STOCK',
  해외주식: 'FOREIGN_STOCK',
  크립토: 'CRYPTO',
  선물: 'FUTURES',
  ETF: 'ETF',
  정치: 'POLITICS',
  경제: 'ECONOMY',
  환율: 'EXCHANGE_RATE',
  부동산: 'REAL_ESTATE',
  지수: 'INDEX',
};

export const COMPLETE_TITLE = '회원가입 완료';

export const COMPLETE_TEXT = [
  '님, 환영해요!',
  '를 지금 바로 이용해보세요',
  '시작하기',
];

export const COMPLETE_RECOMMEND_T = [
  '블로그로 이동',
  '주가예측으로 이동',
  '뉴스요약으로 이동',
];

export const COMPLETE_RECOMMEND_D = [
  '다른 사람들은 어떻게 재테크 관리를 할까?',
  '내 주식의 가격은 오를까, 내릴까?',
  '오늘은 세계에 어떤 소식이 있었을까?',
];

export const COMPLETE_RECOMMEND_IMG = [
  'complete1.png',
  'complete2.png',
  'complete3.png',
];

export const RECOMMEND_PATH = ['/blog', '/predict', 'summarize'];

export const CHECK_STATUS_TEXT: BlogNameCheckTypes = {
  text: '블로그 이름 중복체크를 진행해주세요',
  textColor: 'black',
};

export const CHECK_STATUS = [
  '사용 가능한 블로그 이름입니다',
  '중복된 블로그 이름입니다',
];
