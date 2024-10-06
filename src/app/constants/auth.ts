export const AUTH_TITLE = '회원가입';

export const AUTH_BTN_TEXT = '가입하기';

export const INITIAL_SIGNUP_DATA: SignUpFormTypes = {
  year: '',
  month: '',
  day: '',
  nickName: '',
  blogName: '',
  income: '',
  interest: [],
};

export const BIRTH = ['생년월일', '연, 월, 일을 모두 기입해주세요'];

export const BIRTH_TYPE = ['year', 'month', 'day'];

export const BIRTH_DATE = ['YYYY', 'MM', 'DD'];

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
  '3000이하',
  '5000이하',
  '7500이하',
  '1억 이하',
  '1.5억 이상',
];

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
