'use client';

import useStockStore from '@/app/store/store';
import { callPost } from '@/app/utils/callApi';
import { getTodayDate } from '@/app/utils/date';
import { useEffect, useState } from 'react';
import ChartEmpty from './ChartEmpty';
import MockChart from './MockChart';

const ChartContainer = () => {
  const [data, setData] = useState<MinPriceTypes[]>([]);
  const { stockCode, stockName } = useStockStore();

  const fetchData = async (count: number) => {
    const allData: MinPriceTypes[] = [];
    for (let i = 0; i < count; i++) {
      const reqBody = {
        date: getTodayDate(),
        stockCode,
        time: '153000',
      };
      const response = await callPost('/api/stocks/price/minute', reqBody);

      allData.push(...response.result.output2);
    }
    setData((prevData) => [...prevData, ...allData]);
  };

  useEffect(() => {
    stockCode && fetchData(3);
  }, [stockCode]);

  return (
    <div className="flex w-full px-5 py-5 rounded-[10px] border border-gray-4 flex-col justify-start items-start gap-y-5">
      {!stockCode || stockCode === 'null' ? (
        <ChartEmpty />
      ) : (
        <MockChart chartData={data} symbol={stockName} />
      )}
    </div>
  );
};

export default ChartContainer;
