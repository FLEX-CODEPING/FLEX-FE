'use client';

import { CHART_TITLE, CHART_VIEWTYPE } from '@/app/constants/simulation';
import { useState } from 'react';
import axios from 'axios';
import StockChart from './Chart';
import ChartEmpty from './ChartEmpty';

const timeOptions = ['1분', '15분', '1시간', '4시간', '일'] as const;

type TimeOption = typeof timeOptions[number];

const ChartContainer = () => {
  const [clickedType, setClickedType] = useState<ChartViewType>('일');
  const [selectedTime, setSelectedTime] = useState<TimeOption>('1분');
  const [chartData, setChartData] = useState([]);
  const [selectedPrediction, setSelectedPrediction] = useState<number | null>(null);
  const [predictionData, setPredictionData] = useState<{ dates: string[]; predictions: number[] } | null>(null);

  const handlePredictionClick = async (number: number) => {
    setSelectedPrediction((prev) => (prev === number ? null : number));

    if (selectedPrediction !== number) {
      try {
        const response = await axios.post(`http://127.0.0.1:5000/predict${number}`);
        setPredictionData(response.data);
      } catch (error) {
        console.error('Error fetching prediction data:', error);
      }
    } else {
      setPredictionData(null);
    }
  };

  return (
    <div className="flex w-full px-10 py-5 rounded-[10px] border border-gray-4 flex-col justify-start items-start gap-y-10">
      <div className="flex w-full justify-between">
        <p className="text-xl font-semibold">{CHART_TITLE}</p>
        <div className="flex gap-x-3 items-center">
          <div className="flex items-center border border-orange-500 rounded-full px-4 py-1">
            <p className="font-semibold mr-2">AI 차트 예측</p>
            {[1, 2, 3].map((number) => (
              <div
                key={number}
                onClick={() => handlePredictionClick(number)}
                className={`mx-1 px-3 py-1 rounded-full cursor-pointer ${
                  selectedPrediction === number ? 'bg-orange-500 text-white' : 'bg-gray-100 text-black'
                }`}
              >
                {number}
              </div>
            ))}
          </div>
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
      </div>
      {chartData.length !== 0 ? (
        <ChartEmpty />
      ) : (
        <StockChart viewType={clickedType} timeFrame={selectedTime} predictionData={predictionData} />
      )}
    </div>
  );
};

export default ChartContainer;
