interface BlogInfoTypes {
  title: string;
  date: string;
  tags: string[];
  content: string;
  likeCount: number;
  likeStatus: 'ACTIVE' | 'INACTIVE';
  membername: string;
}

interface CommentTypes {
  id: number;
  author: string;
  date: string;
  content: string;
}
