import {
  applyOptions,
  candleChartOptions,
  volumeChartOptions,
} from '@/app/utils/chart';
import { convertToUnixTimesDay } from '@/app/utils/date';
import { createChart } from 'lightweight-charts';
import { Dispatch, SetStateAction, useLayoutEffect, useRef } from 'react';
import ChartTypeDropdown from './ChartTypeDropdown';

interface DayChartProps {
  data: DailyPriceTypes[];
  isLack: boolean;
  setIsLack: Dispatch<SetStateAction<boolean>>;
  timeFrame: string | number;
  setTimeFrame: Dispatch<SetStateAction<string | number>>;
}

const DayChart = ({
  data,
  isLack,
  setIsLack,
  timeFrame,
  setTimeFrame,
}: DayChartProps) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<ReturnType<typeof createChart> | null>(null);
  const candleSeriesRef = useRef<any>(null); // 캔들 데이터 참조
  const volumeSeriesRef = useRef<any>(null); // 거래량 데이터 참조

  const transformCandle = (arr: DailyPriceTypes[]) => {
    return arr
      .filter((item) => item && Object.keys(item).length > 0)
      .map((item) => ({
        time: convertToUnixTimesDay(item.stck_bsop_date),
        open: Number(item.stck_oprc),
        high: Number(item.stck_hgpr),
        low: Number(item.stck_lwpr),
        close: Number(item.stck_clpr),
      }))
      .reverse();
  };

  const transformAmount = (arr: DailyPriceTypes[]) => {
    return arr
      .filter((item) => item && Object.keys(item).length > 0)
      .map((item) => ({
        time: convertToUnixTimesDay(item.stck_bsop_date),
        value: Number(item.acml_vol),
      }))
      .reverse();
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
    candleSeriesRef.current = candleSeries;

    const volumeSeries = chart.addHistogramSeries(volumeChartOptions);
    volumeSeriesRef.current = volumeSeries;

    volumeSeries.priceScale().applyOptions(applyOptions);

    candleSeries.setData(transformCandle(data));
    volumeSeries.setData(transformAmount(data));

    const handleTimeRangeChange = () => {
      const timeRange = chart.timeScale().getVisibleRange();
      if (
        timeRange &&
        timeRange.from <= candleSeriesRef.current.data()[5].time
      ) {
        if (!isLack) {
          setIsLack(true);
          console.log('왼쪽 끝에 도달', timeRange);
        }
      }
    };

    // timeFrame !== '연' &&
    chart.timeScale().subscribeVisibleLogicalRangeChange(handleTimeRangeChange);

    return () => {
      chart
        .timeScale()
        .unsubscribeVisibleLogicalRangeChange(handleTimeRangeChange);
      chart.remove();
    };
  }, [data]);

  useLayoutEffect(() => {
    if (!candleSeriesRef.current || !volumeSeriesRef.current) return;
    candleSeriesRef.current.setData(transformCandle(data));
    volumeSeriesRef.current.setData(transformAmount(data));
  }, [timeFrame]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '380px' }}>
      <div className="w-full flex justify-end pr-12">
        <ChartTypeDropdown option={timeFrame} setOption={setTimeFrame} />
      </div>
      <div ref={chartContainerRef} className="w-full h-[356px] mt-2" />
    </div>
  );
};

export default DayChart;
