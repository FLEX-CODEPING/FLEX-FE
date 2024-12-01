export const formatCurrency = (input: number | string) => {
  if (typeof input === 'string') {
    input = parseFloat(input.replace(/,/g, '').trim());
  }
  if (input < 10000) {
    return `${input}원`;
  } else if (input < 100000000) {
    const tenThousandUnit = Math.floor(input / 10000); // 만 단위
    const thousandRest = Math.floor((input % 10000) / 1000); // 천 단위
    return thousandRest > 0
      ? `${tenThousandUnit}만${thousandRest}천원`
      : `${tenThousandUnit}만원`;
  } else {
    const hundredMillionUnit = Math.floor(input / 100000000); // 억 단위
    const tenThousandRest = Math.floor((input % 100000000) / 10000); // 만 단위
    return tenThousandRest > 0
      ? `${hundredMillionUnit}억${tenThousandRest}만원`
      : `${hundredMillionUnit}억원`;
  }
};

export const formatNumberCommas = (num: number | string) => {
  return num.toLocaleString('en-US');
};
