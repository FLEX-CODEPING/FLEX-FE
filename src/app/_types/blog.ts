interface BlogInfoTypes {
  title: string;
  date: string;
  tags: string[];
  content: string;
  likeCount: number;
  likeStatus: 'ACTIVE' | 'INACTIVE';
  membername: string;
}
