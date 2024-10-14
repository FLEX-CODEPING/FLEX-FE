import BlogHeader from "./BlogHeader";

const tags = ['전기차', '테슬라', '2차 전지'];
const likesCount = 98;

const BlogDetail = () => {
  return (
    <div>
      <BlogHeader tags={tags} likesCount={likesCount}/>
    </div>
  );
};
export default BlogDetail;
