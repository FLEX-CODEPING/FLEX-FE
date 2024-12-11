'use client';

import dynamic from 'next/dynamic';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface StockChartProps {
  data: MinPriceTypes[];
}

export function StockChart({ data }: StockChartProps) {
  console.log(data, '가져온 데이터');
  const transformData = (arr: MinPriceTypes[]): number[][] => {
    return data.map((item) => [
      Number(item.transactionTime.slice(0, 6)),
      Number(item.openPrice),
      Number(item.highPrice),
      Number(item.lowPrice),
      Number(item.curPrice),
    ]);
  };

  const arrData = transformData(data);
  console.log(arrData);

  return (
    <div className="w-full flex flex-col">
      <ApexChart
        type="candlestick"
        series={[
          {
            data: arrData,
          },
        ]}
        height={400}
        options={{
          theme: {
            mode: 'light',
          },
          chart: {
            zoom: {
              enabled: true, // 줌 기능 활성화
            },
            toolbar: {
              show: true,
            },
            background: 'transparent',
          },
          xaxis: {
            type: 'datetime',
            tooltip: {
              enabled: true, // 툴팁 활성화
            },
          },
          plotOptions: {
            candlestick: {
              colors: {
                upward: '#FF0000',
                downward: '#0065D1',
              },
            },
          },
          grid: {
            show: false,
          },
        }}
      />
    </div>
  );
}

export default StockChart;
