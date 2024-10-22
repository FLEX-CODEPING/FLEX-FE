interface BlogInfoTypes {
  title: string;
  date: string;
  tags: string[];
  content: string;
  likeCount: number;
  likeStatus: 'ACTIVE' | 'INACTIVE';
  membername: string;
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

type AgeTypes =
  | 'AGE_0_20'
  | 'AGE_21_30'
  | 'AGE_31_40'
  | 'AGE_41_50'
  | 'AGE_51_100';
