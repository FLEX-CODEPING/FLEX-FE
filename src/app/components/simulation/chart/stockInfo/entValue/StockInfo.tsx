import { STOCKINFO_TITLE } from '@/app/constants/simulation';
import useStockStore from '@/app/store/store';
import { callGet } from '@/app/utils/callApi';
import { getTodayDateBar } from '@/app/utils/date';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import EntValue from './EntValue';
import StockDetail from './StockDetail';

const StockInfo = () => {
  const [stockInfo, setStockInfo] = useState<null | StockDetailInfoTypes>(null);
  const [infoType, setInfoType] = useState('종목정보');
  const { stockCode } = useStockStore();

  useEffect(() => {
    const getStockDetail = async () => {
      const date = getTodayDateBar();
      const response = await callGet(
        `api/stocks/info?code=${stockCode}&date=${date}`,
      );
      setStockInfo(response.result);
    };

    getStockDetail();
  }, [stockCode]);

  return (
    <div className="w-full flex">
      <div className="w-[60%] flex flex-col gap-y-4">
        <div className="flex">
          {STOCKINFO_TITLE.map((title) => (
            <div
              className={`w-[64px] relative h-[22px] pb-1 flex-center text-[13px] cursor-pointer `}
              onClick={() => setInfoType(title)}
              key={title}
            >
              {title}
              {title === infoType && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-black-1"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
              )}
            </div>
          ))}
        </div>
        {infoType === '종목정보'
          ? stockInfo && <StockDetail data={stockInfo} />
          : stockInfo && <EntValue />}
      </div>
      <div className="w-[1px] h-full border-r border-gray-2" />
      {/* <TradeRecord /> */}
    </div>
  );
};

export default StockInfo;
