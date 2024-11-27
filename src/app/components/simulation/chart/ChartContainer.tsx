'use client';

import { CHART_TITLE, CHART_VIEWTYPE } from '@/app/constants/simulation';
import useStockCodeStore from '@/app/store/store';
import { useState } from 'react';
import ActiveChart from './ActiveChart';
import ChartEmpty from './ChartEmpty';

const ChartContainer = () => {
  const [viewType, setViewType] = useState<ChartViewType>('일');
  const [chartData, setChartData] = useState([]);
  const [chartType, setChartTypes] = useState('차트');
  const { stockCode, stockName } = useStockCodeStore();

  return (
    <div className="flex w-full px-5 pt-5 pb-9 rounded-[10px] border border-gray-4 flex-col justify-start items-start gap-y-5">
      <div className="flex w-full justify-between">
        <div className="text-lg flex gap-x-1">
          {CHART_TITLE.map((title: string) => (
            <div
              key={title}
              className={`px-3 h-9 p-1 flex-center cursor-pointer ${chartType === title ? 'bg-gray-100 rounded-xl text-black-0 font-medium' : 'text-black-1'} `}
              onClick={() => setChartTypes(title)}
            >
              {title}
            </div>
          ))}
        </div>
        {chartType === '차트' && (
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
        )}
      </div>
      {!stockCode || stockCode === 'null' ? (
        <ChartEmpty />
      ) : (
        <ActiveChart chartType={chartType} />
      )}
    </div>
  );
};

export default ChartContainer;
