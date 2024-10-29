import Icons from '@/app/components/common/Icons';
import { starIcon } from '@/app/constants/iconPath';
import { filterOptions } from '@/app/data/blogdata';

const RecommendFilter = () => {
  return (
    <div className="ml-[68px] mt-[36px] mb-[4px] px-[20px] text-[13px] flex items-center h-[36px] justify-center gap-[15px] py-[2px] border-[1px] border-[#F95700] rounded-[20px] w-[436px]">
      <div className="flex items-center gap-[10px]">
        <Icons name={starIcon} />
        <span className="font-bold text-[#000000]">내 키워드</span>
      </div>

      {filterOptions.map((option) => (
        <div
          key={option.value}
          className="relative w-[62px] h-[28px]  flex items-center justify-center bg-[#FFEBE0] rounded-[15px]"
        >
          <span className="font-medium text-[#000000] text-[12px] tracking-[1.08px] leading-[20.5px]">
            {option.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RecommendFilter;
