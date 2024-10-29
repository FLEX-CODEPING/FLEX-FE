import Icons from '@/app/components/common/Icons';
import { starIcon } from '@/app/constants/iconPath';
import { filterOptions } from '@/app/data/blogdata';

const RecommendFilter = () => {
  return (
    <div className="mt-9 px-4 text-[13px] flex-center h-10 gap-x-[15px] py-0.5 border border-[#F95700] rounded-[20px] text-black-0">
      <div className="flex items-center gap-[10px]">
        <Icons name={starIcon} />
        <span className="font-bold">내 키워드</span>
      </div>

      {filterOptions.map((option) => (
        <div
          key={option.value}
          className="px-2.5 py-1 flex-center bg-[#FFEBE0] rounded-[15px]"
        >
          <span className="font-medium text-[12px]">
            {option.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RecommendFilter;
