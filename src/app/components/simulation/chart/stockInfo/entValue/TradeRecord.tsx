import { STOCK_TRADE_TEXT } from '@/app/constants/simulation';
import useStockStore from '@/app/store/store';
import { callPost } from '@/app/utils/callApi';
import { getTodayAndSixMonthsAgo } from '@/app/utils/date';
import { useEffect, useState } from 'react';

const TradeRecord = () => {
  const [record, setRecord] = useState<null | TradeRecordTypes>(null);
  const { stockCode } = useStockStore();
  const { today, sixMonthsAgo } = getTodayAndSixMonthsAgo();

  const reqBody = {
    stockCode,
    dateFrom: sixMonthsAgo,
    dateTo: today,
  };

  const getTradeRecord = async () => {
    const response = await callPost(`api/stocks/trade`, reqBody);
    setRecord(response.result);
  };

  useEffect(() => {
    getTradeRecord();
  }, [stockCode]);

  return (
    <div className="flex-1 flex flex-col text-sm text-black-1 gap-y-3 px-2">
      <p className="w-[15%] flex-center font-medium">거래현황</p>
      <div className="flex border-b border-gray-2 pb-0.5">
        <div className="flex w-full">
          <p className="w-[24%] flex-center">{STOCK_TRADE_TEXT[0]}</p>
          {STOCK_TRADE_TEXT.slice(1, 3).map((text, i) => (
            <p className="w-[38%] flex-center">{text}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-col min-h-[130px] w-full">
        {record?.output2.map((record) => (
          <div className="text-xs font-medium">
            <p className="flex-center font-light w-[24%]">
              {record.tradingDate}
            </p>
            <p className="flex-center w-[38%]">{record.dailyBuyVolume}</p>
            <p className="flex-center w-[38%]">{record.dailySellVolume}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradeRecord;
