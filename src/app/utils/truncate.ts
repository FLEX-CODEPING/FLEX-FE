export const truncateString = (str: string, maxLength: number) => {
  if (str.length > maxLength) {
    return `${str.slice(0, maxLength)}...`;
  }
  return str;
};

export const formatNumberCommas = (num: number | string) => {
  return num.toLocaleString('en-US');
};
