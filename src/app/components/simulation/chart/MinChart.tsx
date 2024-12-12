import {
  candleChartOptions,
  groupDataByInterval,
  volumeChartOptions,
} from '@/app/utils/chart';
import { convertToUnixTimestamp } from '@/app/utils/date';
import { createChart } from 'lightweight-charts';
import { Dispatch, SetStateAction, useLayoutEffect, useRef } from 'react';
import ChartTypeDropdown from './ChartTypeDropdown';

interface MinChartProps {
  data: MinPriceTypes[];
  isLack: boolean;
  setIsLack: Dispatch<SetStateAction<boolean>>;
  timeFrame: string | number;
  setTimeFrame: Dispatch<SetStateAction<string | number>>;
}

const MinChart = ({
  data,
  isLack,
  setIsLack,
  timeFrame,
  setTimeFrame,
}: MinChartProps) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<ReturnType<typeof createChart> | null>(null);
  const candleSeriesRef = useRef<any>(null); // 캔들 데이터 참조
  const volumeSeriesRef = useRef<any>(null); // 거래량 데이터 참조

  // 데이터 그룹화 (분봉에 따라 데이터 합산)

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

  const getTransformedData = () => {
    const groupedData =
      timeFrame === 1 ? data : groupDataByInterval(data, timeFrame);

    return {
      candles: transformCandle(groupedData),
      volumes: transformAmount(groupedData),
    };
  };

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

    const candleSeries = chart.addCandlestickSeries(candleChartOptions);
    //외부에서 옵션 선언후 삽입
    candleSeriesRef.current = candleSeries;

    const volumeSeries = chart.addHistogramSeries();
    volumeSeriesRef.current = volumeSeries;

    volumeSeries.priceScale().applyOptions(volumeChartOptions);

    const { candles, volumes } = getTransformedData();
    candleSeries.setData(candles);
    volumeSeries.setData(volumes);

    return () => {
      chart.remove();
    };
  }, [data]);

  useLayoutEffect(() => {
    if (!candleSeriesRef.current || !volumeSeriesRef.current) return;

    const { candles, volumes } = getTransformedData();
    candleSeriesRef.current.setData(candles);
    volumeSeriesRef.current.setData(volumes);
  }, [timeFrame]);

  //   const handleTimeRangeChange = () => {
  //     const timeRange = chart.timeScale().getVisibleRange();
  //     if (timeRange && timeRange.from <= candleData[20].time) {
  //       setIsLack(true);
  //       if (!isLack) {
  //         console.log('왼쪽 끝에 도달', timeRange);
  //       }
  //     }
  //   };

  //   chart.timeScale().subscribeVisibleTimeRangeChange(() => {
  //     if (isLack) {
  //       handleTimeRangeChange();
  //     }
  //   });

  //   chart.timeScale().subscribeVisibleLogicalRangeChange(handleTimeRangeChange);

  //   return () => {
  //     chart
  //       .timeScale()
  //       .unsubscribeVisibleLogicalRangeChange(handleTimeRangeChange);
  //     chart.remove();
  //   };
  // }, [data]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '380px' }}>
      <div className="w-full flex justify-end pr-12">
        <ChartTypeDropdown option={timeFrame} setOption={setTimeFrame} />
      </div>
      <div ref={chartContainerRef} className="w-full h-[356px] mt-2" />
    </div>
  );
};

export default MinChart;
