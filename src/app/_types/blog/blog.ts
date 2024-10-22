/*interface BlogInfoTypes {
  title: string;
  date: string;
  tags: string[];
  content: string;
  likeCount: number;
  likeStatus: 'ACTIVE' | 'INACTIVE';
  membername: string;
}
*/
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
