'use client';

import { CHART_TITLE, CHART_VIEWTYPE } from '@/app/constants/simulation';
import { useState } from 'react';
import StockChart from './Chart';

const ChartContainer = () => {
  const [clickedType, setClickedType] = useState<ChartViewType>('일');
  return (
    <div className="flex w-[66%] h-[683px] px-10 py-5 rounded-[10px] border border-[#7a7a7a] flex-col justify-start items-start gap-y-10">
      <div className="flex w-full justify-between">
        <p className="text-2xl font-bold">{CHART_TITLE}</p>
        <div className="flex gap-x-3">
          {CHART_VIEWTYPE.map((viewType, i) => (
            <div
              className={`w-[25px] h-[25px] text-sm font-medium rounded-lg border border-[#7a7a7a] flex-center cursor-pointer ${clickedType === viewType && 'bg-main-1 text-white border-none'}`}
              onClick={() => setClickedType(viewType)}
            >
              {viewType}
            </div>
          ))}
        </div>
      </div>
      <StockChart />
    </div>
  );
};

export default ChartContainer;
