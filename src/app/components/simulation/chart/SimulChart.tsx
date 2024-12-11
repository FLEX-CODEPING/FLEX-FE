import { convertToUnixTimestamp } from '@/app/utils/date';
import { createChart } from 'lightweight-charts';
import { useLayoutEffect, useRef } from 'react';

interface SimulChartProps {
  data: MinPriceTypes[];
}

const SimulChart = ({ data }: SimulChartProps) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  const transformCandle = (arr: MinPriceTypes[]) => {
    return arr
      .map((item) => ({
        time: convertToUnixTimestamp(item.tradingDate + item.transactionTime),
        open: Number(item.openPrice),
        high: Number(item.highPrice),
        low: Number(item.lowPrice),
        close: Number(item.curPrice),
      }))
      .reverse();
  };

  const transformAmount = (arr: MinPriceTypes[]) => {
    return arr
      .map((item) => ({
        time: convertToUnixTimestamp(item.tradingDate + item.transactionTime),
        value: Number(item.transactionVolume),
      }))
      .reverse();
  };

  const candleData = transformCandle(data);
  const amountData = transformAmount(data);
  console.log(candleData.slice(0, 358), '캔들');
  console.log(amountData.slice(0, 358), '양');

  useLayoutEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      timeScale: {
        timeVisible: true, // 시간 세부 표시 활성화
        secondsVisible: false, // 초 단위 비활성화 (원하는 경우 true로 변경 가능)
      },
    });

    const candleSeries = chart.addCandlestickSeries({
      upColor: '#0065D1',
      downColor: '#F12C2C',
      borderUpColor: '#0065D1',
      borderDownColor: '#F12C2C',
      wickUpColor: '#0065D1',
      wickDownColor: '#F12C2C',
    });

    candleSeries.setData(candleData.slice(0, 358));

    const areaSeries = chart.addAreaSeries({
      lineColor: '#F95700',
      topColor: '#F95700',
      bottomColor: '#FFA474',
    });

    areaSeries.setData(amountData.slice(0, 358));
  }, [data]);

  return (
    <div
      ref={chartContainerRef}
      style={{ position: 'relative', width: '100%', height: '400px' }}
    />
  );
};

export default SimulChart;
