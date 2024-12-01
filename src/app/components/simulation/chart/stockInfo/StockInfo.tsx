import Icons from '@/app/components/common/Icons';
import { infoIcon } from '@/app/constants/iconPath';
import { STOCK_INFO_TEXT } from '@/app/constants/simulation';
import useStockStore from '@/app/store/store';
import { callGet } from '@/app/utils/callApi';
import { getTodayDateBar } from '@/app/utils/date';
import { formatNumberCommas } from '@/app/utils/formatNum';
import { formatStockData } from '@/app/utils/formatStock';
import { plusUnit } from '@/app/utils/truncate';
import { useEffect, useRef, useState } from 'react';
import { useHover } from 'usehooks-ts';
import StockGuideModal from './StockGuideModal';

const StockInfo = () => {
  const [stockInfo, setStockInfo] = useState<null | StockDetailInfoTypes>(null);
  const [hoverRefs, setHoverRefs] = useState<(HTMLDivElement | null)[]>([]);
  const { stockCode } = useStockStore();

  const getStockDetail = async () => {
    const date = getTodayDateBar();
    const response = await callGet(
      `api/stocks/info?code=${stockCode}&date=${date}`,
    );
    setStockInfo(response.result);
  };

  useEffect(() => {
    setHoverRefs((prev) => STOCK_INFO_TEXT.map(() => null));
    getStockDetail();
  }, [stockCode]);

  const StockInfoArr = stockInfo ? formatStockData(stockInfo) : [];

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
            <div className="gap-x-1 w-fit flex-auto flex items-center h-[26px] px-2 py-1 bg-gray-5 rounded-lg">
              <p className="text-xs text-black-1">{info}</p>
              <div className="relative flex w-[13px] h-[13px]" ref={hoverRef}>
                <Icons name={infoIcon} />
                {isHover && <StockGuideModal index={i} />}
              </div>
            </div>
            <div className="text-xs pl-1 font-medium flex gap-x-1 h-5">
              <p
                className={`${i === 5 && (Number(info) > 0 ? 'text-red-1' : 'text-blue-1')}`}
              >
                {formatNumberCommas(Number(StockInfoArr[i]))}
              </p>
              <p>{plusUnit(i)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StockInfo;
