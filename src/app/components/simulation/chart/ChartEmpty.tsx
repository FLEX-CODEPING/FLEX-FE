import { noneChart } from '@/app/constants/iconPath';
import { CHART_EMPTY_TEXT } from '@/app/constants/prediction';
import Icons from '../../common/Icons';

const ChartEmpty = () => {
  return (
    <div className="flex-col-center w-full justify-center text-black-0 h-[315px] gap-y-4">
      <Icons name={noneChart} className="animate-pulse" />
      <p className="text-2xl font-light">{CHART_EMPTY_TEXT}</p>
    </div>
  );
};

export default ChartEmpty;
