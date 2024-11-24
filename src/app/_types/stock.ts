interface StockInfoTypes {
  stockcode: string;
  stockName: string;
  symbolImageUrl: string;
  isInterested: boolean;
}

interface StockDetailInfoTypes {
  marketCapInfo: {
    stockcode: string;
    date: string;
    marketCap: number;
    volume: number;
    tradingVolume: number;
    listedShares: number;
  };
  ohlcvInfo: {
    stockcode: string;
    date: string;
    openPrice: number;
    highPrice: number;
    lowPrice: number;
    closePrice: number;
    volume: number;
    changeRate: number;
  };
}

interface InterestedStockTypes {
  interestStockId: string;
  stockcode: string;
  stockName: string;
  symbolImageUrl: string;
}

interface InterestedStockDatasTypes {
  content: InterestedStockTypes[];
  hasNext: boolean;
  first: boolean;
  last: boolean;
}

interface InterestedStautsTypes {
  isSuccess: boolean;
  code: string;
  message: string;
  result: boolean;
}

interface AutoCompleteTypes {
  stockcode: string;
  stockName: string;
  market: string;
}
