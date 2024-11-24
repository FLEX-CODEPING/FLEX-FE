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

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
};

export const getTodayDate = () => {
  const today = new Date();
  const year = today.getUTCFullYear();
  const month = String(today.getUTCMonth() + 1).padStart(2, '0');
  const day = String(today.getUTCDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
};

export const getTodayDateBar = () => {
  const today = new Date();
  today.setMinutes(today.getMinutes());
  const dayOfWeek = today.getDay();

  if (dayOfWeek === 0) {
    today.setDate(today.getDate() - 2);
  } else if (dayOfWeek === 6) {
    today.setDate(today.getDate() - 1);
  }
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};
