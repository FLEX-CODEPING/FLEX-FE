export const FOLLOW_TEXT = ['팔로잉', '필로워'];

export const MYPAGE_TEXT = [
  '작성한 글',
  '좋아요 한 글',
  '정보 수정',
  '로그아웃',
];

export const ACCOUNT_TEXT = ['개인정보 수정', '변경사항 저장', '중복 확인'];

export const MY_MODAL_TEXT = [
  '변경된 내용을 저장하시겠습니까?',
  '개인정보는 언제든 수정 가능합니다.',
  '닫기',
  '저장',
  '변경된 내용이 저장되었습니다.',
  '홈화면으로 이동합니다.',
];

export const USERPAGE_TEXT = ['팔로우', '팔로잉'];

export const mockPosts: MyPostCardTypes[] = [
  {
    postId: '1',
    title: '주식이란 뭘까',
    content: '잃고자 하면 잃고 얻고자 하면 잃습니다 건강과...',
    image: '/images/3c.png',
    tag: ['필사즉생', '워렌버핏', '깨달음'],
    createdAt: '2024.10.04',
    helpful: 98,
  },
  {
    postId: '2',
    title: '주식 투자 회고: 2023년의 교훈',
    content: '2023년은 주식 투자에 있어 많은 변화를 경험한 해였습니다...',
    image: '/images/3c.png',
    tag: ['국내주식', '회고'],
    createdAt: '2024.09.25',
    helpful: 73,
  },
  {
    postId: '3',
    title: '글로벌 투자, 어떻게 접근해야 할까?',
    content: '세계 시장에 대한 투자 방법에 대해 다뤄봅니다...',
    image: '/images/3c.png',
    tag: ['글로벌', '투자방법'],
    createdAt: '2024.08.15',
    helpful: 45,
  },
];
