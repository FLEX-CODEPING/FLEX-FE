import Icons from '@/app/components/common/Icons';
import { noneChartSM } from '@/app/constants/iconPath';
import { CHART_EMPTY_TEXT } from '@/app/constants/prediction';

const StockInfoEmpty = () => {
  return (
    <div className="flex-col-center w-full justify-center text-black-0 h-[148px] gap-y-4 dark:bg dark:text-gray-2 ">
      <Icons name={noneChartSM} className="animate-pulse" />
      <p className="text-lg font-normal">{CHART_EMPTY_TEXT}</p>
    </div>
  );
};

export default StockInfoEmpty;
