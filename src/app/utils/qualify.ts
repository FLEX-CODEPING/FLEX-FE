const regex2 = /^[a-zA-Z0-9가-힣ㄱ-ㅎ]{2,8}$/;
export const isCorrect = (text: string) => {
  return regex2.test(text) || text.length === 0;
};
