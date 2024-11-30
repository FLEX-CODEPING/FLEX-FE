import { STOCK_INFO_TITLE } from '@/app/constants/simulation';
import useStockCodeStore from '@/app/store/store';
import { useState } from 'react';
import StockInfo from './StockInfo';

const StockInfoContainer = () => {
  const [infoType, setInfoType] = useState('종목정보');
  const { stockCode, stockName } = useStockCodeStore();

  return (
    <div className="flex-col flex py-5 px-10 w-full text-black-0 gap-y-5 rounded-[10px] border border-gray-4">
      <div className="flex items-center gap-y-2 text-[15px]">
        {STOCK_INFO_TITLE.map((title, i) => (
          <div
            onClick={() => setInfoType(title)}
            className={`w-[76px] h-8 text-black-0 flex-center cursor-pointer font-light ${infoType === title && 'bg-gray-5 font-medium rounded-lg'}`}
          >
            {title}
          </div>
        ))}
      </div>
      <StockInfo />
    </div>
  );
};

export default StockInfoContainer;
