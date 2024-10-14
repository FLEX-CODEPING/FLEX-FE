import { getCookie } from '../utils/setToken';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

const commonHeaders = {
  'Content-Type': 'application/json',
};

const patchRequest = async (url: string, req: Request, body: any = null) => {
  const token = getCookie(req, 'accessToken');

  const headers = {
    ...commonHeaders,
    ...(token && { 'access-token': token }),
  };

  const response = await fetch(`${SERVER_URL}/${url}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(body),
  });
  return response.json();
};

export const patchMain = async (mainInfo: any, req: Request) => {
  return patchRequest('/api/v1/quotations/quotation/1', mainInfo, req);
};
