type ChartViewType = '일' | '주' | '월' | '년';

type TradeType = '매수' | '매도';

type AmountType = '10%' | '25%' | '50%' | '최대';

type SideNavType =
  | '관심종목'
  | '보유종목'
  | '백테스팅'
  | '거래현황'
  | '내 거래내역';

interface TradeDataType {
  stockName: string;
  stockQuantity: number;
  stockPrice: number;
}

interface StockInfo {
  image_path: string;
  name: string;
  price: number;
  change_amount: number;
  change_percent: number;
  liked: boolean;
  quantity: number;
  avg_purchase_price: number;
}

interface DailyPriceBodyTypes {
  marketDivCode: string;
  stockCode: string;
  dateFrom: string;
  dateTo: string;
  periodDivCode: string;
  orgAdjPrice: number;
}

interface DailyPriceResponseTypes {
  marketDivCode: string;
  stockCode: string;
  dateFrom: string;
  dateTo: string;
  periodDivCode: string;
  orgAdjPrice: number;
}

interface HoldStockTypes {
  userId: number;
  holdStockId: number;
  corpName: string;
  stockCode: string;
  totalHoldings: number;
  holdStatus: string;
  avgPrice: number;
  principal: number;
  createdAt: string;
}

interface MinPriceTypes {
  tradingDate: string;
  transactionTime: string;
  curPrice: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  transactionVolume: string;
  accTradeAmount: string;
}

interface ChartDataTypes {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

interface DailyPriceTypes {
  stck_bsop_date: string;
  stck_clpr: string;
  stck_oprc: string;
  stck_hgpr: string;
  stck_lwpr: string;
  acml_vol: string;
  acml_tr_pbmn: string;
  flng_cls_code: string;
  prtt_rate: string;
  mod_yn: string;
  prdy_vrss_sign: string;
  prdy_vrss: string;
  revl_issu_reas: string;
}
