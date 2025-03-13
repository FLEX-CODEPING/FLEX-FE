export const EDITBLOG_TEXT = [
  '제목을 입력해주세요',
  '태그를 입력해주세요',
  '쉼표 혹은 엔터를 입력하여 태그를 등록할 수 있습니다. 등록된 태그를 클릭하면 삭제됩니다',
];

export const TOOLBAR_ITEMS = [
  ['heading', 'bold', 'italic', 'strike'],
  ['ul', 'ol'],
  ['code', 'codeblock'],
  ['table'],
  ['link'],
  ['image'],
  ['scrollSync'],
];

export const COMMENT = [
  '개의 댓글',
  '댓글을 작성하세요',
  '댓글 작성',
  '수정 완료',
  '답글 달기',
  '답글 작성',
  '답글 취소',
];

export const MODAL_TEXT = [
  '작성한 내용을 저장하시겠습니까?',
  '게시물은 언제든 수정 가능합니다.',
  '닫기',
  '저장',
  '성공적으로 저장되었습니다.',
];

export const POST_BTN_TEXT = ['뒤로가기', '출간하기'];

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

export const NAV_OPTIONS: BlogViewType[] = ['전체', '추천', '팔로잉'];

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

export const FILTER_OPTIONS = ['최신순', '좋아요순'];

export const FILTER_OPTIONS_MAP: Record<BlogFilterType, ApiFilterType> = {
  최신순: 'CREATED_AT',
  좋아요순: 'LIKE_COUNT',
};

export const BLOG_FOLLOWING_TEXT = [
  '현재 ',
  '포함',
  '명의 글들을 조회중이에요!',
];
