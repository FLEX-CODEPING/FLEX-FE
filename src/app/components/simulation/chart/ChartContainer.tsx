'use client';

import useStockStore from '@/app/store/store';
import { callPost } from '@/app/utils/callApi';
import { useCallback, useEffect, useState } from 'react';
import MockChart from './MockChart';

const ChartContainer = () => {
  const [data, setData] = useState<any[]>([]);
  const [symbol, setSymbol] = useState('005930');
  const { stockCode } = useStockStore();

  const fetchData = useCallback(async () => {
    const reqBodyTemplate = {
      marketDivCode: 'J',
      stockCode,
      periodDivCode: 'D',
      orgAdjPrice: 0,
    };

    const batchDays = 100;
    const allRequests = [];
    let currentDateFrom = '20220101';

    while (currentDateFrom <= '20241231') {
      const startDate = new Date(
        `${currentDateFrom.slice(0, 4)}-${currentDateFrom.slice(4, 6)}-${currentDateFrom.slice(6)}`,
      );

      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + batchDays - 1);
      const currentDateTo = Math.min(
        parseInt(endDate.toISOString().split('T')[0].replace(/-/g, ''), 10),
        20241231,
      ).toString();

      const request = ((dateFrom, dateTo) => {
        const reqBody = {
          ...reqBodyTemplate,
          dateFrom,
          dateTo,
        };

        return callPost('/api/stocks/price', reqBody)
          .then((response) => {
            if (response?.result && response.result[1].length > 0) {
              return response.result[1];
            }
            return [];
          })
          .catch((error) => {
            console.error(
              `Error fetching data for ${dateFrom} - ${dateTo}:`,
              error,
            );
            return [];
          });
      })(currentDateFrom, currentDateTo);

      allRequests.push(request);

      const nextStartDate = new Date(endDate);
      nextStartDate.setDate(nextStartDate.getDate() + 1);
      currentDateFrom = nextStartDate
        .toISOString()
        .split('T')[0]
        .replace(/-/g, '');
    }

    const allData = (await Promise.all(allRequests)).flat();
    setData(allData);
  }, [stockCode]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleGetStockInfo = async (newStockCode: string) => {
    setSymbol(newStockCode);
    await fetchData();
  };

  return (
    <div className="flex w-full px-5 py-5 rounded-[10px] border border-gray-4 flex-col justify-start items-start gap-y-5">
      {/* <div className="flex w-full justify-between">
        <div className="px-3 h-9 p-1 flex-center font-medium text-lg">
          {CHART_TITLE[0]}
          {selectedValue}
        </div>
        <div className="flex gap-x-3">
          {CHART_VIEWTYPE.map((type) => (
            <div
              key={type}
              className={`w-[25px] h-[25px] text-sm font-medium rounded-lg border border-gray-4 flex-center cursor-pointer ${type === viewType && 'bg-main-1 text-white border-none'}`}
              onClick={() => setViewType(type)}
            >
              {type}
            </div>
          ))}
        </div>
      </div> */}
      {!stockCode || stockCode === 'null' ? (
        <MockChart chartData={data} symbol={stockCode} />
      ) : (
        <MockChart chartData={data} symbol={stockCode} />
        // <StockChart chartData={data} value={''} setValue={setSelectedValue} />
      )}
    </div>
  );
};

export default ChartContainer;
