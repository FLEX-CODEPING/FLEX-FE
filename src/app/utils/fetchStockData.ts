import { callPost } from '@/app/utils/callApi';
import { getTodayDate, switchDateFunc } from '@/app/utils/date';
import { DAY_DIVCODE_MAP } from '../constants/simulation';

export const fetchInitialData = async (stockCode: string) => {
  const arrData: MinPriceTypes[] = [];
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
    const newReqBody = {
      date: lastItem.tradingDate,
      stockCode,
      time: (Number(lastItem.transactionTime) - 100).toString(),
    };

    const newResponse = await callPost('/api/stocks/price/minute', newReqBody);
    const newData = newResponse.result.output2;

    if (newData.length > 0) {
      currentData = [...currentData, ...newData];
      arrData.push(...newData);
      requestCount++;
    } else {
      isDataAvailable = false;
    }
  }

  return arrData;
};

export const fetchAdditionalData = async (
  data: MinPriceTypes[],
  stockCode: string,
) => {
  if (data.length === 0) return [];

  const additionalData = [...data];
  const lastItem = additionalData[data.length - 1];

  const { tradingDate: date, transactionTime: time } = lastItem;
  const beforeHM = (Number(time) - 100).toString();
  const newReqBody = {
    date,
    stockCode,
    time: beforeHM,
  };

  const newResponse = await callPost('/api/stocks/price/minute', newReqBody);
  const newData = newResponse.result.output2;
  return newData;
};

export const fetchInitialDay = async (stockCode: string, dayType: string) => {
  const reqBody = {
    marketDivCode: 'J',
    stockCode: stockCode,
    dateFrom: switchDateFunc(dayType),
    dateTo: getTodayDate(),
    periodDivCode: DAY_DIVCODE_MAP[dayType],
    orgAdjPrice: 0,
  };
  console.log(reqBody, '현재요청 바디');
  
  const response = await callPost('/api/stocks/price', reqBody);
  return response;
};
