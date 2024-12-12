import { convertToUnixTimestamp } from '@/app/utils/date';
import { createChart } from 'lightweight-charts';
import {
  Dispatch,
  SetStateAction,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import MinTypeDropdown from './MinTypeDropdown';

interface SimulChartProps {
  data: MinPriceTypes[];
  isLack: boolean;
  setIsLack: Dispatch<SetStateAction<boolean>>;
}

const SimulChart = ({ data, isLack, setIsLack }: SimulChartProps) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<ReturnType<typeof createChart> | null>(null);
  const candleSeriesRef = useRef<any>(null); // 캔들 데이터 참조
  const volumeSeriesRef = useRef<any>(null); // 거래량 데이터 참조

  const [timeFrame, setTimeFrame] = useState<number | string>(1);

  // 데이터 그룹화 (분봉에 따라 데이터 합산)
  const groupDataByInterval = (arr: MinPriceTypes[], interval: number) => {
    const groupedData: MinPriceTypes[] = [];
    for (let i = 0; i < arr.length; i += interval) {
      const slice = arr.slice(i, i + interval);

      if (slice.length > 0) {
        const groupedItem = {
          tradingDate: slice[0].tradingDate,
          transactionTime: slice[0].transactionTime,
          openPrice: slice[0].openPrice,
          highPrice: Math.max(...slice.map((item) => Number(item.highPrice))),
          lowPrice: Math.min(...slice.map((item) => Number(item.lowPrice))),
          curPrice: slice[slice.length - 1].curPrice,
          transactionVolume: slice.reduce(
            (sum, item) => sum + Number(item.transactionVolume),
            0,
          ),
        };
        groupedData.push(groupedItem);
      }
    }
    return groupedData;
  };

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

  // const candleData = transformCandle(data);
  // const amountData = transformAmount(data);

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

    const candleSeries = chart.addCandlestickSeries({
      upColor: '#0065D1',
      downColor: '#F12C2C',
      borderUpColor: '#0065D1',
      borderDownColor: '#F12C2C',
      wickUpColor: '#0065D1',
      wickDownColor: '#F12C2C',
      // priceFormat: {
      //   type: 'custom',
      //   minMove: 1,
      //   formatter: (price: number) => Math.round(price).toString(),
      // },
    });
    candleSeriesRef.current = candleSeries;

    // candleSeries.setData(candleData);

    const volumeSeries = chart.addHistogramSeries({
      color: '#FFA474',
      priceFormat: {
        type: 'volume',
      },
      priceScaleId: '',
    });
    volumeSeriesRef.current = volumeSeries;

    volumeSeries.priceScale().applyOptions({
      scaleMargins: {
        top: 0.8,
        bottom: 0,
      },
    });

    // volumeSeries.setData(amountData);

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
        <MinTypeDropdown option={timeFrame} setOption={setTimeFrame} />
      </div>
      <div ref={chartContainerRef} className="w-full h-[356px] mt-2" />
    </div>
  );
};

export default SimulChart;
