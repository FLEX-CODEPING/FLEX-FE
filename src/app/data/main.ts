export const MOOK_ARTICLES: DailyArticleTypes[] = [
  {
    title: '글로벌 시장, 사상 최고치 경신',
    content:
      '세계 각국의 주식 시장이 경제 회복에 대한 낙관론으로 인해 새로운 최고치를 기록하고 있습니다. 그럼에도 글로벌 경제 불확실성에도 불구하고 주요 기술 기업들이 이번 분기에 사상 최대 수익을 기록했습니다. 정부의 개입은 어떠한 영향을 미칠지 예상되지 않는 바입니다. 개인 투자자는 주의를 들여 귀를 기울여야 할지도 모릅니다.',
    media: '중앙경제',
  },
  {
    title: '암호화폐 열풍 지속',
    content:
      '비트코인 및 주요 암호화폐의 가치가 급등하며, 더 많은 기관 투자자들이 시장에 진입하고 있습니다. 그럼에도 세계 각국의 주식 시장이 경제 회복에 대한 낙관론으로 인해 새로운 최고치를 기록하고 있습니다. 정부의 개입은 어떠한 영향을 미칠지 예상되지 않는 바입니다. 개인 투자자는 주의를 들여 귀를 기울여야 할지도 모릅니다.',
    media: '국민경제',
  },
  {
    title: '기술 대기업, 사상 최대 수익 보고',
    content:
      '글로벌 경제 불확실성에도 불구하고 주요 기술 기업들이 이번 분기에 사상 최대 수익을 기록했습니다. 과연 올해의 세계 각국의 주식 시장이 경제 회복에 대한 낙관론으로 인해 새로운 최고치를 기록하고 있습니다. 정부의 개입은 어떠한 영향을 미칠지 예상되지 않는 바입니다. 개인 투자자는 주의를 들여 귀를 기울여야 할지도 모릅니다.',
    media: '한국경제',
  },
  {
    title: '이대로 글로벌 산업 괜찮을까?',
    content:
      '글로벌 경제 불확실성에도 불구하고 주요 기술 기업들이 이번 분기에 사상 최대 수익을 기록했습니다. 과연 올해의 세계 각국의 주식 시장이 경제 회복에 대한 낙관론으로 인해 새로운 최고치를 기록하고 있습니다. 정부의 개입은 어떠한 영향을 미칠지 예상되지 않는 바입니다. 개인 투자자는 주의를 들여 귀를 기울여야 할지도 모릅니다.',
    media: '한국경제',
  },
];

export const MOOK_RANKINGS: RankingTypes[] = [
  {
    title: '이하윤',
    profit: 758000,
    thumbnail: '/images/complete1.png',
  },
  {
    title: '김동윤',
    profit: 450300,
    thumbnail: '/images/complete2.png',
  },
  {
    title: '마석두',
    profit: 272000,
    thumbnail: '/images/complete3.png',
  },
];

export const MOOK_POSTS: MainPostTypes[] = [
  {
    id: 1,
    userId: 1,
    nickname: '유저1',
    profileImageUrl: '',
    title: '초보 투자자를 위한 가이드',
    content:
      '초보 투자자를 위해 꼭 알아야 할 투자 기본 원칙에 대해 소개합니다.',
    tags: '투자, 기본',
    createdAt: '2024-01-01T10:15:00',
    updatedAt: '2024-11-03T22:46:09.326369',
    imageUrls: [],
    likeCount: 2,
  },
  {
    id: 2,
    userId: 2,
    nickname: '유저2',
    profileImageUrl: '',
    title: '2024년 시장 전망',
    content:
      '2024년에 주목해야 할 산업과 성장 가능성이 있는 기업을 살펴봅니다.',
    tags: '시장, 전망, 주식',
    createdAt: '2024-01-03T11:20:00',
    updatedAt: '2024-11-03T22:45:25.552269',
    imageUrls: [],
    likeCount: 5,
  },
  {
    id: 3,
    userId: 3,
    nickname: '유저3',
    profileImageUrl: '',
    title: '단기 매매 전략의 이해',
    content:
      '단기 매매를 통해 수익을 내기 위한 주요 전략과 리스크 관리 방법을 설명합니다.',
    tags: '매매, 단기, 전략',
    createdAt: '2024-01-05T09:45:00',
    updatedAt: '2024-01-05T09:45:00',
    imageUrls: [],
    likeCount: 3,
  },
  {
    id: 4,
    userId: 4,
    nickname: '유저4',
    profileImageUrl: '',
    title: '초보자를 위한 ETF 투자 방법',
    content: 'ETF의 장점과 다양한 상품에 투자하는 방법을 알려드립니다.',
    tags: 'ETF, 초보자, 투자',
    createdAt: '2024-01-07T14:30:00',
    updatedAt: '2024-01-07T14:30:00',
    imageUrls: [],
    likeCount: 8,
  },
  {
    id: 5,
    userId: 1,
    nickname: '유저1',
    profileImageUrl: '',
    title: '주식과 채권의 차이점',
    content: '주식과 채권의 차이점 및 각 투자 방법의 장단점에 대해 설명합니다.',
    tags: '주식, 채권, 비교',
    createdAt: '2024-01-10T12:00:00',
    updatedAt: '2024-01-10T12:00:00',
    imageUrls: [],
    likeCount: 1,
  },
  {
    id: 6,
    userId: 2,
    nickname: '유저2',
    profileImageUrl: '',
    title: '기업 재무제표 읽는 법',
    content:
      '기업의 재무제표를 분석하여 투자할 때 중요한 포인트를 이해할 수 있습니다.',
    tags: '재무제표, 기업, 분석',
    createdAt: '2024-01-15T16:00:00',
    updatedAt: '2024-01-15T16:00:00',
    imageUrls: [],
    likeCount: 4,
  },
  {
    id: 7,
    userId: 3,
    nickname: '유저3',
    profileImageUrl: '',
    title: '성장주와 가치주의 차이점',
    content:
      '성장주와 가치주에 대한 차이점과 투자 시 고려할 점에 대해 알려드립니다.',
    tags: '성장주, 가치주, 투자',
    createdAt: '2024-01-20T18:00:00',
    updatedAt: '2024-01-20T18:00:00',
    imageUrls: [],
    likeCount: 7,
  },
  {
    id: 8,
    userId: 4,
    nickname: '유저4',
    profileImageUrl: '',
    title: '주식 투자 리스크 관리',
    content: '주식 투자 시 위험 요소를 줄이는 방법에 대해 알아봅니다.',
    tags: '리스크, 관리, 주식',
    createdAt: '2024-01-25T13:30:00',
    updatedAt: '2024-01-25T13:30:00',
    imageUrls: [],
    likeCount: 6,
  },
];

export const POPULAR_ARTICLES: PopularPostTypes[] = [
  {
    title: '기술주 강세로 나스닥 최고치 기록',
    nickname: '재테크왕',
    likeCount: 152,
  },
  {
    title: '미국 금리 동결, 시장 반응 미미',
    nickname: '투자고수',
    likeCount: 89,
  },
  {
    title: '유럽 증시 회복세, 경제 전망 밝아져',
    nickname: '경제박사',
    likeCount: 134,
  },
  {
    title: '아시아 시장, 코로나 이후 경제 성장 가속',
    nickname: '머니트리',
    likeCount: 102,
  },
];

export const RECOMMEND_ARTICLES: RecommendPostTypes[] = [
  {
    id: 8,
    userId: 2,
    title: 'Title 8',
    tags: 'tag11',
    imageUrls: [],
    likeCount: 12,
    commonInterests: ['크립토', '국내주식'],
  },
  {
    id: 2,
    userId: 2,
    title: 'Title 2',
    tags: 'tag3, tag4',
    imageUrls: [],
    likeCount: 269,
    commonInterests: ['크립토', '국내주식'],
  },
  {
    id: 6,
    userId: 3,
    title: 'Title 6',
    tags: 'tag8',
    imageUrls: [],
    likeCount: 128,
    commonInterests: ['3000 이하', '~20'],
  },
  {
    id: 3,
    userId: 3,
    title: 'Title 3',
    tags: 'tag5',
    imageUrls: [],
    likeCount: 39,
    commonInterests: ['3000 이하', '~20'],
  },
];

export const RECOMMEND_RESULT: RecommendPostResultTypes = {
  content: RECOMMEND_ARTICLES,
  myInterests: ['3000 이하', '~20', '크립토', '국내주식'],
};

export const MOOK_DAILY_POSTS: MainPostTypes[] = [
  {
    id: 1,
    userId: 1,
    nickname: '낙도핑',
    profileImageUrl: '/images/complete1.png',
    title: '초보자를 위한 최고의 투자 팁',
    content:
      '투자는 도전적일 수 있지만, 올바른 마음가짐과 전략을 통해 재정적 성장을 이룰 수 있습니다. 이번 포스트에서는 초보자를 위한 기본 투자 팁을 알아봅니다.',
    tags: '투자, 초보자, 팁, 재테크',
    createdAt: '2024-10-27T10:00:00Z',
    updatedAt: '2024-10-27T10:00:00Z',
    imageUrls: ['/images/3c.png'],
    likeCount: 12,
  },
  {
    id: 2,
    userId: 2,
    nickname: '코딩챔피언',
    profileImageUrl: '/images/complete2.png',
    title: '주식 시장의 기본 이해',
    content:
      '주식 시장은 변동성이 크지만 장기적인 성장 가능성이 있는 자산입니다. 이번 글에서는 주식 시장의 기본 개념을 설명합니다.',
    tags: '주식, 초보자, 재테크, 시장',
    createdAt: '2024-10-28T11:00:00Z',
    updatedAt: '2024-10-28T11:00:00Z',
    imageUrls: ['/images/3c.png'],
    likeCount: 8,
  },
  {
    id: 3,
    userId: 3,
    nickname: '재테크왕',
    profileImageUrl: '/images/complete3.png',
    title: '장기 투자와 단기 투자, 어느 쪽이 좋을까?',
    content:
      '장기 투자와 단기 투자는 각각의 장점과 단점이 있습니다. 이번 글에서는 두 가지 접근법을 비교합니다.',
    tags: '투자, 장기, 단기, 재테크',
    createdAt: '2024-10-29T12:30:00Z',
    updatedAt: '2024-10-29T12:30:00Z',
    imageUrls: ['/images/3c.png'],
    likeCount: 15,
  },
  {
    id: 4,
    userId: 4,
    nickname: '머니마스터',
    profileImageUrl: '/images/complete4.png',
    title: '초보자가 알아야 할 자산 관리 팁',
    content:
      '자산 관리는 재정적 안정과 성장의 필수 요소입니다. 이번 포스트에서는 자산 관리의 기본 개념을 설명합니다.',
    tags: '자산관리, 초보자, 팁, 재테크',
    createdAt: '2024-10-30T09:45:00Z',
    updatedAt: '2024-10-30T09:45:00Z',
    imageUrls: ['/images/3c.png'],
    likeCount: 20,
  },
  {
    id: 5,
    userId: 5,
    nickname: '재테크달인',
    profileImageUrl: '/images/complete5.png',
    title: '투자에서 리스크 관리가 중요한 이유',
    content:
      '리스크 관리는 성공적인 투자에 필수적입니다. 이 포스트에서는 리스크 관리의 중요성에 대해 알아봅니다.',
    tags: '리스크, 투자, 재테크',
    createdAt: '2024-11-01T14:00:00Z',
    updatedAt: '2024-11-01T14:00:00Z',
    imageUrls: ['/images/3c.png'],
    likeCount: 18,
  },
  {
    id: 6,
    userId: 6,
    nickname: '파이낸스박사',
    profileImageUrl: '/images/complete6.png',
    title: '효과적인 예산 관리 방법',
    content:
      '예산 관리는 재정 목표를 달성하기 위해 필수적입니다. 이번 글에서는 효과적인 예산 관리 방법에 대해 소개합니다.',
    tags: '예산, 관리, 재테크',
    createdAt: '2024-11-02T15:30:00Z',
    updatedAt: '2024-11-02T15:30:00Z',
    imageUrls: ['/images/3c.png'],
    likeCount: 10,
  },
];
