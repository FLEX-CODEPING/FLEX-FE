export const truncateString = (str: string, maxLength: number) => {
  if (str.length > maxLength) {
    return `${str.slice(0, maxLength)}...`;
  }
  return str;
};

export const plusUnit = (index: number) => {
  if (index === 5) return '%';
  if (index === 8 || index === 4) return '주';
  return '원';
};

export const plusUnitforEnt = (index: number) => {
  if (index === 5) return '%';
  return '원';
};
