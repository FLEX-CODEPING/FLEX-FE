import { parse } from 'cookie';

let sessionTimeoutId: number | null = null;

const setSessionTimeout = (duration: number) => {
  if (sessionTimeoutId !== null) {
    clearTimeout(sessionTimeoutId);
  }

  sessionTimeoutId = window.setTimeout(() => {
    alert('세션이 만료되었습니다. 다시 로그인해 주세요.');
    window.location.href = '/sign-in';
  }, duration - 3000); // 만료 3초 전에 알림
};

export const setTokens = (
  accessToken: string,
  refreshToken: string,
  isRefresh: boolean = false,
) => {
  const accessTokenExpires = isRefresh
    ? new Date(Date.now() + 1000 * 60 * 120) // 연장된 토큰 시간 (120분)
    : new Date(Date.now() + 1000 * 60 * 30); // 기본 토큰 시간 (30분)

  const accessTokenExpiresUTC = accessTokenExpires.toUTCString();

  const refreshTokenExpires = new Date(Date.now() + 1000 * 60 * 120); // 120분
  const refreshTokenExpiresUTC = refreshTokenExpires.toUTCString();

  document.cookie = `accessToken=${accessToken}; expires=${accessTokenExpiresUTC}; path=/; secure;`;
  document.cookie = `refreshToken=${refreshToken}; expires=${refreshTokenExpiresUTC}; path=/; secure;`;

  const timeoutDuration = accessTokenExpires.getTime() - Date.now();
  setSessionTimeout(timeoutDuration);
};

export const getCookie = (req: Request, name: string) => {
  const cookieHeader = req.headers?.get('cookie');
  const cookies = parse(cookieHeader || '');
  return cookies[name];
};
