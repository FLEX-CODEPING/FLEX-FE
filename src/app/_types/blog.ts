interface BlogInfoTypes {
  id: string;
  userId: string;
  title: string;
  nickname: string;
  blogName: string;
  profileImageUrl: string;
  content: string;
  tags: string[];
  likeCount: number;
  likeStatus: boolean;
  commentCount: number;
  createdAt: string;
  updatedAt: string;
  following: boolean;
}

interface CommentTypes extends ChildCommentType {
  postId: string;
  childComments: ChildCommentType[];
}

interface ChildCommentType {
  id: number;
  userId: number;
  nickname: string;
  blogName: string;
  profileImageUrl: string | null;
  content: string;
  timeAgo: string;
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
  imageUrls: string[];
  tags: string;
  createdAt: string;
  updatedAt: string;
  likeCount: number;
}
interface MyBlogInfo {
  userId: string;
  blogName: string;
  nickname: string;
  profileImageUrl: string | null;
  followingCount: number;
  followerCount: number;
  following: boolean;
}

interface BlogDataTypes {
  content: MainPostTypes[];
  totalPages: number;
  totalElements: number;
  currentPage: number;
  currentSize: number;
  firstFollowingNickname?: 'string';
  followingCount?: number;
  myInterests?: string[];
}

interface CommentRequestTypes {
  content: string;
  parentCommentId?: number | null;
}

interface CommentRequestTypes2 {
  content: string;
}

interface SearchPostTypes {
  id: string;
  userId: string;
  nickname: string;
  profileImageUrl: string | null;
  title: string;
  content: string;
  tags: string; // 콤마로 구분된 태그 문자열
  createdAt: string; // ISO 형식 날짜
  updatedAt: string; // ISO 형식 날짜
  imageUrls: string[]; // 이미지 URL 배열
  likeCount: number;
  viewCount: number;
  thumbnailUrl: string | null;
}
