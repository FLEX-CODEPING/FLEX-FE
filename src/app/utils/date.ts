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
  const now = new Date();
  const closeHour = 15;
  const closeMinute = 30;

  const isBeforeClose =
    now.getHours() < closeHour ||
    (now.getHours() === closeHour && now.getMinutes() < closeMinute);

  if (isBeforeClose) {
    now.setDate(now.getDate() - 1);
  }

  const dayOfWeek = now.getDay();

  if (dayOfWeek === 0) {
    now.setDate(now.getDate() - 2);
  } else if (dayOfWeek === 6) {
    now.setDate(now.getDate() - 1);
  }

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const isOpenTime = () => {
  const now = new Date();
  const day = now.getDay();
  if (day < 1 || day > 5) {
    return false;
  }
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const startHour = 9;
  const endHour = 15;
  const endMinute = 30;

  if (
    hours < startHour ||
    hours > endHour ||
    (hours === endHour && minutes > endMinute)
  ) {
    return false;
  }

  return true;
};
