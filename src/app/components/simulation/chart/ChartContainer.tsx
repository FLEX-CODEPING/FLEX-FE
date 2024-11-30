'use client';

import { CHART_TITLE, CHART_VIEWTYPE } from '@/app/constants/simulation';
import { useState } from 'react';
import ChartEmpty from './ChartEmpty';
import { StockChart } from './StockChart';
import useStockStore from '@/app/store/store';

const ChartContainer = () => {
  const [viewType, setViewType] = useState<ChartViewType>('일');
  const { stockCode } = useStockStore();

  return (
    <div className="flex w-full px-5 py-5 rounded-[10px] border border-gray-4 flex-col justify-start items-start gap-y-5">
      <div className="flex w-full justify-between">
        <div className="px-3 h-9 p-1 flex-center font-medium text-lg">
          {CHART_TITLE[0]}
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
      {!stockCode || stockCode === 'null' ? <ChartEmpty /> : <StockChart />}
    </div>
  );
};

export default ChartContainer;
