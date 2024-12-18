import { applyOptions, groupDataByInterval } from '@/app/utils/chart';
import { convertToUnixTimestamp } from '@/app/utils/date';
import { ColorType, createChart, Time } from 'lightweight-charts';
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import ChartTypeDropdown from './ChartTypeDropdown';

interface MinChartProps {
  data: MinPriceTypes[];
  isLack: boolean;
  setIsLack: Dispatch<SetStateAction<boolean>>;
  timeFrame: string | number;
  setTimeFrame: Dispatch<SetStateAction<string | number>>;
  liveData: ChartDataTypes | null;
}

const MinChart = ({
  data,
  isLack,
  setIsLack,
  timeFrame,
  setTimeFrame,
  liveData,
}: MinChartProps) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<ReturnType<typeof createChart> | null>(null);
  const candleSeriesRef = useRef<any>(null); // 캔들 데이터 참조
  const volumeSeriesRef = useRef<any>(null); // 거래량 데이터 참조
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const transformCandle = (arr: MinPriceTypes[]) => {
    return arr
      .map((item) => ({
        time: convertToUnixTimestamp(
          item.tradingDate + item.transactionTime,
        ) as Time,
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
        time: convertToUnixTimestamp(
          item.tradingDate + item.transactionTime,
        ) as Time,
        value: Number(item.transactionVolume),
      }))
      .reverse();
  };

  const getTransformedData = () => {
    if (typeof timeFrame === 'number') {
      const groupedData =
        timeFrame === 1 ? data : groupDataByInterval(data, timeFrame);
      return {
        candles: transformCandle(groupedData),
        volumes: transformAmount(groupedData),
      };
    }
    return { candles: [], volumes: [] };
  };

  useLayoutEffect(() => {
    if (!chartContainerRef.current || data.length === 0) return;
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

    const volumeSeries = chart.addHistogramSeries({
      color: '#FFA474',
      priceFormat: {
        type: 'volume',
      },
      priceScaleId: '',
    });

    volumeSeriesRef.current = volumeSeries;

    volumeSeries.priceScale().applyOptions(applyOptions);

    const { candles, volumes } = getTransformedData();
    candleSeries.setData(candles);
    volumeSeries.setData(volumes);

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

    const resizeObserver = new ResizeObserver(() => {
      if (chartContainerRef.current) {
        chart.resize(
          chartContainerRef.current.clientWidth,
          chartContainerRef.current.clientHeight,
        );
      }
    });
    resizeObserver.observe(chartContainerRef.current);

    // 브라우저 크기에 따른 동적 사이즈 변화
    window.addEventListener('resize', () => {
      if (chartContainerRef.current) {
        chart.resize(
          chartContainerRef.current.clientWidth,
          chartContainerRef.current.clientHeight,
        );
      }
    });

    chart.timeScale().subscribeVisibleLogicalRangeChange(handleTimeRangeChange);

    return () => {
      chart
        .timeScale()
        .unsubscribeVisibleLogicalRangeChange(handleTimeRangeChange);
      resizeObserver.disconnect();
      chart.remove();
    };
  }, [data, isLack]);

  // useLayoutEffect(() => {
  //   if (!candleSeriesRef.current || !volumeSeriesRef.current) return;

  //   const { candles, volumes } = getTransformedData();
  //   candleSeriesRef.current.setData(candles);
  //   volumeSeriesRef.current.setData(volumes);
  // }, [timeFrame]);

  useEffect(() => {
    if (!liveData || !candleSeriesRef.current) return;
    const existingData = candleSeriesRef.current.data();
    const lastCandle = existingData[existingData.length - 1];

    const newCandle = {
      time: lastCandle.time,
      open: lastCandle.open,
      close: liveData.close,
      low: Math.min(lastCandle.low, liveData.close),
      high: Math.max(lastCandle.high, liveData.close),
    };

    candleSeriesRef.current.update(newCandle);
  }, [liveData]);

  return (
    <div className="relative w-full h-[380px]">
      <div className="w-full flex justify-end pr-12">
        <ChartTypeDropdown option={timeFrame} setOption={setTimeFrame} />
      </div>
      <div ref={chartContainerRef} className="w-full h-[356px] mt-2" />
    </div>
  );
};

export default MinChart;
