import { STOCKINFO_TITLE } from '@/app/constants/simulation';
import useStockStore from '@/app/store/store';
import { callGet } from '@/app/utils/callApi';
import { getTodayDateBar } from '@/app/utils/date';
import { useEffect, useState } from 'react';
import EntValue from './EntValue';
import StockDetail from './StockDetail';

const StockInfo = () => {
  const [stockInfo, setStockInfo] = useState<null | StockDetailInfoTypes>(null);
  const [infoType, setInfoType] = useState('종목정보');
  const { stockCode } = useStockStore();
  const getStockDetail = async () => {
    const date = getTodayDateBar();
    const response = await callGet(
      `api/stocks/info?code=${stockCode}&date=${date}`,
    );
    setStockInfo(response.result);
  };

  useEffect(() => {
    getStockDetail();
  }, [stockCode]);

  return (
    <div className="flex flex-wrap w-full gap-y-4">
      <div className="flex">
        {STOCKINFO_TITLE.map((title) => (
          <div
            className={`w-[64px] h-[22px] flex-center text-[13px] cursor-pointer ${title === infoType && 'box-border font-medium border-b-black-0 border-b pb-0'}`}
            onClick={() => setInfoType(title)}
            key={title}
          >
            {title}
          </div>
        ))}
      </div>
      <div className="w-[67%]">
        {/* {infoType === '종목정보'
        ? stockInfo && <StockDetail data={stockInfo} />
        : stockInfo && <EntValue data={stockInfo} />} */}
        {infoType === '종목정보' ? (
          <StockDetail data={stockInfo} />
        ) : (
          <EntValue data={stockInfo} />
        )}
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default StockInfo;
