'use client';

import { CHART_TITLE, CHART_VIEWTYPE } from '@/app/constants/simulation';
import { useState } from 'react';
import StockChart from './PrChart';
import ChartEmpty from '../../simulation/chart/ChartEmpty';

const timeOptions = ['1분', '15분', '1시간', '4시간', '일'] as const;
type TimeOption = (typeof timeOptions)[number];

const PrChartContainer = () => {
  const [clickedType, setClickedType] = useState<ChartViewType>('일');
  const [selectedTime, setSelectedTime] = useState<TimeOption>('1분');
  const [chartData, setChartData] = useState([]);
  const [predictionData, setPredictionData] = useState<{
    dates: string[];
    predictions: number[];
  } | null>(null);

const PrChartContainer = () => {
  return (
    <div className="flex w-full px-10 py-5 rounded-[10px] border border-gray-4 flex-col justify-start items-start">
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

export default PrChartContainer;
