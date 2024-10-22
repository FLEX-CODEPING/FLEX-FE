import EditBlogContainer from '@/app/components/blog/blogmain/post/EditBlogContainer';

const PostBlogPage = () => {
  return (
    <section className="w-full h-full flex items-center flex-col mt-[40px]">
      <EditBlogContainer />
      <select className="border border-gray-300 rounded-[5px] w-[119px] h-[30px] p-1 text-sm mb-[500px]">
        <option value="">기간 선택</option>
        <option value="1d">1일</option>
        <option value="1w">1주</option>
        <option value="1m">1개월</option>
        <option value="1y">1년</option>
      </select>
    </section>
  );
};
export default PostBlogPage;
