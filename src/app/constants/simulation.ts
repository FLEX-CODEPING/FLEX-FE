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

export const CHART_TITLE = ['차트', '종목정보'];

export const STOCK_INFO_TITLE = ['종목정보', '재무제표', '기업정보'];

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

export const TRADE_TYPE: TradeType[] = ['매수', '매도'];

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
  '보유하지 않은 종목',
];

export const ANALYZEBAR_TEXT = [
  '재테크 타입 분석',
  '나의  모의투자를 통한 재테크 분석 결과 보기',
  '분석하기',
];

export const AMOUNT_TYPES: AmountType[] = ['10%', '25%', '50%', '최대'];

export const AMOUNT_PERCENT: number[] = [0.1, 0.25, 0.5, 1];

export const SIDE_STATUS_TEXT = ['실시간', '일간', '시간', '체결가', '체결량'];

export const INTEREST_EMPTY = [
  '0개의 관심종목',
  '관심이 가는 종목을 찾아 등록해보세요!',
];

export const POSESSION_EMPTY = [
  '0개의 보유종목',
  '원하는 종목을 찾아 거래해보세요!',
];

export const STATUS_EMPTY = ['존재하지 않는 거래내역', '잠시후 시도해보세요'];

export const TRADE_EMPTY = [
  '존재하지 않는 거래내역',
  '새롭게 거래를 시작해보세요',
];

export const MODAL_TEXT_BUY = [
  '정말 매수하시겠습니까?',
  '매수',
  '닫기',
  '매수가 정상적으로 체결되었습니다!',
];

export const MODAL_TEXT_SELL = [
  '정말 매도하시겠습니까?',
  '매도',
  '닫기',
  '매도가 체결되었습니다.',
];

export const STOCK_INFO_TEXT = [
  '시가',
  '고가',
  '저가',
  '종가',
  '거래량',
  '변동률',
  '시가총액',
  '거래대금',
  '상장 주식 수',
];

export const ENT_VALUE_TEXT = [
  'BPS',
  'PER',
  'PBR',
  'EPS',
  '총 배당금',
  '주당 배당금',
];

export const STOCK_INFO_TOOLTIP = [
  '주식이 장 시작 시 기록한 첫 번째 가격을 의미해요',
  '해당 날짜 동안 주식이 거래된 최고 가격을 의미해요',
  '해당 날짜 동안 주식이 거래된 최저 가격을 의미해요',
  '주식이 장 마감 시 기록한 마지막 가격을 의미해요',
  '해당 주식이 하루 동안 거래된 주식 수를 의미해요',
  '주식 종가의 전일 대비 변동률(%)을 의미해요',
  '주식의 (주식의 현재 가격 * 상장 주식 수)을 의미해요',
  '해당 주식의 하루 총 거래 금액을 의미해요',
  '시장에 상장된 주식 총 수를 의미해요',
];

export const ENT_VALUE_TOOLTIP = [
  '회사의 순자산(자산-부채)을 발행 주식 수로 나눈 값을 의미해요',
  '현재 주가를 주당 순이익(EPS)으로 나눈 값을 의미해요',
  '현재 주가를 주당 순자산(BPS)으로 나눈 값을 의미해요',
  '기업이 일정 기간 동안 벌어들인 순이익을 발행 주식 수로 나눈 값을 의미해요',
  '기업이 주주들에게 지급한 총 배당금액을 의미해요',
  '기업이 주당 지급하는 배당금을 의미해요',
];

export const FINANCIALINFO_TITLE = ['손익계산', '대차대조'];

export const STOCKINFO_TITLE = ['종목정보', '기업가치'];

export const FINANCIALINTO_VIEWTYPE = ['분기', '연도'];

export const PROFIT_LOSS_TITLE = [
  '매출액',
  '매출원가',
  '매출총이익',
  '영업이익',
  '경상이익',
  '당기순이익',
];

export const BALANCE_TITLE = [
  '유동자산',
  '비유동자산',
  '자산총계',
  '유동부채',
  '비유동부채',
  '부채총계',
  '자본금',
  '자본총계',
];

export const ENTERPRISE_INFO = [
  '회사명',
  '대표자명',
  '설립일',
  '회계연도 마감월',
  '법인등록번호',
  '사업자등록번호',
  '홈페이지 URL',
  '산업명',
  '주소',
];

export const STOCK_TRADE_TEXT = ['날짜', '매수수량', '매도수량'];

export const HOLDSTOCK_RECORD = ['1주 평균 금액', '보유 수량'];

export const TRADETYPE_MAP: Record<string, string> = {
  SELL: '매도',
  BUY: '매수',
};
