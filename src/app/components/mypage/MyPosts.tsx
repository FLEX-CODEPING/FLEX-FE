
const MyPosts = () => {
  return (
    <div className="h-[697px] flex-col justify-start items-start gap-5 inline-flex">
      <div className="self-stretch pt-10 justify-start items-start gap-2.5 inline-flex">
        <div className="w-[193px] h-10 text-black text-xl font-semibold font-['Roboto'] leading-normal">
          포스팅 (3)
        </div>
        <div className="w-[1030px] h-10 justify-end items-center gap-2.5 flex">
          <div className="w-[215px] h-10 px-3 bg-white rounded-lg border border-[#7a7a7a] justify-start items-center gap-[276px] flex">
            <div className="self-stretch py-2 justify-center items-center gap-2.5 flex">
              <div className="w-6 h-6 relative" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1253px] h-[597px] bg-white rounded-md flex-col justify-start items-start flex">
        <div className="self-stretch h-[590px] flex-col justify-start items-start flex">
          <div className="self-stretch py-2.5 justify-start items-center gap-[260px] inline-flex">
            <div className="px-[5px] justify-start items-end gap-2 flex">
              <div className="px-1 py-0.5 bg-[#eeeeee] rounded-[5px] justify-center items-center gap-0.5 flex">
                <div className="text-black text-base font-medium font-['Roboto'] leading-none">
                  #국내주식 #회고
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="self-stretch h-[22px] flex-col justify-center items-end gap-2.5 flex">
                <div className="px-2.5 justify-center items-center gap-[5px] inline-flex">
                  <div className="px-0.5 py-[3px] justify-center items-center gap-2.5 flex" />
                  <div className="text-center text-black text-lg font-bold font-['Roboto'] leading-none">
                    98
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="self-stretch h-[418px] px-5 py-2.5 rounded-[5px] border border-[#7a7a7a]"
            src="https://via.placeholder.com/1253x418"
          />
          <div className="self-stretch h-[145px] px-3 py-[18px] flex-col justify-start items-center gap-2 flex">
            <div className="self-stretch pt-[5px] pb-1 justify-start items-center gap-2 inline-flex">
              <div className="text-black text-lg font-semibold font-['Roboto'] leading-normal">
                주식 투자 회고: 2023년의 교훈
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-2 inline-flex">
              <div className="grow shrink basis-0 h-9 text-black text-base font-light font-['Roboto'] leading-snug">
                2023년은 주식 투자에 있어 많은 변화를 경험한 해였습니다. 글로벌
                경제의 불확실성과 금리 인상 등의 요인이 시장에 큰 영향을
                미쳤습니다. 이러한 환경 속에서 저는 여러 가지 투자 전략을
                시도하며 다양한 교훈을 얻었습니다. 특히, 감정적 결정을 피하고
                데이터 기반으로 접근하는 것이 얼마나 중요한지 깨달았습니다. 이번
                회고를 통해 저의 투자 여정을 돌아보고, 앞으로의 방향
              </div>
            </div>
            <div className="self-stretch text-right text-[#7a7a7a] text-xs font-normal font-['Roboto'] leading-normal">
              2024.09.25
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyPosts;
