'use client';

import { CHART_TITLE, CHART_VIEWTYPE } from '@/app/constants/simulation';
import { useState } from 'react';
import StockChart from './Chart';
import ChartEmpty from './ChartEmpty';

const ChartContainer = () => {
  const [clickedType, setClickedType] = useState<ChartViewType>('일');
  const [chartData, setChartData] = useState([]);
  return (
    <div className="flex w-full px-10 py-5 rounded-[10px] border border-gray-4 flex-col justify-start items-start gap-y-10">
      <div className="flex w-full justify-between">
        <p className="text-xl font-semibold">{CHART_TITLE}</p>
        <div className="flex gap-x-3">
          {CHART_VIEWTYPE.map((viewType, i) => (
            <div
              key={viewType}
              className={`w-[25px] h-[25px] text-sm font-medium rounded-lg border border-gray-4 flex-center cursor-pointer ${clickedType === viewType && 'bg-main-1 text-white border-none'}`}
              onClick={() => setClickedType(viewType)}
            >
              {viewType}
            </div>
          ))}
        </div>
      </div>
      {chartData.length !== 0 ? <ChartEmpty /> : <StockChart />}
    </div>
  );
};

export default ChartContainer;
