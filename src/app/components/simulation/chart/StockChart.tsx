'use client';

import dynamic from 'next/dynamic';
import { Dispatch, SetStateAction } from 'react';

interface StockChartProps {
  chartData: any;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export function StockChart({ chartData, value, setValue }: StockChartProps) {
  const formattedData = chartData[1].map((data: any) => ({
    x: data.stck_bsop_date,
    y: [data.stck_oprc, data.stck_hgpr, data.stck_lwpr, data.stck_clpr],
  }));

  return (
    <div className="w-full flex flex-col">
      <ApexChart
        type="candlestick"
        series={[
          {
            data: formattedData,
          },
        ]}
        width="100%"
        height={300}
        options={{
          theme: {
            mode: 'light',
          },
          chart: {
            toolbar: {
              tools: {},
            },
            background: 'transparent',
            events: {
              mouseMove: (event, chartContext, config) => {
                if (config.dataPointIndex !== -1) {
                  const dataIndex = config.dataPointIndex;
                  const seriesIndex = config.seriesIndex;
                  const hoveredData =
                    config.config.series[seriesIndex].data[dataIndex];
                  setValue(
                    `Date: ${hoveredData.x}, Open: ${hoveredData.y[0]}, High: ${hoveredData.y[1]}, Low: ${hoveredData.y[2]}, Close: ${hoveredData.y[3]}`,
                  );
                } else {
                  setValue('');
                }
              },
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
