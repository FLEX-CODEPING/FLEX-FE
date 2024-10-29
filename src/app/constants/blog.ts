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

export const CONTENT = `주식은 간단하게 말해서 개인이나 단체가 특정 회사에 일정 금액을 투자해주고 그 대가로 정해진 기간마다 투자금에 걸맞은 이득, 예를 들면 투자금에 비례하는 이익을 배당받거나 회사 경영권을 행사할 수 있게 하는 제도입니다.
주식은 흔히 오늘날의 자본주의 시장에서 자본주의의 꽃이라고 불립니다.
그만큼 자본주의 사회에서 없어서는 안될 제도이지만 악용(?) 하게 된다면 그 꽃이 가시가 되어 돌아올 수도 있겠죠.
우리나라의 주식투자 하는 사람의 비율은 10~20%정도라고 알려져 있습니다.
반면 세계 각국의 경우는 미국과 프랑스는 40%, 독일, 영국, 대만은 20%, 일본은 3%의 인구가 주식투자를 하는 것으로 알려져 있습니다.
(일본의 경우는 버블경제의 충격으로 요즘은 주식투자보다는 채권투자를 선호한다고 하네요.
위의 자료에서 살펴봐도 우리나라는 확실히 주식투자에 대해 안좋은 인식들을 가지고 있고, 모르는 사람들도 많다고 생각되네요. 하지만 자본주의 사회에서 최소한 지금까지는 주식투자만큼 수익률을 안겨주는 제도는 없습니다.
 주식은 기업의 소유권의 일부를 나타내는 증권입니다. 기업이 자금을 조달하기 위해 주식을 발행하면, 투자자들은 그 주식을 구매함으로써 해당 기업의 주인이 될 수 있습니다. 주식을 소유함으로써 투자자는 기업의 성장과 이익에 따른 배당금을 받을 수 있으며, 주식의 가치가 상승하면 차익을 통해 수익을 얻을 수도 있습니다.
주식시장에서의 주가는 여러 가지 요인에 의해 변동합니다. 기업의 실적, 경제 상황, 정치적 사건, 시장의 심리 등 다양한 요소가 주가에 영향을 미치며, 이러한 변동성을 통해 투자자들은 수익을 기대할 수 있습니다. 주식 투자는 고수익을 기대할 수 있지만, 그만큼 위험도 크기 때문에 투자 시 주의가 필요합니다. `;

export const COMMENT = ['개의 댓글', '댓글을 작성하세요', '댓글 작성'];

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

export const NAV_OPTIONS = ['전체', '추천', '팔로잉'];

export const BLOG_NAV_PATH = ['/blog', '/blog/recommend', '/blog/followed'];

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

export const FILTER_OPTIONS = ['최신순', '오래된순', '좋아요순', '조회수순'];

export const REPLACE_VALUE = {
  정렬: [
    { view: '최신순', replace: 'newest' },
    { view: '오래된순', replace: 'oldest' },
    { view: '좋아요순', replace: 'mostlike' },
    { view: '조회수순', replace: 'mostview' },
  ],
};
