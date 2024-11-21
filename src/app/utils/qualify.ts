const regex2 = /^[a-zA-Z0-9가-힣]{3,8}$/;
export const isCorrect = (text: string) => {
  return regex2.test(text) || text.length === 0;
};

export const valueColor = (value: number) =>
  value < 0 ? 'text-blue-1' : 'text-red-1';
