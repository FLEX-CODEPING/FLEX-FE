import Icons from '@/app/components/common/Icons';
import { noneChart_sm } from '@/app/constants/iconPath';
import { CHART_EMPTY_TEXT } from '@/app/constants/prediction';

const StockInfoEmpty = () => {
  return (
    <div className="flex-col-center w-full justify-center text-black-0 h-[148px] gap-y-4">
      <Icons name={noneChart_sm} className="animate-pulse" />
      <p className="text-lg font-normal">{CHART_EMPTY_TEXT}</p>
    </div>
  );
};

export default StockInfoEmpty;
