import BlogContentContainer from './BlogContentContainer';
import BlogInfoContainer from './BlogInfoContainer';

const EditBlogContainer = () => {
  return (
    <div>
      <BlogInfoContainer />
      <div className="mb-10">
        <BlogContentContainer />
      </div>
    </div>
  );
};
export default EditBlogContainer;
