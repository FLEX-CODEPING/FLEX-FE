export const groupDataByInterval = (arr: MinPriceTypes[], interval: number) => {
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

export const candleChartOptions = {
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
};

export const volumeChartOptions = {
  color: '#FFA474',
  priceFormat: {
    type: 'volume',
  },
  priceScaleId: '',
};

export const applyOptions = {
  scaleMargins: {
    top: 0.8,
    bottom: 0,
  },
};
