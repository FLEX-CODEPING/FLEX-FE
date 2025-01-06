export const MARKET_CONDITIONS = [
  {
    title: '코스피',
    value: '2734',
    difference: -22,
    differenceRate: '-0.72%',
  },
  {
    title: '나스닥',
    value: '13965',
    difference: +150,
    differenceRate: '1.08%',
  },
  {
    title: '다우존스',
    value: '33500',
    difference: -75,
    differenceRate: '-0.22%',
  },
  {
    title: 'S&P 500',
    value: '4300',
    difference: +10,
    differenceRate: '0.23%',
  },
  {
    title: '니케이',
    value: '30000',
    difference: +100,
    differenceRate: '0.33%',
  },
  {
    title: '홍콩 항셍',
    value: '18500',
    difference: -200,
    differenceRate: '-1.07%',
  },
  {
    title: '유럽 Stoxx 600',
    value: '460',
    difference: +5,
    differenceRate: '1.10%',
  },
  {
    title: '상하이 종합',
    value: '3300',
    difference: +15,
    differenceRate: '0.46%',
  },
  {
    title: 'BSE Sensex',
    value: '67000',
    difference: -350,
    differenceRate: '-0.52%',
  },
  {
    title: 'CAC 40',
    value: '7100',
    difference: -25,
    differenceRate: '-0.35%',
  },
];

export const successMockData = {
  isSuccess: true,
  result: {
    investmentStyle: {
      riskLevel: '중간',
      tradingPattern: `이 사용자는 주로 단기 매매를 선호하는 투자자로, 시장의 단기적인 가격 움직임을 활용하여 수익을 추구합니다. 평균 보유 기간은 약 1~3일 사이로, 주로 기술적 분석 도구를 활용하여 매수와 매도의 시점을 결정합니다. 단기 매매 전략은 빠른 의사 결정이 필수적이며, 시장의 변동성에 민감하게 반응하는 특징이 있습니다. 따라서 사용자는 실시간 데이터를 주시하며, 시장의 추세를 신속히 파악해 즉각적으로 대응하는 데 익숙합니다.`,
      analysis: `최근 거래 데이터를 분석한 결과, 사용자는 시장의 전반적인 추세를 따르는 트렌드 추종 전략(Trend Following)을 채택하는 경향이 뚜렷합니다. 이는 상승장에서는 적극적으로 매수에 나서고, 하락장에서는 관망하거나 손실을 최소화하기 위해 빠르게 매도하는 패턴으로 나타납니다.`,
    },
    investmentStrategy: {
      recommendation: `기술적 분석 도구를 활용한 철저한 계획 수립이 추천됩니다.`,
      riskManagement: `단기 매매의 특성상 손절매와 익절의 기준을 명확히 설정하는 것이 중요합니다. 예를 들어, 손실이 초기 투자 금액의 2~3%를 초과하지 않도록 설정하거나, 목표 수익률에 도달했을 경우 감정적 판단 없이 매도하는 습관을 기르는 것이 필요합니다.
또한 변동성이 높은 시장에서는 분할 매매 전략을 활용하여 리스크를 낮추고, 거래 중에 시장의 급격한 변동에 대비하기 위해 실시간 데이터를 지속적으로 모니터링해야 합니다. `,
      analysis: `단기 거래에서는 기술적 분석이 주를 이루지만, 이를 보완하기 위해 시장 심리와 매매량 분석을 추가적으로 활용하는 것이 추천됩니다. 예를 들어, 거래량이 특정 시점에 급증할 경우, 시장의 관심이 집중된 종목임을 파악하고 기회를 잡는 것이 가능합니다.
또한, 특정 종목의 최근 뉴스나 공시 정보를 꾸준히 확인하여 외부 요인으로 인한 갑작스러운 가격 변동에 대비할 수 있습니다. `,
    },
    investmentTrend: {
      recommendation: `최근 시장은 기술주 및 성장주 중심으로 강한 상승세를 보이는 추세입니다.`,
      riskManagement: `최근 시장은 변동성이 높아, 과열된 종목에 진입 시 리스크가 커질 수 있습니다. 따라서 과매수 구간에서는 진입을 자제하고, 과매도 구간에 진입하는 역발상 매매 전략도 적절히 섞어야 합니다.`,
      analysis: `최근 데이터에 따르면, 거래량이 급증한 종목이나 시장의 주요 이벤트(예: 경제 지표 발표, 중앙은행 정책 변화)에 따라 시장 심리가 빠르게 변동하는 경향이 나타났습니다.  
따라서 단기 투자자는 이러한 이벤트 캘린더를 면밀히 살피고, 주요 일정 전후로 포지션을 조정하거나 관망 자세를 취하는 것이 중요합니다.`,
    },
  },
};
