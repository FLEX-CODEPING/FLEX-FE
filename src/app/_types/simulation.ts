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
