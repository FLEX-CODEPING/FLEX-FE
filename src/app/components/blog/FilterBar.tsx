import React from 'react';
import Image from 'next/image';

interface FilterBarProps {
  onFilterSelect: (selectedFilters: string[]) => void; // 필터 선택 시 호출할 함수
}

export const LabelNormal = (): JSX.Element => {
  return (
    <div className="inline-flex h-10 items-center justify-center gap-[15px] px-5 py-0.5 relative rounded-[20px] overflow-hidden border border-solid border-main-1">
      <div className="inline-flex items-center justify-center gap-[3px] relative flex-[0_0_auto]">
        {/* 이미지나 아이콘을 적절히 표시 */}
        <Image
            src="/images/star.png"
            alt="좋아요"
            width={20}
            height={20}
          />
        <div className="relative w-fit font-semibold text-black text-[13px] tracking-[0] leading-4 whitespace-nowrap">
          내 키워드
        </div>
      </div>

      {/* 필터 1: 3천 이하 */}
      <div className="relative w-[66px] h-7">
        <div className="relative w-16 h-7 bg-[url(/rectangle-28.svg)] bg-cover">
          <div className="top-[3px] left-2 absolute font-medium text-black text-xs tracking-[1.08px] leading-[20.5px] whitespace-nowrap">
            3천 이하
          </div>
        </div>
      </div>

      {/* 필터 2: 21 ~ 30 */}
      <div className="relative w-[66px] h-7">
        <div className="relative w-16 h-7 bg-[url(/image.svg)] bg-cover">
          <div className="top-1 left-[7px] absolute font-medium text-black text-xs tracking-[1.08px] leading-[20.5px] whitespace-nowrap">
            21 ~ 30
          </div>
        </div>
      </div>

      {/* 필터 3: 해외주식 */}
      <div className="relative w-[66px] h-7">
        <div className="relative w-16 h-7 bg-[url(/rectangle-28-2.svg)] bg-cover">
          <div className="top-1 left-2 absolute font-medium text-black text-xs tracking-[1.08px] leading-[20.5px] whitespace-nowrap">
            해외주식
          </div>
        </div>
      </div>

      {/* 필터 4: 부동산 */}
      <div className="relative w-[66px] h-7">
        <div className="relative w-16 h-7 bg-[url(/rectangle-28-3.svg)] bg-cover">
          <div className="top-1 left-3.5 absolute font-medium text-black text-xs tracking-[1.08px] leading-[20.5px] whitespace-nowrap">
            부동산
          </div>
        </div>
      </div>
    </div>
  );
};
