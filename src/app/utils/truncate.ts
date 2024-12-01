export const truncateString = (str: string, maxLength: number) => {
  if (str.length > maxLength) {
    return `${str.slice(0, maxLength)}...`;
  }
  return str;
};

export const formatNumberCommas = (num: number | string) => {
  return num.toLocaleString('en-US');
};

export const plusUnit = (index: number) => {
  if (index === 5) return '%';
  if (index === 8) return '주';
  return '원';
};
