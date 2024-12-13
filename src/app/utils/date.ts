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
  return year + month + day;
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

  const formatYMD = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return {
    today: formatYMD(today),
    sixMonthsAgo: formatYMD(sixMonthsAgo),
  };
};

export const formatMD = (dateString: string) => {
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${month}.${day}`;
};

//unix 시간대로 변환
export const convertToUnixTimestamp = (dateString: string) => {
  const formattedTime = `${dateString.slice(0, 4)}-${dateString.slice(4, 6)}-${dateString.slice(6, 8)}T${dateString.slice(8, 10)}:${dateString.slice(10, 12)}:${dateString.slice(12, 14)}Z`;
  return Math.floor(new Date(formattedTime).getTime() / 1000);
};

export const convertToUnixTimesDay = (dateString: string) => {
  const formattedDate = `${dateString.slice(0, 4)}-${dateString.slice(4, 6)}-${dateString.slice(6, 8)}T00:00:00Z`;
  return Math.floor(new Date(formattedDate).getTime() / 1000);
};

// 1. 전일로부터 4개월 전 날짜 반환
export function getFourMonthsAgo(): string {
  const now = new Date();
  now.setDate(now.getDate() - 1); // 전일
  now.setMonth(now.getMonth() - 4); // 4개월 전
  return commonFormat(now);
}

// 2. 이전의 가장 가까운 월요일로부터 80주 전 날짜 반환
export function getEightyWeeksAgoFromNearestMonday(): string {
  const now = new Date();
  const day = now.getDay(); // 현재 요일 (0: 일요일, 1: 월요일, ...)
  const daysToMonday = (day === 0 ? -6 : 1) - day; // 가장 가까운 월요일까지의 차이 계산
  now.setDate(now.getDate() + daysToMonday); // 가장 가까운 월요일로 설정
  now.setDate(now.getDate() - 80 * 7); // 80주 전으로 이동
  return commonFormat(now);
}

// 3. 4년 전 전월 1일 반환
export function getFourYearsAgoFirstDay(): string {
  const now = new Date();
  now.setFullYear(now.getFullYear() - 4); // 4년 전
  now.setMonth(now.getMonth() - 1); // 전월
  now.setDate(1); // 1일로 설정
  return commonFormat(now);
}

// 날짜를 YYYYMMDD 형식으로 포맷하는 유틸리티 함수
function commonFormat(date: Date): string {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 +1
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}${month}${day}`;
}

export const switchDateFunc = (dayType: string) => {
  switch (dayType) {
    case '일':
      return getFourMonthsAgo();
    case '주':
      return getEightyWeeksAgoFromNearestMonday();
    case '월':
      return getFourYearsAgoFirstDay();
    case '년':
      return '19800101';
    default:
      break;
  }
};
