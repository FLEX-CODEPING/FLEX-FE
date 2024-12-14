export const formatCurrency = (input: number | string) => {
  const value =
    typeof input === 'string'
      ? parseFloat(input.replace(/,/g, '').trim())
      : input;

  if (value < 10000) return `${value}원`;
  if (value < 100000000) {
    const tenThousandUnit = Math.floor(value / 10000); // 만 단위
    const thousandRest = Math.floor((value % 10000) / 1000); // 천 단위
    return thousandRest > 0
      ? `${tenThousandUnit}만${thousandRest}천원`
      : `${tenThousandUnit}만원`;
  }
  const hundredMillionUnit = Math.floor(value / 100000000); // 억 단위
  const tenThousandRest = Math.floor((value % 100000000) / 10000); // 만 단위
  return tenThousandRest > 0
    ? `${hundredMillionUnit}억${tenThousandRest}만원`
    : `${hundredMillionUnit}억원`;
};

const transNum = (num: number | string) => {
  return Number(num);
};

export const formatNumberCommas = (num: number | string) => {
  return Math.floor(transNum(num)).toLocaleString('en-US');
};

export const formatCurrencyNoUnit = (amount: number): string => {
  if (amount >= 1_0000_0000_0000) {
    const value = (amount / 1_0000_0000_0000).toFixed(1);
    return value.length > 4
      ? `${Math.round(amount / 1_0000_0000_0000)}조`
      : `${value}조`;
  }
  if (amount >= 1_0000_0000) {
    const value = (amount / 1_0000_0000).toFixed(1);
    return value.length > 4
      ? `${Math.round(amount / 1_0000_0000)}억`
      : `${value}억`;
  }
  if (amount >= 100000) {
    const value = (amount / 10000).toFixed(0);
    return value.length > 4 ? `${amount / 10000}만` : `${value}만`;
  }
  return `${formatNumberCommas(amount)}`;
};

export const isProfit = (num: number | string): string => {
  const value = transNum(num);
  return value > 0
    ? `+${formatNumberCommas(value)}`
    : formatNumberCommas(value);
};
