export const groupDataByInterval = (arr: MinPriceTypes[], interval: number) => {
  const groupedData: MinPriceTypes[] = [];
  for (let i = 0; i < arr.length; i += interval) {
    const slice = arr.slice(i, i + interval);

    if (slice.length > 0) {
      const groupedItem = {
        tradingDate: slice[0].tradingDate,
        transactionTime: slice[0].transactionTime,
        openPrice: slice[0].openPrice,
        highPrice: String(
          Math.max(...slice.map((item) => Number(item.highPrice))),
        ),
        lowPrice: String(
          Math.min(...slice.map((item) => Number(item.lowPrice))),
        ),
        curPrice: slice[slice.length - 1].curPrice,
        transactionVolume: String(
          slice.reduce((sum, item) => sum + Number(item.transactionVolume), 0),
        ),
        accTradeAmount: String(
          slice.reduce((sum, item) => sum + Number(item.transactionVolume), 0),
        ),
      };
      groupedData.push(groupedItem);
    }
  }
  return groupedData;
};

export const applyOptions = {
  scaleMargins: {
    top: 0.8,
    bottom: 0,
  },
};
