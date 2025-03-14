import { parse } from 'cookie';
import { callPost } from './callApi';

let sessionTimeoutId: number | null = null;

const setSessionTimeout = (duration: number) => {
  if (sessionTimeoutId !== null) {
    clearTimeout(sessionTimeoutId);
  }
  sessionTimeoutId = window.setTimeout(() => {
    window.location.href = '/auth';
  }, duration - 3000);
};

export const setTokens = (
  accessToken: string,
  refreshToken: string,
  isRefresh: boolean = false,
) => {
  const accessTokenExpires = isRefresh
    ? new Date(Date.now() + 1000 * 60 * 120)
    : new Date(Date.now() + 1000 * 60 * 30);

  const accessTokenExpiresUTC = accessTokenExpires.toUTCString();

  const refreshTokenExpires = new Date(Date.now() + 1000 * 60 * 120);
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

export const handleLogout = async () => {
  const response = await callPost('/api/auth/logout');
  document.cookie = `accessToken=; expires=0; path=/;`;
  document.cookie = `refreshToken=; expires=0; path=/;`;
  window.location.href = '/';
};
