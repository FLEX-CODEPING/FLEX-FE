const regex2 = /^[a-zA-Z0-9가-힣]{3,8}$/;
export const isCorrect = (text: string) => {
  return regex2.test(text) || text.length === 0;
};

export const valueColor = (value: number) =>
  value < 0
    ? 'text-blue-1 dark:text-blue-1/80'
    : 'text-red-1 dark:text-red-1/80';

export const tradeTypeColor = (tradeType: string) =>
  tradeType === 'BUY' ? 'text-red-1' : 'text-blue-1';

export const vrssSignColor = (value: string) => {
  if (value === '5') return 'text-blue-1';
  if (value === '2') return 'text-red-1';
  return 'text-black-0';
};
