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

export const isOpenTime = () => {
  const now = new Date();
  const day = now.getDay();
  if (day < 1 || day > 5) {
    return false;
  }
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const startHour = 9;
  const endHour = 18;
  const endMinute = 15;

  if (
    hours < startHour ||
    hours > endHour ||
    (hours === endHour && minutes > endMinute)
  ) {
    return false;
  }

  return true;
};

export const getTodayDateBar = () => {
  const now = new Date();
  const closeHour = 18;
  const closeMinute = 15;

  if (
    now.getHours() < closeHour ||
    (now.getHours() === closeHour && now.getMinutes() < closeMinute)
  ) {
    now.setDate(now.getDate() - 1);
  }

  while (now.getDay() === 0 || now.getDay() === 6) {
    now.setDate(now.getDate() - 1);
  }

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const formatYM = (dateString: string) => {
  const year = dateString.slice(2, 4); // 3번째와 4번째 자리: 연도 마지막 두 자리
  const month = dateString.slice(4, 6); // 5번째와 6번째 자리: 월

  return `${year}년 ${parseInt(month, 10)}월`;
};

export const getTodayAndSixMonthsAgo = (): {
  today: string;
  sixMonthsAgo: string;
} => {
  const today = new Date();
  const sixMonthsAgo = new Date(today);
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return {
    today: formatDate(today),
    sixMonthsAgo: formatDate(sixMonthsAgo),
  };
};
