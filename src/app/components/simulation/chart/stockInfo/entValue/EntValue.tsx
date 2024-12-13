import Icons from '@/app/components/common/Icons';
import { infoIcon } from '@/app/constants/iconPath';
import {
  ENT_VALUE_TEXT,
  ENT_VALUE_TOOLTIP,
  STOCK_INFO_TEXT,
} from '@/app/constants/simulation';
import useStockStore from '@/app/store/store';
import { formatCurrencyNoUnit } from '@/app/utils/formatNum';
import { formatStockData } from '@/app/utils/formatStock';
import { plusUnitforEnt } from '@/app/utils/truncate';
import { useEffect, useRef, useState } from 'react';
import { useHover } from 'usehooks-ts';
import StockGuideModal from './StockGuideModal';

interface EntValueProps {
  data: StockDetailInfoTypes;
}

const EntValue = ({ data }: EntValueProps) => {
  const [hoverRefs, setHoverRefs] = useState<(HTMLDivElement | null)[]>([]);
  const { stockCode } = useStockStore();

  useEffect(() => {
    setHoverRefs((prev) => STOCK_INFO_TEXT.map(() => null));
  }, [stockCode]);

  const StockInfoArr = data ? formatStockData(data) : [];

  return (
    <div className="flex flex-wrap w-full gap-y-4">
      {ENT_VALUE_TEXT.map((info, i) => {
        const hoverRef = useRef(null);
        const isHover = useHover(hoverRef);
        hoverRefs[i] = hoverRef.current;
        return (
          <div
            className="w-[108px] h-[66px] py-1 px-2 flex flex-col gap-y-2"
            key={info}
          >
            <div className="gap-x-1 w-fit flex-auto flex items-center h-[26px] px-2 py-1 bg-gray-5 rounded-lg">
              <p className="text-xs text-black-1">{info}</p>
              <div className="relative flex w-[13px] h-[13px]" ref={hoverRef}>
                <Icons name={infoIcon} />
                {isHover && (
                  <StockGuideModal
                    index={i}
                    text={ENT_VALUE_TEXT}
                    tooltip={ENT_VALUE_TOOLTIP}
                  />
                )}
              </div>
            </div>
            <div className="text-xs pl-1.5 font-medium flex gap-x-1 h-5">
              <p
                className={`${i === 5 && (Number(info) > 0 ? 'text-red-1' : 'text-blue-1')}`}
              >
                {formatCurrencyNoUnit(Number(StockInfoArr[i]))}
                {plusUnitforEnt(i)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EntValue;
