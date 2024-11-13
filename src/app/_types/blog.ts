interface BlogInfoTypes {
  id: number;
  userid: number;
  title: string;
  nickname: string;
  content: string;
  tags: string[];
  likeCount: number;
  commentCount: number;
  createdAt: string;
  updatedAt: string;
}

interface BlogPost {
  id: number;
  category: string;
  likes: number;
  imageUrl: string;
  title: string;
  content: string;
  author: string;
  authorImageUrl: string;
  date: string;
}
interface FilterOption {
  label: string;
  value: string;
}
interface CommentTypes {
  id: number;
  author: string;
  date: string;
  content: string;
}
interface PostTypes {
  title: string;
  content: string;
  tags: string[];
}

type AgeTypes =
  | 'AGE_0_20'
  | 'AGE_21_30'
  | 'AGE_31_40'
  | 'AGE_41_50'
  | 'AGE_51_100';

interface PostCardTypes {
  id: number;
  likes: number;
  imageUrl: string;
  title: string;
  content: string;
  date: string;
  tags: string[];
}

type BlogViewType = '전체' | '추천' | '팔로잉';

type BlogFilterType = '최신순' | '좋아요순';

type ApiFilterType = 'CREATED_AT' | 'LIKE_COUNT';

interface MyPostCardTypes {
  postId: string;
  title: string;
  content: string;
  image: string;
  tag: string[];
  createdAt: string;
  helpful: number;
}
interface MyResultTypes {
  blogName: string;
  nickname: string;
  profileImageUrl: string;
  followingCount: number;
  followerCount: number;
  posts: MyPostCardTypes[];
}

interface MyPostTypes {
  isSuccess: boolean;
  code: string;
  message: string;
  result: MyResultTypes;
}
interface BlogDataTypes {
  content: MainPostTypes[];
  totalPages: number;
  totalElements: number;
  currentPage: number;
  currentSize: number;
  firstFollowingNickname?: 'string';
  followingCount?: number;
  myInterests?:string[]
}
