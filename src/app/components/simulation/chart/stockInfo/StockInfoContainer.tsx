import { STOCK_INFO_TITLE } from '@/app/constants/simulation';
import useStockStore from '@/app/store/store';
import { useState } from 'react';
import ActiveStockInfo from './ActiveStockInfo';
import StockInfoEmpty from './StockInfoEmpty';

const StockInfoContainer = () => {
  const [infoType, setInfoType] = useState('종목정보');
  const { stockCode } = useStockStore();

  return (
    <div className="flex-col flex py-6 mb-8 px-5 w-full text-black-0 gap-y-5 rounded-[10px] border border-gray-4  dark:border-black-1 dark:text-gray-2 ">
      <div className="flex items-center gap-y-2 text-[15px]">
        {STOCK_INFO_TITLE.map((title, i) => (
          <div
            key={title}
            onClick={() => setInfoType(title)}
            className={`w-[76px] h-8 text-black-0 dark:text-gray-3  flex-center cursor-pointer font-light ${infoType === title && 'bg-gray-5 dark:bg-black-1 dark:text-black-1  font-medium rounded-lg'}`}
          >
            {title}
          </div>
        ))}
      </div>
      {!stockCode || stockCode === 'null' ? (
        <StockInfoEmpty />
      ) : (
        <ActiveStockInfo chartType={infoType} />
      )}
    </div>
  );
};

export default StockInfoContainer;
