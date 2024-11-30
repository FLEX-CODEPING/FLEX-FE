import {
  FINANCIALINTO_TITLE,
  STOCK_INFO_TEXT,
} from '@/app/constants/simulation';
import useStockStore from '@/app/store/store';
import { callGet } from '@/app/utils/callApi';
import { getTodayDateBar } from '@/app/utils/date';
import { formatStockData } from '@/app/utils/formatStock';
import { useEffect, useState } from 'react';

const FinancialInfo = () => {
  const [stockInfo, setStockInfo] = useState<null | StockDetailInfoTypes>(null);
  const [hoverRefs, setHoverRefs] = useState<(HTMLDivElement | null)[]>([]);
  const [infoType, setInfoType] = useState('손익계산');
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
      {FINANCIALINTO_TITLE.map((title) => (
        <div
          className={`w-[64px] h-[22px] pb-0.5 flex-center text-[13px] ${title === infoType && 'font-medium underline'}`}
          onClick={() => setInfoType(title)}
          key={title}
        >
          {title}
        </div>
      ))}
    </div>
  );
};

export default FinancialInfo;
