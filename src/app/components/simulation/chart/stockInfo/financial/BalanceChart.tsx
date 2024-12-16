import Icons from '@/app/components/common/Icons';
import { infoIcon } from '@/app/constants/iconPath';
import { BALANCE_TITLE, BALANCE_TOOLTIP } from '@/app/constants/simulation';
import { formatYM } from '@/app/utils/date';
import { formatCurrency } from '@/app/utils/formatNum';
import { useEffect, useRef, useState } from 'react';
import { useHover } from 'usehooks-ts';
import StockGuideModal from '../entValue/StockGuideModal';

interface BalanceChartProps {
  balanceInfo: BalanceTypes[];
}

const BalanceChart = ({ balanceInfo }: BalanceChartProps) => {
  const [hoverRefs, setHoverRefs] = useState<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setHoverRefs((prev) => BALANCE_TITLE.map(() => null));
  }, []);
  return (
    <div className="flex px-2 py-1 gap-x-2 w-full overflow-x-auto">
      <div className="flex-col-center text-xs gap-y-4">
        <div className="w-full border-b-gray-4 border-b h-7 font-medium flex items-center pl-1">
          항목
        </div>
        {BALANCE_TITLE.map((title, i) => {
          const hoverRef = useRef(null);
          const isHover = useHover(hoverRef);
          hoverRefs[i] = hoverRef.current;
          return (
            <div className="w-[88px]" key={title}>
              <div className="flex items-center h-7 rounded-lg bg-gray-6 px-2 py-1 gap-x-1 w-fit">
                <p className="text-black-1">{title}</p>
                <div className="relative flex" ref={hoverRef}>
                  <Icons name={infoIcon} />
                  {isHover && (
                    <StockGuideModal
                      isLong
                      index={i}
                      text={BALANCE_TITLE}
                      tooltip={BALANCE_TOOLTIP}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full overflow-x-auto flex gap-x-2">
        {balanceInfo?.map((data) => (
          <div
            className="flex-col-center text-xs gap-y-4 text-black-1"
            key={data.yearMonth}
          >
            <div className="w-[70px] py-1 flex-center h-7 font-medium flex items-center border-b border-b-gray-4">
              {formatYM(data.yearMonth)}
            </div>
            <p className="flex-center h-7">
              {formatCurrency(data.capitalStock)}
            </p>
            <p className="flex-center h-7">{formatCurrency(data.curAssets)}</p>
            <p className="flex-center h-7">
              {formatCurrency(data.curLiabilities)}
            </p>
            <p className="flex-center h-7">
              {formatCurrency(data.fixedAssets)}
            </p>
            <p className="flex-center h-7">
              {formatCurrency(data.fixedLiabilities)}
            </p>
            <p className="flex-center h-7">
              {formatCurrency(data.totalAssets)}
            </p>
            <p className="flex-center h-7">
              {formatCurrency(data.totalEquity)}
            </p>
            <p className="flex-center h-7">
              {formatCurrency(data.totalLiabilities)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BalanceChart;
