'use client';

import useStockStore from '@/app/store/store';
import { fetchInitialData, fetchInitialDay } from '@/app/utils/fetchStockData';
import { useEffect, useState } from 'react';
import ChartEmpty from './ChartEmpty';
import DayChart from './DayChart';
import MinChart from './MinChart';

const ChartContainer = () => {
  const [mindata, setMinData] = useState<MinPriceTypes[]>([]);
  const [dailyData, setDailyData] = useState<DailyPriceTypes[]>([]);
  const { stockCode } = useStockStore();
  const [isLack, setIsLack] = useState(false);
  const [timeFrame, setTimeFrame] = useState<number | string>(1);

  const isDay = typeof timeFrame === 'string';

  useEffect(() => {
    const fetchData = async () => {
      if (!stockCode) return;
      if (isDay) {
        const initData = await fetchInitialDay(stockCode, timeFrame);
        setDailyData(initData.result[1]);
      } else {
        const initData = await fetchInitialData(stockCode);
        setMinData(initData);
      }
    };
    fetchData();
  }, [stockCode, timeFrame]);
  console.log(dailyData, '일주월연 데이터');
  console.log(isDay, '이즈 데이 값');
  console.log(mindata, '분봉 데이터');

  // useEffect(() => {
  //   const fetchMoreData = async () => {
  //     if (!isLack || !stockCode) return;

  //     const additionalData = await fetchAdditionalData(data, stockCode);
  //     setData((prev) => [...prev, ...additionalData]);
  //     setIsLack(false);
  //   };

  //   fetchMoreData();
  // }, [isLack]);

  return (
    <div className="flex w-full px-3 py-3 rounded-[10px] border border-gray-4 flex-col justify-start items-start gap-y-5">
      {!stockCode || stockCode === 'null' ? (
        <ChartEmpty />
      ) : isDay ? (
        <DayChart
          data={dailyData}
          isLack={isLack}
          setIsLack={setIsLack}
          timeFrame={timeFrame}
          setTimeFrame={setTimeFrame}
        />
      ) : (
        <MinChart
          data={mindata}
          isLack={isLack}
          setIsLack={setIsLack}
          timeFrame={timeFrame}
          setTimeFrame={setTimeFrame}
        />
      )}
      {/* <WebSocketChart stockCode={stockCode} /> */}
    </div>
  );
};

export default ChartContainer;
