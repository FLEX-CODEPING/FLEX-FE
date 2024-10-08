const BlogContentContainer = () => {
  return (
    <div className="w-[983px] h-[673px] mt-10 pt-[5.40px] pb-[25.60px] rounded-[10px] flex-col justify-start items-end gap-2 inline-flex">
      <div className="self-stretch px-5 py-4 rounded-[5px] border border-[#f95700] justify-start items-center gap-2.5 inline-flex">
        <div className="text-black text-sm font-normal font-['Plus Jakarta Sans'] leading-[21px]">
          텍스트 편집 툴
        </div>
        <div className="w-6 h-6 relative">
          <div className="w-6 h-6 left-0 top-0 absolute"></div>
        </div>
        <div className="w-5 h-5 relative" />
        <div className="justify-start items-start gap-[15px] flex">
          <div className="w-24 h-[22px] pl-2 pr-0.5 py-px justify-start items-center flex">
            <div className="justify-start items-start gap-[21px] flex">
              <div className="text-center text-black text-sm font-normal font-['Roboto']">
                Roboto
              </div>
              <div className="w-[18px] h-[18px] relative origin-top-left -rotate-90" />
            </div>
          </div>
          <div className="w-24 h-[22px] pl-2 pr-0.5 py-px justify-start items-center flex">
            <div className="justify-start items-start gap-[21px] flex">
              <div className="text-center text-black text-sm font-normal font-['Roboto']">
                Normal
              </div>
              <div className="w-[18px] h-[18px] relative origin-top-left -rotate-90" />
            </div>
          </div>
          <div className="w-28 h-6 justify-center items-center gap-2.5 flex">
            <div className="w-[18px] h-[18px] relative" />
            <div className="w-[18px] h-[18px] relative" />
            <div className="w-[18px] h-[18px] relative" />
            <div className="w-6 h-6 relative" />
          </div>
          <div className="justify-center items-center gap-2.5 flex">
            <div className="w-[18px] h-[18px] relative" />
            <div className="w-[18px] h-[18px] relative" />
          </div>
          <div className="justify-center items-center gap-2.5 flex">
            <div className="w-[18px] h-[18px] relative" />
            <div className="w-[18px] h-[18px] relative" />
            <div className="w-[18px] h-[18px] relative" />
            <div className="w-[18px] h-[18px] relative" />
          </div>
          <div className="py-[3px] justify-center items-center gap-2.5 flex">
            <div className="w-[18px] h-[18px] relative" />
            <div className="w-[18px] h-[18px] relative" />
          </div>
          <div className="justify-center items-center gap-2.5 flex">
            <div className="w-[18px] h-[18px] relative" />
            <div className="w-[18px] h-[18px] relative" />
          </div>
        </div>
      </div>
      <div className="self-stretch h-[578px] p-2.5 justify-start items-start gap-5 inline-flex">
        <div className="w-[470px] h-[551px] relative">
          <div className="w-[470px] h-[551px] left-0 top-0 absolute bg-[#d8d8d8]/20" />
          <div className="w-[143px] h-[26px] left-[18px] top-[9px] absolute text-black text-sm font-normal font-['Plus Jakarta Sans'] leading-[21px]">
            내용을 입력해 주세요
          </div>
        </div>
        <div className="w-[470px] h-[551px] relative">
          <div className="w-[470px] h-[551px] left-0 top-0 absolute bg-[#d8d8d8]/20" />
          <div className="w-[143px] h-[26px] left-[18px] top-[9px] absolute text-black text-sm font-normal font-['Plus Jakarta Sans'] leading-[21px]">
            내용을 입력해 주세요
          </div>
        </div>
      </div>
      <div className="w-36 h-10 relative">
        <div className="w-36 h-10 left-0 top-0 absolute bg-[#cbcaca] rounded-[10px]" />
        <div className="left-[35px] top-[8.40px] absolute text-center text-white text-xl font-bold font-['Inter']">
          출간하기
        </div>
      </div>
    </div>
  );
};
export default BlogContentContainer;
