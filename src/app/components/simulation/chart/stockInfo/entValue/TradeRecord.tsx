import { STOCK_TRADE_TEXT } from '@/app/constants/simulation';
import useStockStore from '@/app/store/store';
import { callPost } from '@/app/utils/callApi';
import { getTodayAndSixMonthsAgo } from '@/app/utils/date';
import { formatNumberCommas } from '@/app/utils/formatNum';
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
      <p className="w-full flex pl-2 font-medium">거래현황</p>
      <div className="flex border-b border-gray-2 pb-0.5">
        <div className="flex w-full">
          <p className="w-[24%] flex-center">{STOCK_TRADE_TEXT[0]}</p>
          {STOCK_TRADE_TEXT.slice(1, 3).map((text, i) => (
            <p className="w-[38%] flex-center">{text}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full max-h-[180px] overflow-y-auto gap-y-2">
        {record?.output2.map((data) => (
          <div className="text-xs font-medium flex w-full">
            <p className="flex-center font-light w-[24%]">{data.tradingDate}</p>
            <p className="flex-center w-[38%]">
              {formatNumberCommas(data.dailyBuyVolume)}
            </p>
            <p className="flex-center w-[38%]">
              {formatNumberCommas(data.dailySellVolume)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradeRecord;
