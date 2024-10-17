import {
  backtest,
  backtestActive,
  interest,
  interestActive,
  possession,
  possessionActive,
  status,
  statusActive,
  trade,
  tradeActive,
} from './iconPath';

export const SEARCH_STOCK = '원하는 종목을 검색';

export const CHART_TITLE = '차트';

export const CHART_VIEWTYPE: ChartViewType[] = ['일', '주', '월', '년'];

export const SIDE_NAV_TYPES: SideNavType[] = [
  '관심종목',
  '보유종목',
  '백테스팅',
  '거래현황',
  '내 거래내역',
];

export const SIDE_NAV_ICONS: IconPathTypes[] = [
  interest,
  possession,
  backtest,
  status,
  trade,
];

export const SIDE_NAV_ICONS_SELECTED: IconPathTypes[] = [
  interestActive,
  possessionActive,
  backtestActive,
  statusActive,
  tradeActive,
];

export const TRADE_BUY_TEXT = [
  '주문하기',
  '매수',
  '매도',
  '구매가격',
  '수량',
  '총 금액', // index 5
  '보유크레딧',
  '총 금액',
  '거래 후 잔여 크레딧',
  '구매하기',
];

export const TRADE_SELL_TEXT = [
  '주문하기',
  '매수',
  '매도',
  '판매가격',
  '수량',
  '총 금액', // index 5
  '보유크레딧',
  '총 금액',
  '거래 후 잔여 크레딧',
  '판매하기',
];

export const ANALYZEBAR_TEXT = [
  '재테크 타입 분석',
  '나의  모의투자를 통한 재테크 분석 결과 보기',
  '분석하기',
];

export const AMOUNT_TYPES: AmountType[] = ['10%', '25%', '50%', '최대'];

export const SIDE_STATUS_TEXT = ['실시간', '일간', '시간', '체결가', '체결량'];
