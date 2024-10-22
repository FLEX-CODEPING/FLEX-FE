interface BlogInfoTypes {
  id: number;
  userid?: number;
  title?: string;
  nickname?: string;
  content?: string;
  tags?: string[];
  likeCount?: number;
  commentCount?: number;
  createdAt?: string;
  updatedAt?: string;
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
