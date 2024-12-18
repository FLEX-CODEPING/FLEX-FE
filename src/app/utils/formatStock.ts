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

export function formatEntValue(data: EntValueTypes): (string | number)[] {
  const { date, stockcode, BPS, PER, PBR, EPS, DIV, DPS } = data;

  return [BPS, PER, PBR, EPS, DIV, DPS];
}

export const backTestPurchaseCnt = (
  startDate: string,
  endDate: string,
  unit: '매일' | '매주' | '매월' | '매년',
): number => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  let count = 0;
  const current = new Date(start);

  while (current <= end) {
    const isWeekday = current.getDay() >= 1 && current.getDay() <= 5;
    if (isWeekday) {
      if (unit === '매일') {
        count += 1;
      } else if (unit === '매주' && current.getDay() === 1) {
        count += 1;
      } else if (unit === '매월' && current.getDate() === 1) {
        count += 1;
      } else if (
        unit === '매년' &&
        current.getMonth() === 0 &&
        current.getDate() === 1
      ) {
        count += 1;
      }
    }
    current.setDate(current.getDate() + 1);
  }

  return count;
};
