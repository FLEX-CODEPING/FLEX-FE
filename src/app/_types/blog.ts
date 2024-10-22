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

interface CommentTypes {
  id: number;
  author: string;
  date: string;
  content: string;
}
