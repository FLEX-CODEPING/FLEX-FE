import { convertToUnixTimestamp } from '@/app/utils/date';
import { createChart } from 'lightweight-charts';
import { Dispatch, SetStateAction, useLayoutEffect, useRef } from 'react';

interface SimulChartProps {
  data: MinPriceTypes[];
  isLack: boolean;
  setIsLack: Dispatch<SetStateAction<boolean>>;
}

const SimulChart = ({ data, isLack, setIsLack }: SimulChartProps) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<ReturnType<typeof createChart> | null>(null); // 차트를 저장할 ref

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

  useLayoutEffect(() => {
    if (!chartContainerRef.current || data.length === 0) return;

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
      rightPriceScale: {
        borderVisible: false,
      },
    });
    chartRef.current = chart;

    const candleSeries = chart.addCandlestickSeries({
      upColor: '#0065D1',
      downColor: '#F12C2C',
      borderUpColor: '#0065D1',
      borderDownColor: '#F12C2C',
      wickUpColor: '#0065D1',
      wickDownColor: '#F12C2C',
      priceFormat: {
        type: 'custom',
        minMove: 1,
        formatter: (price: number) => Math.round(price).toString(),
      },
    });

    candleSeries.setData(candleData);

    const volumeSeries = chart.addHistogramSeries({
      color: '#FFA474',
      priceFormat: {
        type: 'volume',
      },
      priceScaleId: '',
    });
    volumeSeries.priceScale().applyOptions({
      scaleMargins: {
        top: 0.8,
        bottom: 0,
      },
    });

    volumeSeries.setData(amountData);

    const handleTimeRangeChange = () => {
      const timeRange = chart.timeScale().getVisibleRange();
      if (timeRange && timeRange.from <= candleData[0].time) {
        setIsLack(true);
        if (!isLack) {
          console.log('왼쪽 끝에 도달', timeRange);
        }
      }
    };

    chart.timeScale().subscribeVisibleLogicalRangeChange(handleTimeRangeChange);

    return () => {
      chart
        .timeScale()
        .unsubscribeVisibleLogicalRangeChange(handleTimeRangeChange);
      chart.remove();
    };
  }, [data]);

  return (
    <div
      ref={chartContainerRef}
      style={{ position: 'relative', width: '100%', height: '380px' }}
    />
  );
};

export default SimulChart;
