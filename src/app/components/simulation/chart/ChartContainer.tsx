'use client';

import { useStockData } from '@/app/hooks/useStockChart';
import useStockStore, { useLiveDataStore } from '@/app/store/store';
import { isOpenTime } from '@/app/utils/date';
import { useEffect, useState } from 'react';
import ChartEmpty from './ChartEmpty';
import DayChart from './DayChart';
import MinChart from './MinChart';
import WebSocketChart from './SocketChart';

const ChartContainer = () => {
  const { liveData } = useLiveDataStore();
  const { stockCode } = useStockStore();
  const [isLack, setIsLack] = useState(false);
  const [timeFrame, setTimeFrame] = useState<number | string>(1);
  const isDay = typeof timeFrame === 'string';
  const isOpen = isOpenTime();

  const { data, fetchAdditionalData } = useStockData(stockCode, timeFrame);

  useEffect(() => {
    if (!isLack || !stockCode) return;
    fetchAdditionalData();
    setIsLack(false);
  }, [isLack, stockCode]);

  return (
    <div className="flex w-full px-3 py-3 rounded-[10px] border border-gray-4 dark:border-black-1 flex-col justify-start items-start gap-y-5 dark:bg-black-0 dark:text-gray-4">
      {!stockCode || stockCode === 'null' ? (
        <ChartEmpty />
      ) : isDay ? (
        <DayChart
          data={data}
          isLack={isLack}
          setIsLack={setIsLack}
          timeFrame={timeFrame}
          setTimeFrame={setTimeFrame}
        />
      ) : (
        <MinChart
          data={data}
          isLack={isLack}
          setIsLack={setIsLack}
          timeFrame={timeFrame}
          setTimeFrame={setTimeFrame}
          liveData={liveData}
        />
      )}
      {isOpen && !isDay && <WebSocketChart stockCode={stockCode} />}
    </div>
  );
};

export default ChartContainer;
