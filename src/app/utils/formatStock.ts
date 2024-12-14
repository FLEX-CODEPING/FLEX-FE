export function formatStockData(
  data: StockDetailInfoTypes,
): (string | number)[] {
  const {
    ohlcvInfo: {
      openPrice,
      highPrice,
      lowPrice,
      closePrice,
      volume,
      changeRate,
    },
    marketCapInfo: { marketCap, tradingVolume, listedShares },
  } = data;

  return [
    openPrice, // 시가
    highPrice, // 고가
    lowPrice, // 저가
    closePrice, // 종가
    volume, // 거래량
    changeRate, // 변동률
    marketCap, // 시가총액
    tradingVolume, // 거래대금
    listedShares, // 상장 주식 수
  ];
}

export function formatEntInfo(data: CorpInfoTypes): string[] {
  const {
    corpName,
    ceoName,
    corpRegistNo,
    bsRegistNo,
    address,
    homeUrl,
    establishmentDate,
    accountingMonth,
    industryName,
  } = data;

  return [
    corpName,
    ceoName,
    establishmentDate,
    accountingMonth,
    bsRegistNo,
    corpRegistNo,
    homeUrl,
    address,
    industryName,
  ];
}

export const extractDateTimeAndPrice = (data: string) => {
  const parts = data.split('|');
  const executionData = parts[3];
  const executionParts = executionData.split('^');
  console.log(executionParts, '쪼갠 값들');
  const executionTime = executionParts[1];
  const close = executionParts[2];
  const open = executionParts[7];
  const high = executionParts[8];
  const low = executionParts[9];
  const amount = executionParts[12];
  const date = executionParts[33];
  const formattedTime = `${executionTime.slice(0, 4)}00`;
  const dateTime = `${date}${formattedTime}`;

  const realData: ChartDataTypes = {
    open: Number(open),
    high: Number(high),
    low: Number(low),
    close: Number(close),
    time: Number(dateTime),
    volume: Number(amount),
  };

  return realData;
};
