'use client';

<<<<<<< HEAD
import React from 'react';
=======
import useStockStore from '@/app/store/store';
import { callPost } from '@/app/utils/callApi';
import Button from '@/app/components/common/Button';
import { useCallback, useEffect, useState } from 'react';
import PrChartEmpty from './PrChartEmpty';
>>>>>>> 9775722308a1d214ac8f91e06cc8e4fb15c95732
import PrChart from './PrChart';

const PrChartContainer = () => {
  const [data, setData] = useState<any[]>([]);
  const { stockCode } = useStockStore();

  // const addFutureData = () => {
  //   const startDate = new Date(2024, 11, 9);

  //   const futureData = [];
  //   for (let i = 1; i <= 10; i++) {
  //     const futureDate = new Date(startDate);
  //     futureDate.setDate(startDate.getDate() + i);

  //     const formattedDate = `${futureDate.getFullYear()}${String(
  //       futureDate.getMonth() + 1,
  //     ).padStart(2, '0')}${String(futureDate.getDate()).padStart(2, '0')}`;

  //     futureData.push({
  //       stck_bsop_date: String(formattedDate),
  //       stck_oprc: String(Math.floor(Math.random() * 1000 + 24000)), // 랜덤 데이터 예시
  //       stck_hgpr: String(Math.floor(Math.random() * 1000 + 25000)),
  //       stck_lwpr: String(Math.floor(Math.random() * 1000 + 23900)),
  //       stck_clpr: String(Math.floor(Math.random() * 1000 + 24000)),
  //       acml_vol: Math.floor(Math.random() * 1000),
  //     });
  //   }
  //   console.log(futureData,'생성된 추가 데이터');

  //   setData((prevData) => [...prevData, ...futureData]); // 기존 데이터에 추가
  // };

  // console.log(data, '합쳐진 데이터');

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
      {/* <Button
            buttonText="5일 추가 데이터 생성"
            type="default"
            onClickHandler={addFutureData} // 버튼 클릭 시 5일 데이터 추가
            className="mt-5"
          /> */}
      {!stockCode || stockCode === 'null' ? (
        <PrChartEmpty />
      ) : (
        <PrChart chartData={data} symbol={stockCode || '005930'} />
      )}
    </div>
  );
};

export default PrChartContainer;
