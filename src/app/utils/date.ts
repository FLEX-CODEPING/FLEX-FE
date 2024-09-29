export const timeCalculate = (minutes: number) => {
  const MINUTES_IN_HOUR = 60;
  const MINUTES_IN_DAY = 1440;

  if (minutes < MINUTES_IN_HOUR) {
    return `${minutes}분 전`;
  }
  if (minutes < MINUTES_IN_DAY) {
    const hours = Math.floor(minutes / MINUTES_IN_HOUR);
    return `${hours}시간 전`;
  }
  const days = Math.floor(minutes / MINUTES_IN_DAY);
  return `${days}일 전`;
};
