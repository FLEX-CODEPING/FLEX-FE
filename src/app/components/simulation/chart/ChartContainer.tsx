'use client';

import useStockStore from '@/app/store/store';
import { isOpenTime } from '@/app/utils/date';
import { fetchInitialData, fetchInitialDay } from '@/app/utils/fetchStockData';
import { useEffect, useState } from 'react';
import ChartEmpty from './ChartEmpty';
import DayChart from './DayChart';
import MinChart from './MinChart';
import WebSocketChart from './SocketChart';

const ChartContainer = () => {
  const [mindata, setMinData] = useState<MinPriceTypes[]>([]);
  const [dailyData, setDailyData] = useState<DailyPriceTypes[]>([]);
  const [liveData, setLiveData] = useState<ChartDataTypes | null>(null);
  const { stockCode } = useStockStore();
  const [isLack, setIsLack] = useState(false);
  const [timeFrame, setTimeFrame] = useState<number | string>(1);

  const isDay = typeof timeFrame === 'string';
  const isOpen = isOpenTime();

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
  console.log(liveData, '라이브데이터 변환');
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
          liveData={liveData}
        />
      ) : (
        <MinChart
          data={mindata}
          isLack={isLack}
          setIsLack={setIsLack}
          timeFrame={timeFrame}
          setTimeFrame={setTimeFrame}
          liveData={liveData}
        />
      )}
      {isOpen && (
        <WebSocketChart stockCode={stockCode} setLiveData={setLiveData} />
      )}
    </div>
  );
};

export default ChartContainer;
