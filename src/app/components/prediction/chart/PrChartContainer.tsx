'use client';

import { CHART_TITLE, CHART_VIEWTYPE } from '@/app/constants/simulation';
import { useState } from 'react';
import StockChart from './PrChart';
import ChartEmpty from '../../simulation/chart/ChartEmpty';

const timeOptions = ['1분', '15분', '1시간', '4시간', '일'] as const;
type TimeOption = (typeof timeOptions)[number];

const ChartContainer = () => {
  const [clickedType, setClickedType] = useState<ChartViewType>('일');
  const [selectedTime, setSelectedTime] = useState<TimeOption>('1분');
  const [chartData, setChartData] = useState([]);
  const [predictionData, setPredictionData] = useState<{
    dates: string[];
    predictions: number[];
  } | null>(null);

  return (
    <div className="flex w-full px-10 py-5 rounded-[10px] border border-gray-4 flex-col justify-start items-start gap-y-10">
      <div className="flex w-full justify-between items-center">
        <p className="text-xl font-semibold">{CHART_TITLE}</p>

        <div className="flex gap-x-3 items-center">
          <div className="flex gap-x-2 items-center">
            {CHART_VIEWTYPE.map((viewType) => (
              <div
                key={viewType}
                className={`w-[25px] h-[25px] text-sm font-medium rounded-lg border border-gray-4 flex-center cursor-pointer ${
                  clickedType === viewType && 'bg-main-1 text-white border-none'
                }`}
                onClick={() => setClickedType(viewType)}
              >
                {viewType}
              </div>
            ))}

            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value as TimeOption)}
              className="ml-2 p-1 border rounded"
            >
              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            className="px-4 py-1 border rounded text-sm bg-gray-100 hover:bg-gray-200"
          >
            보조지표
          </button>
        </div>
      </div>

      <div className="w-full">
        {chartData.length === 0 ? (
          <StockChart
            viewType={clickedType}
            timeFrame={selectedTime}
            predictionData={predictionData}
          />
        ) : (
          <ChartEmpty />
        )}
      </div>
    </div>
  );
};

export default ChartContainer;
