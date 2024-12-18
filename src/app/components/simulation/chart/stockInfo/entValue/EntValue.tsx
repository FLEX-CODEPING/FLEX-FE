import Icons from '@/app/components/common/Icons';
import { infoIcon } from '@/app/constants/iconPath';
import {
  ENT_VALUE_TEXT,
  ENT_VALUE_TOOLTIP,
  STOCK_INFO_TEXT,
} from '@/app/constants/simulation';
import useStockStore from '@/app/store/store';
import { callGet } from '@/app/utils/callApi';
import {
  formatCurrencyNoUnit,
  formatEntValueUnit,
} from '@/app/utils/formatNum';
import { formatEntValue } from '@/app/utils/formatStock';
import { useEffect, useRef, useState } from 'react';
import { useHover } from 'usehooks-ts';
import StockGuideModal from './StockGuideModal';

const EntValue = () => {
  const [entValue, setEntValue] = useState<EntValueTypes | null>(null);
  const [hoverRefs, setHoverRefs] = useState<(HTMLDivElement | null)[]>([]);
  const { stockCode } = useStockStore();

  useEffect(() => {
    const getStockDetail = async () => {
      const response = await callGet(`api/stocks/info/ent?code=${stockCode}`);
      setEntValue(response.result);
    };
    getStockDetail();
  }, [stockCode]);

  useEffect(() => {
    setHoverRefs((prev) => STOCK_INFO_TEXT.map(() => null));
  }, []);

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
            <div className="gap-x-1 w-fit flex-auto flex items-center h-[26px] px-2 py-1 dark:text-gray-2 bg-gray-5 dark:bg-black-1 rounded-lg">
              <p className="text-xs dark:text-gray-2 text-black-1">{info}</p>
              <div className="relative flex w-[13px] dark:text-gray-2 h-[13px]" ref={hoverRef}>
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
              <p>
                {entValue &&
                  formatCurrencyNoUnit(
                    Math.floor(Number(formatEntValue(entValue)[i])),
                  )}
                {formatEntValueUnit(i)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EntValue;
