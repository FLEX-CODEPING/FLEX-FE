import { applyOptions } from '@/app/utils/chart';
import { convertToUnixTimesDay } from '@/app/utils/date';
import { ColorType, createChart, Time } from 'lightweight-charts';
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
        time: convertToUnixTimesDay(item.stck_bsop_date) as Time,
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
        time: convertToUnixTimesDay(item.stck_bsop_date) as Time,
        value: Number(item.acml_vol),
      }))
      .reverse();
  };

  useLayoutEffect(() => {
    if (!chartContainerRef.current || data.length === 0) return;
    const isDarkMode = document.documentElement.classList.contains('dark');
    console.log(isDarkMode, '값');

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      layout: {
        background: {
          type: ColorType.Solid,
          color: isDarkMode ? '#1E1E1E' : '#FFFFFF',
        },
        textColor: isDarkMode ? '#CBCACA' : '#000000',
      },
      grid: {
        vertLines: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)', // 다크모드: 밝은 세로선, 라이트모드: 어두운 세로선
        },
        horzLines: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)', // 다크모드: 밝은 가로선, 라이트모드: 어두운 가로선
        },
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
      rightPriceScale: {
        borderVisible: false,
      },
    });
    chartRef.current = chart;

    // 캔들파트 설정
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
    candleSeriesRef.current = candleSeries;

    // 거래량 파트 생성
    const volumeSeries = chart.addHistogramSeries({
      color: '#FFA474',
      priceFormat: {
        type: 'volume',
      },
      priceScaleId: '',
    });
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
