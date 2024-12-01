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
