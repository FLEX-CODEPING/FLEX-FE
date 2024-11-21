interface StockInfoTypes {
  stockcode: string;
  corpName: string;
  symbolImageUrl: string;
  isInterested: boolean;
}

interface StockDetailInfoTypes {
  isSuccess: true;
  code: string;
  message: string;
  result: {
    stockcode: string;
    date: string;
    marketCap: number;
    volume: number;
    tradingVolume: number;
    listedShares: number;
    openPrice: number;
    highPrice: number;
    lowPrice: number;
    closePrice: number;
    changeRate: number;
  };
}

interface InterestedStockTypes {
  id: string;
  stockcode: string;
  corpName: string;
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
