interface StockInfoTypes {
  stockcode: string;
  stockName: string;
  symbolImageUrl: string;
  corpInfo: CorpInfoTypes;
  isInterested: boolean;
  date: string;
  closePrice: 0;
  volume: 0;
  changeRate: 0;
}

interface CorpInfoTypes {
  corpName: string;
  ceoName: string;
  corpRegistNo: string;
  bsRegistNo: string;
  address: string;
  homeUrl: string;
  establishmentDate: string;
  accountingMonth: string;
  industryName: string;
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

interface IncomesTypes {
  yearMonth: string;
  salesRevenue: string;
  costOfSales: string;
  grossProfit: string;
  operatingProfit: string;
  ordinaryProfit: string;
  netIncomeForThePeriod: string;
}

interface BalanceTypes {
  yearMonth: string;
  curAssets: string;
  fixedAssets: string;
  totalAssets: string;
  curLiabilities: string;
  fixedLiabilities: string;
  totalLiabilities: string;
  capitalStock: string;
  totalEquity: string;
}

interface FinancialDataTypes {
  incomeStatementInfo: IncomesTypes[];
  balanceSheetInfo: BalanceTypes[];
}
