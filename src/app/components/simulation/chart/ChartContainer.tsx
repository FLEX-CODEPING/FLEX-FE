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
  const [isLack, setIsLack] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가

  console.log(data);

  const fetchData = async () => {
    const arrData = [];
    const reqBody = {
      date: getTodayDate(),
      stockCode,
      time: '153000',
    };
    console.log(isLack, '현재 lack값ㄴ');
    console.log(isLack, '현재 lack값ㄴ');

    const response = await callPost('/api/stocks/price/minute', reqBody);
    let currentData = response.result.output2;
    arrData.push(...currentData);

    let requestCount = 1;
    let isDataAvailable = true;

    while (isDataAvailable && requestCount < 3) {
      const lastItem = currentData[currentData.length - 1];
      const newReqBody = {
        date: lastItem.tradingDate,
        stockCode,
        time: (Number(lastItem.transactionTime) - 100).toString(),
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
  console.log(data, '바뀐 데이터 상탠');

  const fetchAdditionalData = async () => {
    if (data.length === 0) return;

    let additionalData = [...data];
    const lastItem = additionalData[data.length - 1];
    console.log(lastItem, '마지막 아이템');

    let { tradingDate: date, transactionTime: time } = lastItem;
    const beforeDate = (Number(date) - 1).toString();
    const newReqBody = {
      date: beforeDate,
      stockCode,
      time: '153000',
    };
    console.log(newReqBody, ' 새 요청 바디');

    const newResponse = await callPost('/api/stocks/price/minute', newReqBody);
    const newData = newResponse.result.output2;
    console.log(newData, '새로요청 배열 아이템');

    let requestCount = 0;
    let isDataAvailable = true;
    setData([...additionalData, ...newData]);

    // while (isDataAvailable && requestCount < 2) {
    //   const newReqBody = {
    //     date,
    //     stockCode,
    //     time: beforeTime,
    //   };

    //   const newResponse = await callPost(
    //     '/api/stocks/price/minute',
    //     newReqBody,
    //   );
    //   const newData = newResponse.result.output2;
    //   console.log(newData, '새로요청 배열 아이템');

    //   if (newData.length > 0) {
    //     additionalData = [...newData, ...additionalData]; // 새로운 데이터를 기존 데이터 앞에 추가
    //     const earliestItem = newData[0]; // 가장 이른 데이터로 업데이트
    //     date = earliestItem.tradingDate;
    //     time = earliestItem.transactionTime;
    //     requestCount++;
    //   } else {
    //     isDataAvailable = false; // 더 이상 데이터가 없을 경우 종료
    //   }
    // }

    // setData(additionalData); // 새로운 데이터를 state에 업데이트
    setIsLack(false); // 데이터 요청이 완료되었으므로 상태를 초기화
  };

  useEffect(() => {
    if (stockCode) {
      fetchData();
    }
  }, [stockCode]);

  useEffect(() => {
    if (isLack) {
      fetchAdditionalData();
    }
  }, [isLack]);

  return (
    <div className="flex w-full px-5 py-5 rounded-[10px] border border-gray-4 flex-col justify-start items-start gap-y-5">
      {!stockCode || stockCode === 'null' ? (
        <ChartEmpty />
      ) : (
        <SimulChart data={data} isLack={isLack} setIsLack={setIsLack} />
      )}
    </div>
  );
};

export default ChartContainer;
