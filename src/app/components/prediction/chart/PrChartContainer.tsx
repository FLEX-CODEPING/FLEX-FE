'use client';

import {
  useInvalidateStockData,
  useStockData,
} from '@/app/hooks/useStockChart';
import useStockStore, { useLiveDataStore } from '@/app/store/store';
import { isOpenTime } from '@/app/utils/date';
import { useState } from 'react';
import DayChart from '../../simulation/chart/DayChart';
import MinChart from '../../simulation/chart/MinChart';
import WebSocketChart from '../../simulation/chart/SocketChart';
import ChartEmpty from './PrChartEmpty';

const ChartContainer = () => {
  const { liveData } = useLiveDataStore();
  const { stockCode } = useStockStore();
  const [isLack, setIsLack] = useState(false);
  const [timeFrame, setTimeFrame] = useState<number | string>(1);
  const isDay = typeof timeFrame === 'string';
  const isOpen = isOpenTime();

  const { data, isLoading, fetchAdditionalData, isFetchingAdditionalData } =
    useStockData(stockCode, timeFrame);

  const { invalidateMinData } = useInvalidateStockData();

  const handleRefresh = () => {
    fetchAdditionalData();
    if (stockCode) {
      invalidateMinData(stockCode);
    }
  };

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
