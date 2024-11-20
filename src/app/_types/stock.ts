interface StockInfoTypes {
  stockcode: string;
  corpName: string;
  symbolImageUrl: string;
  isInterested: boolean;
}

interface StockDetailInfoTypes {
  isSuccess: true;
  code: 'string';
  message: 'string';
  result: {
    stockcode: 'string';
    date: '2024-11-18';
    marketCap: 0;
    volume: 0;
    tradingVolume: 0;
    listedShares: 0;
    openPrice: 0;
    highPrice: 0;
    lowPrice: 0;
    closePrice: 0;
    changeRate: 0;
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
