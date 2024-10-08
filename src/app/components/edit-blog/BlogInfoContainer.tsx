const BlogInfoContainer = () => {
  return (
    <div className="w-[983px] h-[150px] relative">
      <div className="w-[983px] h-[70px] left-0 top-0 absolute bg-white border-b border-black/25" />
      <input
        type="text"
        placeholder="제목을 입력해 주세요"
        className="w-[400.29px] h-[26.83px] left-[17.23px] top-[16.33px] absolute text-[#414141] text-[28px] font-medium border-none outline-none"
      ></input>

      <div className="w-[983px] h-[60px] left-0 top-[90px] absolute">
        <div className="w-[983px] h-[60px] left-0 top-0 absolute bg-white border-b border-black/25" />
        <input
          type="text"
          placeholder="# 태그를 입력해 주세요. ex) #전기차 #선물"
          className="w-[430.25px] left-[18.22px] top-[18.40px] absolute text-black/40 text-xl font-normal border-none outline-none"
        ></input>
      </div>
    </div>
  );
};
export default BlogInfoContainer;
