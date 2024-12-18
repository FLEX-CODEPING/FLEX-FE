import {
  backtest,
  backtestActive,
  interest,
  interestActive,
  possession,
  possessionActive,
  trade,
  tradeActive,
} from './iconPath';

export const SEARCH_STOCK = '원하는 종목을 검색';

export const CHART_TITLE = ['차트', '종목정보'];

export const STOCK_INFO_TITLE = ['종목정보', '재무제표', '기업정보'];

export const CHART_VIEWTYPE = ['일', '주', '월', '년'];

export const SIDE_NAV_TYPES: SideNavType[] = [
  '관심종목',
  '보유종목',
  '백테스팅',
  '내 거래내역',
];

export const SIDE_NAV_ICONS: IconPathTypes[] = [
  interest,
  possession,
  backtest,
  trade,
];

export const SIDE_NAV_ICONS_SELECTED: IconPathTypes[] = [
  interestActive,
  possessionActive,
  backtestActive,
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

export const INTEREST_EMPTY = [
  '0개의 관심종목',
  '관심이 가는 종목을 찾아 등록해보세요!',
];

export const POSESSION_EMPTY = [
  '0개의 보유종목',
  '원하는 종목을 찾아 거래해보세요!',
];

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

export const ENT_VALUE_TEXT = ['BPS', 'PER', 'PBR', 'EPS', 'DIV', 'DPS'];

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
  '현재 종목의 주가 대비 배당금의 비율을 의미해요',
  '현재 기업이 주식 1주당 지급하는 원 단위 배당금을 의미해요',
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

export const PROFIT_LOSS_TOOLTIP = [
  '기업이 일정 기간 동안 상품이나 서비스를 판매해 얻은 총수익을 의미해요.',
  '매출을 올리기 위해 들어간 직접적인 비용(재료비, 인건비 등)을 의미해요.',
  '매출액에서 매출원가를 뺀 금액으로, 기업의 기본적인 이익 수준을 나타내요.',
  '매출총이익에서 판매비와 관리비 등을 뺀 금액으로, 기업의 영업 활동에서 발생한 이익을 보여줘요.',
  '영업이익에 영업 외 수익과 비용을 더하거나 뺀 금액으로, 지속적인 경영활동에서 얻은 이익을 의미해요.',
  '경상이익에서 법인세를 제외한 금액으로, 기업의 최종적인 이익을 나타내요.',
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

export const BALANCE_TOOLTIP = [
  '1년 이내에 현금화할 수 있는 자산(현금, 예금, 재고자산 등)을 의미해요.',
  '1년 이상 장기적으로 사용하거나 보유하는 자산(건물, 설비, 투자자산 등)을 의미해요.',
  '유동자산과 비유동자산을 합한 기업의 전체 자산을 나타내요.',
  '1년 이내에 상환해야 할 부채(단기차입금, 미지급금 등)를 의미해요.',
  '1년 이후에 상환해야 할 장기 부채(장기차입금, 사채 등)를 의미해요.',
  '유동부채와 비유동부채를 합한 기업의 전체 부채를 나타내요.',
  '주식을 발행해 조달한 금액으로, 기업 설립 시 투자 받은 돈을 의미해요.',
  '자본금에 유보금, 기타 자본 항목을 더한 금액으로, 기업의 자본 상태를 나타내요.',
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

export const TRADE_PLACEHOLDER = ['찾으려는 종목을 검색해보세요'];

export const CHART_MIN_NUM = [1, 5, 15, 60];

export const DAY_DIVCODE_MAP: Record<string, string> = {
  일: 'D',
  주: 'W',
  월: 'M',
  년: 'Y',
};

export const BACKTEST_TEXT = [
  '시작날짜',
  '종료날짜',
  '주문타입',
  '주문수량',
  '백테스팅 결과',
  '총 주식 수',
  '총 소요 금액',
  '총 소요일',
  '초기자산',
  '최종자산',
  '손익',
  '손익율',
  '매매 횟수',
];

export const BACKTEST_BTN_TEXT = ['시작하기', '다시하기'];

export const ORDER_TYPE: BackTestOrderTypes[] = [
  '매일',
  '매주',
  '매월',
  '매년',
];

export const ORDER_TYPE_MAP: Record<string, string> = {
  매일: 'DAILY',
  매주: 'WEEKLY',
  매월: 'MONTHLY',
  매년: 'YEARLY',
};
