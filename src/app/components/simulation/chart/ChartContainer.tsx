'use client';

import useStockStore from '@/app/store/store';
import { callPost } from '@/app/utils/callApi';
import { getTodayDate } from '@/app/utils/date';
import { useEffect, useState } from 'react';
import ChartEmpty from './ChartEmpty';
import SimulChart from './SimulChart';

const ChartContainer = () => {
  const [data, setData] = useState<MinPriceTypes[]>([]);
  const { stockCode, stockName } = useStockStore();
  console.log(data);

  const fetchData = async () => {
    const arrData = [];
    const reqBody = {
      date: getTodayDate(),
      stockCode,
      time: '153000',
    };

    const response = await callPost('/api/stocks/price/minute', reqBody);
    let currentData = response.result.output2;
    arrData.push(...currentData);

    let requestCount = 1;
    let isDataAvailable = true;

    while (isDataAvailable && requestCount < 3) {
      const lastItem = currentData[currentData.length - 1];
      let { tradingDate: date, transactionTime: time } = lastItem;
      const beforeTime = (Number(time) - 100).toString();
      const newReqBody = {
        date,
        stockCode,
        time: beforeTime,
      };

      const newResponse = await callPost(
        '/api/stocks/price/minute',
        newReqBody,
      );
      const newData = newResponse.result.output2;

      if (newData.length > 0) {
        currentData = [...currentData, ...newData];
        arrData.push(...newData);
        requestCount++;
      } else {
        isDataAvailable = false;
      }
    }
    setData(arrData);
  };

  useEffect(() => {
    stockCode && fetchData();
  }, [stockCode]);

  return (
    <div className="flex w-full px-5 py-5 rounded-[10px] border border-gray-4 flex-col justify-start items-start gap-y-5">
      {!stockCode || stockCode === 'null' ? (
        <ChartEmpty />
      ) : (
        <SimulChart data={data} />
      )}
    </div>
  );
};

export default ChartContainer;
