import BlogHeader from './BlogHeader';

const tags = ['전기차', '테슬라', '2차 전지'];
const initialLikesCount = 71;

const BlogDetail = () => {
  return (
    <div>
      <BlogHeader tags={tags} initialLikesCount={initialLikesCount} />
    </div>
  );
};
export default BlogDetail;
