import Icons from '@/app/components/common/Icons';
import { infoIcon } from '@/app/constants/iconPath';
import { BALANCE_TITLE } from '@/app/constants/simulation';
import { formatYM } from '@/app/utils/date';

interface BalanceChartProps {
  balanceInfo: balanceTypes[];
}

const BalanceChart = ({ balanceInfo }: BalanceChartProps) => {
  return (
    <div className="flex px-2 py-1 gap-x-2 w-full overflow-x-auto">
      <div className="flex-col-center text-xs gap-y-4">
        <div className="w-20 h-[26px] font-medium flex items-center">항목</div>
        {BALANCE_TITLE.map((title) => (
          <div className="w-20" key={title}>
            <div className="flex items-center h-[26px] rounded-lg bg-gray-6 px-1 gap-x-1 w-fit">
              <p className="text-black-1 ">{title}</p>
              <Icons name={infoIcon} />
            </div>
          </div>
        ))}
      </div>
      <div className="w-full overflow-x-auto flex">
        {balanceInfo?.map((data) => (
          <div
            className="flex-col-center text-xs gap-y-4 text-black-1"
            key={data.yearMonth}
          >
            <div className="w-[70px] py-1 flex-center h-[26px] font-medium flex items-center">
              {formatYM(data.yearMonth)}
            </div>
            <p className="flex-center h-[26px]">{data.capitalStock}</p>
            <p className="flex-center h-[26px]">{data.curAssets}</p>
            <p className="flex-center h-[26px]">{data.curLiabilities}</p>
            <p className="flex-center h-[26px]">{data.fixedAssets}</p>
            <p className="flex-center h-[26px]">{data.fixedLiabilities}</p>
            <p className="flex-center h-[26px]">{data.totalAssets}</p>
            <p className="flex-center h-[26px]">{data.totalEquity}</p>
            <p className="flex-center h-[26px]">{data.totalLiabilities}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BalanceChart;
