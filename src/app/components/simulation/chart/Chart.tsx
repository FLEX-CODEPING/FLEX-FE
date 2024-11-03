'use client';

import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { init, dispose, KLineData } from 'klinecharts';

interface ChartProps {
  viewType: '일' | '주' | '월' | '년';
  timeFrame: keyof typeof intervals;
  predictionData: { dates: string[]; predictions: number[] } | null;
}

const intervals = {
  '1분': 1,
  '15분': 15,
  '1시간': 60,
  '4시간': 240,
  '일': 1440,
} as const;

const periods = {
  일: 1 * 24 * 60,
  주: 7 * 24 * 60,
  월: 30 * 24 * 60,
  년: 365 * 24 * 60,
};

const StockChart: React.FC<ChartProps> = ({ viewType, timeFrame, predictionData }) => {
  const chartRef = useRef<any>(null);
  const [chartData, setChartData] = useState<KLineData[]>([]);

  const fetchChartData = async (interval: number, period: number) => {
    const market = 'KRW-BTC';

    try {
      const response = await axios.get(
        `https://api.upbit.com/v1/candles/${
          interval === 1440 ? 'days' : 'minutes/' + interval
        }`,
        {
          params: {
            market,
            count: period / interval,
          },
        }
      );

      const data = response.data.map((item: any) => ({
        open: item.opening_price,
        high: item.high_price,
        low: item.low_price,
        close: item.trade_price,
        volume: item.candle_acc_trade_volume,
        timestamp: new Date(item.timestamp).getTime(),
      }));

      setChartData(data.reverse());
    } catch (error) {
      console.error('Error fetching chart data:', error);
    }
  };

  useEffect(() => {
    const interval = intervals[timeFrame];
    const period = periods[viewType];

    chartRef.current = init('chart');
    fetchChartData(interval, period);

    return () => {
      dispose('chart');
    };
  }, [viewType, timeFrame]);

  useEffect(() => {
    if (chartRef.current && chartData.length) {
      chartRef.current.applyNewData(chartData);
    }

    if (chartRef.current && predictionData && chartData.length > 0) {
      const lastTimestamp = chartData[chartData.length - 1].timestamp;
      const intervalInMs = intervals[timeFrame] * 60 * 1000;

      const predictionSeries = predictionData.predictions.map((value, index) => ({
        timestamp: lastTimestamp + (index + 1) * intervalInMs,
        open: value,
        high: value,
        low: value,
        close: value,
        volume: 0,
      }));

      const extendedData = [...chartData, ...predictionSeries];
      chartRef.current.applyNewData(extendedData);
    }
  }, [chartData, predictionData]);

  return <div id="chart" style={{ width: '100%', height: 500 }} />;
};

export default StockChart;
