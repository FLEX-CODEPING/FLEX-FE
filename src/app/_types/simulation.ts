type ChartViewType = '일' | '주' | '월' | '년';

type TradeType = '매수' | '매도';

type AmountType = '10%' | '25%' | '50%' | '최대';

type SideNavType =
  | '관심종목'
  | '보유종목'
  | '백테스팅'
  | '거래현황'
  | '내 거래내역';

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
  symbolImageUrl: string;
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

interface BackTestTypes {
  startDate: string;
  endDate: string;
  periodType: string;
  totalPrice: number;
  totalProfit: number;
  profit: number;
}

type BackTestOrderTypes = '매일' | '매주' | '매월' | '매년';

type StockPriceTypes = {
  stockCode: string;
  price: string;
};
