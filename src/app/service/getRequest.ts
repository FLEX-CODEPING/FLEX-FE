import { getCookie } from '@/app/utils/setToken';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

const commonHeaders = {
  'Content-Type': 'application/json',
};

const getRequest = async (url: string, req: Request) => {
  const token = getCookie(req, 'accessToken');

  const headers = {
    ...commonHeaders,
    ...(token && { 'access-token': token }),
  };

  const response = await fetch(`${SERVER_URL}/${url}`, { headers });
  return response.json();
};

export const getMain = async (req: Request) => {
  const url = '/api/v1/main';
  return getRequest(url, req);
};
