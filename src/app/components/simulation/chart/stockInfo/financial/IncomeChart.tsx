import Icons from '@/app/components/common/Icons';
import { infoIcon } from '@/app/constants/iconPath';
import { PROFIT_LOSS_TITLE } from '@/app/constants/simulation';
import { formatYM } from '@/app/utils/date';

interface IncomeChartProps {
  financialInfo: IncomesTypes[];
}

const IncomeChart = ({ financialInfo }: IncomeChartProps) => {
  return (
    <div className="flex px-2 py-1 gap-x-2 w-full overflow-x-auto">
      <div className="flex-col-center text-xs gap-y-4">
        <div className="w-20 h-[26px] font-medium flex items-center">항목</div>
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
            <p className="flex-center w-[70px] py-1 flex-center h-[26px]">
              {data.costOfSales}
            </p>
            <p className="flex-center h-[26px]">{data.grossProfit}</p>
            <p className="flex-center h-[26px]">{data.netIncomeForThePeriod}</p>
            <p className="flex-center h-[26px] ">{data.operatingProfit}</p>
            <p className="flex-center h-[26px]">{data.ordinaryProfit}</p>
            <p className="flex-center h-[26px]">{data.salesRevenue}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncomeChart;
