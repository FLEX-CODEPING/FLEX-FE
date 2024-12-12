'use client';

import useStockStore from '@/app/store/store';
import {
  fetchAdditionalData,
  fetchInitialData,
  fetchInitialDay,
} from '@/app/utils/fetchStockData';
import { useEffect, useState } from 'react';
import ChartEmpty from './ChartEmpty';
import DayChart from './DayChart';
import MinChart from './MinChart';

const ChartContainer = () => {
  const [data, setData] = useState<MinPriceTypes[]>([]);
  const [datas, setDatas] = useState([]);
  const { stockCode } = useStockStore();
  const [isLack, setIsLack] = useState(false);
  const [timeFrame, setTimeFrame] = useState<number | string>(1);

  const isDay = typeof timeFrame === 'string';

  useEffect(() => {
    const fetchData = async () => {
      if (!stockCode) return;
      const initialData = isDay
        ? await fetchInitialDay(stockCode, timeFrame)
        : await fetchInitialData(stockCode);
      setDatas(initialData);
    };

    fetchData();
  }, [stockCode, timeFrame]);

  console.log(datas);

  useEffect(() => {
    const fetchMoreData = async () => {
      if (!isLack || !stockCode) return;

      const additionalData = await fetchAdditionalData(data, stockCode);
      setData((prev) => [...prev, ...additionalData]);
      setIsLack(false);
    };

    fetchMoreData();
  }, [isLack]);

  return (
    <div className="flex w-full px-3 py-3 rounded-[10px] border border-gray-4 flex-col justify-start items-start gap-y-5">
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
        />
      )}
      {/* <WebSocketChart stockCode={stockCode} /> */}
    </div>
  );
};

export default ChartContainer;
