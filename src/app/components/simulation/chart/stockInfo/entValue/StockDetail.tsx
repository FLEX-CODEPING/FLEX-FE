import Icons from '@/app/components/common/Icons';
import { infoIcon } from '@/app/constants/iconPath';
import {
  STOCK_INFO_TEXT,
  STOCK_INFO_TOOLTIP,
} from '@/app/constants/simulation';
import { formatCurrencyNoUnit } from '@/app/utils/formatNum';
import { formatStockData } from '@/app/utils/formatStock';
import { plusUnit } from '@/app/utils/truncate';
import { useEffect, useRef, useState } from 'react';
import { useHover } from 'usehooks-ts';
import StockGuideModal from './StockGuideModal';

interface StockDetailProps {
  data: StockDetailInfoTypes;
}

const StockDetail = ({ data }: StockDetailProps) => {
  const [hoverRefs, setHoverRefs] = useState<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setHoverRefs((prev) => STOCK_INFO_TEXT.map(() => null));
  }, []);

  const StockInfoArr = data ? formatStockData(data) : [];

  return (
    <div className="flex flex-wrap w-full gap-y-4">
      {STOCK_INFO_TEXT.map((info, i) => {
        const hoverRef = useRef(null);
        const isHover = useHover(hoverRef);
        hoverRefs[i] = hoverRef.current;
        return (
          <div
            className="w-[108px] h-[66px] py-1 px-2 flex flex-col gap-y-2"
            key={info}
          >
            <div className="gap-x-1 w-fit flex-auto flex items-center h-[26px] px-2 py-1 bg-gray-5 dark:bg-black-1 rounded-lg">
              <p className="text-xs text-black-1 dark:text-gray-2">{info}</p>
              <div className="relative flex w-[13px] h-[13px]" ref={hoverRef}>
                <Icons name={infoIcon} />
                {isHover && (
                  <StockGuideModal
                    index={i}
                    text={STOCK_INFO_TEXT}
                    tooltip={STOCK_INFO_TOOLTIP}
                  />
                )}
              </div>
            </div>
            <div className="text-xs pl-1.5 font-medium flex gap-x-1 h-5">
              <p>
                {formatCurrencyNoUnit(Number(StockInfoArr[i]))}
                {plusUnit(i)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StockDetail;
