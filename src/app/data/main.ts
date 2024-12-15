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
