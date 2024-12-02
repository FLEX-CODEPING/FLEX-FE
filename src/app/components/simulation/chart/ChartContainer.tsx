'use client';

import { CHART_TITLE, CHART_VIEWTYPE } from '@/app/constants/simulation';
import useStockStore from '@/app/store/store';
import { callPost } from '@/app/utils/callApi';
import { useEffect, useState } from 'react';
import ChartEmpty from './ChartEmpty';
import { StockChart } from './StockChart';

const ChartContainer = () => {
  const [viewType, setViewType] = useState<ChartViewType>('일');
  const { stockCode } = useStockStore();
  const [data, setData] = useState();
  const [selectedValue, setSelectedValue] = useState('');

  const reqBody: DailyPriceBodyTypes = {
    marketDivCode: 'J',
    stockCode,
    dateFrom: '20180501',
    dateTo: '20241101',
    periodDivCode: 'M',
    orgAdjPrice: 0,
  };

  const getDailyPrice = async () => {
    const response = await callPost('api/stocks/price', reqBody);
    setData(response.result);
  };

  useEffect(() => {
    getDailyPrice();
  }, [stockCode]);
  return (
    <div className="flex w-full px-5 py-5 rounded-[10px] border border-gray-4 flex-col justify-start items-start gap-y-5">
      <div className="flex w-full justify-between">
        <div className="px-3 h-9 p-1 flex-center font-medium text-lg">
          {CHART_TITLE[0]}
          {selectedValue}
        </div>
        <div className="flex gap-x-3">
          {CHART_VIEWTYPE.map((type) => (
            <div
              key={type}
              className={`w-[25px] h-[25px] text-sm font-medium rounded-lg border border-gray-4 flex-center cursor-pointer ${type === viewType && 'bg-main-1 text-white border-none'}`}
              onClick={() => setViewType(type)}
            >
              {type}
            </div>
          ))}
        </div>
      </div>
      {!stockCode || stockCode === 'null' ? (
        <ChartEmpty />
      ) : (
        <StockChart
          chartData={data}
          value={selectedValue}
          setValue={setSelectedValue}
        />
      )}
    </div>
  );
};

export default ChartContainer;
