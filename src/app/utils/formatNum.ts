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

export const formatNumberCommas = (num: number | string) => {
  if (typeof num === 'string') {
    num = Number(num);
  }
  return num.toLocaleString('en-US');
};
