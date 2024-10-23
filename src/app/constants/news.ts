export const NEWS_VIEW_TYPE = ['1일', '3일', '5일', '일주일'];

export const PRESS_TYPES = ['한국경제', '매일경제', '서울경제'];

export const PRESS_TYPES_MAP: Record<string, string> = {
  한국경제: 'hk',
  매일경제: 'mk',
  서울경제: 'sed',
};

export const NEWS_VIEW_TYPE_MAP: Record<string, number> = {
  '1일': 1,
  '3일': 3,
  '5일': 5,
  일주일: 7,
};
