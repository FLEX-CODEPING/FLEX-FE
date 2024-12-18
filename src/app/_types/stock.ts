interface StockInfoTypes {
  stockcode: string;
  stockName: string;
  symbolImageUrl: string;
  corpInfo: CorpInfoTypes;
  isInterested: string | null;
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

interface EntValueTypes {
  date: string;
  stockcode: string;
  BPS: number;
  PER: number;
  PBR: number;
  EPS: number;
  DIV: number;
  DPS: number;
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

interface TodayTradeTypes {
  totalBuyVolume: string;
  totalSellVolume: string;
}

interface TradeVolumeTypes {
  tradingDate: string;
  dailySellVolume: string;
  dailyBuyVolume: string;
}

interface TradeRecordTypes {
  output1: TodayTradeTypes[];
  output2: TradeVolumeTypes[];
}

interface TradeBuyTypes {
  quantity: number;
  price: number;
  totalPrice: number;
  stockCode: string;
  corpName: string;
}

interface TradeSellTypes {
  holdStockId: number;
  quantity: number;
  price: number;
  totalPrice: number;
  stockCode: string;
  corpName: string;
}

interface HoldStockRecordTypes {
  investmentId: number;
  investType: string;
  quantity: number;
  price: number;
  totalPrice: number;
  createdAt: string;
}

interface HoldStockInfoTypes {
  userId: number;
  holdStockId: number;
  corpName: string;
  stockCode: string;
  totalHoldings: number;
  holdStatus: string;
  avgPrice: number;
  principal: number;
  createdAt: string;
  modifiedAt: string;
}

interface TransactionDataTypes {
  transactionId: number;
  userId: number;
  investment: InvestmentDataTypes;
  credit: {
    creditId: number;
    credits: number;
    creditType: string;
  };
  totalProfit: number;
  balance: number;
  createdAt: string;
}

interface InvestmentDataTypes {
  investmentId: number;
  corpName: string;
  stockCode: string;
  investType: string;
  quantity: number;
  price: number;
  totalPrice: number;
  profit: number;
}

interface TransactionResponse {
  content: TransactionDataTypes[];
  hasNext: true;
  first: true;
  last: true;
}

interface InterestedPriceTypes {
  stockcode: string;
  currentPrice: string;
  changeAmount: string;
  changePercent: string;
  changeSign: string;
}
