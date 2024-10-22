export const AGE_OPTIONS = ['~20', '21~30', '31~40', '41~50', '50+'];

export const SALARY_OPTIONS = [
  '3천 이하',
  '5천 이하',
  '7천 이하',
  '1억 이하',
  '1억5천 이하',
  '2억 이하',
  '2억 초과',
];

export const NAV_OPTIONS = ['전체', '추천', '팔로잉'];

export const BLOG_NAV_PATH = ['/blog/all', '/blog/recommend', '/blog/followed'];

export const NAV_OPTIONS_WITH_PATH = [
  { nav: '전체', path: '/blog/all' },
  { nav: '추천', path: '/blog/recommend' },
  { nav: '팔로우', path: '/blog/follow' },
];

export const SALARY_RANGE_MAP: Record<string, IncomeTypes> = {
  '3천 이하': 'LESS_3K',
  '5천 이하': 'LESS_5K',
  '7천 이하': 'LESS_8K',
  '1억 이하': 'LESS_100K',
  '1억5천 이하': 'LESS_150K',
  '2억 이하': 'LESS_200K',
  '2억 초과': 'OVER_200K',
};

export const AGE_RANGE_MAP: Record<string, AgeTypes> = {
  '~20': 'AGE_0_20',
  '21~30': 'AGE_21_30',
  '31~40': 'AGE_31_40',
  '41~50': 'AGE_41_50',
  '50+': 'AGE_51_100',
};
