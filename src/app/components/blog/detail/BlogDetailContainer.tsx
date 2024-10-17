import { CONTENT } from '@/app/constants/blog';
import BlogContent from './BlogContent';
import BlogHeader from './BlogHeader';
import BlogTitle from './BlogTitle';
import BlogComment from './BlogComment';

const BlogDetailContainer = () => {
  const blogData: BlogInfoTypes = {
    title: '주식이란 뭘까?',
    date: '2024.10.04',
    tags: ['전기차', '테슬라', '2차 전지'],
    content: CONTENT,
    likeCount: 71,
    likeStatus: 'ACTIVE',
    membername: 'nakdo',
  };

  return (
    <div>
      <BlogHeader
        tags={blogData.tags}
        initialLikesCount={blogData.likeCount}
        likeStatus={blogData.likeStatus}
      />
      <BlogTitle
        title={blogData.title}
        membername={blogData.membername}
        date={blogData.date}
      />
      <BlogContent content={blogData.content} />
      <BlogComment/>
    </div>
  );
};
export default BlogDetailContainer;
