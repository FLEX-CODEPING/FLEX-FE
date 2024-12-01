import Icons from '@/app/components/common/Icons';
import { infoIcon } from '@/app/constants/iconPath';
import { PROFIT_LOSS_TITLE } from '@/app/constants/simulation';
import { useScrollFade } from '@/app/hooks/useScrollFade';
import { formatYM } from '@/app/utils/date';
import { formatCurrency } from '@/app/utils/formatNum';

interface IncomeChartProps {
  financialInfo: IncomesTypes[];
}

const IncomeChart = ({ financialInfo }: IncomeChartProps) => {
  const { scrollRef, scrollState } = useScrollFade();

  return (
    <div className="relative">
      {!scrollState.isAtStart && (
        <div className="absolute left-0 top-0 h-full w-5 bg-gradient-to-r from-gray-300 to-transparent pointer-events-none" />
      )}
      {!scrollState.isAtEnd && (
        <div className="absolute right-0 top-0 h-full w-5 bg-gradient-to-l from-gray-300 to-transparent pointer-events-none" />
      )}
      <div
        ref={scrollRef}
        className="flex px-2 py-1 gap-x-2 w-full overflow-x-auto"
      >
        <div className="flex-col-center text-xs gap-y-4">
          <div className="w-20 h-[26px] font-medium flex items-center">
            항목
          </div>
          {PROFIT_LOSS_TITLE.map((title) => (
            <div className="w-20" key={title}>
              <div className="flex items-center h-[26px] rounded-lg bg-gray-6 px-1 gap-x-1 w-fit">
                <p className="text-black-1 ">{title}</p>
                <Icons name={infoIcon} />
              </div>
            </div>
          ))}
        </div>
        <div className="w-full overflow-x-auto flex">
          {financialInfo?.map((data) => (
            <div
              className="flex-col-center text-xs gap-y-4 text-black-1"
              key={data.yearMonth}
            >
              <div className="w-[70px] py-1 flex-center h-[26px] font-medium flex items-center">
                {formatYM(data.yearMonth)}
              </div>
              <p className="flex-center h-[26px]">
                {formatCurrency(data.costOfSales)}
              </p>
              <p className="flex-center h-[26px]">
                {formatCurrency(data.grossProfit)}
              </p>
              <p className="flex-center h-[26px]">
                {formatCurrency(data.netIncomeForThePeriod)}
              </p>
              <p className="flex-center h-[26px]">
                {formatCurrency(data.operatingProfit)}
              </p>
              <p className="flex-center h-[26px]">
                {formatCurrency(data.ordinaryProfit)}
              </p>
              <p className="flex-center h-[26px]">
                {formatCurrency(data.salesRevenue)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IncomeChart;
