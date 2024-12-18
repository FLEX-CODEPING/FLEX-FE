'use client';

import useStockStore from '@/app/store/store';
import { callPost } from '@/app/utils/callApi';
import { useCallback, useEffect, useState } from 'react';
import WebSocketChart from '../../simulation/chart/SocketChart';
import PrChart from './PrChart';
import PrChartEmpty from './PrChartEmpty';

const PrChartContainer = () => {
  const [data, setData] = useState<any[]>([]);
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
    let currentDateFrom = '20240101';

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

  return (
    <div className="flex w-full px-5 py-5 rounded-[10px] border border-gray-4 flex-col justify-start items-start gap-y-5">
      {!stockCode || stockCode === 'null' ? (
        <PrChartEmpty />
      ) : (
        <PrChart chartData={data} symbol={stockCode || '005930'} />
      )}
      {stockCode && <WebSocketChart stockCode={stockCode} />}
    </div>
  );
};

export default PrChartContainer;
