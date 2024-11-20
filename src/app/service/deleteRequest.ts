import { getCookie } from '../utils/setToken';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

const commonHeaders = {
  'Content-Type': 'application/json',
};

const deleteRequest = async (url: string, req: Request) => {
  const token = getCookie(req, 'accessToken');

  const response = await fetch(SERVER_URL + url, {
    method: 'DELETE',
    headers: { ...commonHeaders, ...(token && { 'access-token': token }) },
  });
  return response.json();
};

export const deleteMain = async (id: string, req: Request) => {
  return deleteRequest(`${SERVER_URL}/api/v1/quotations/${id}/delete`, req);
};

export const deleteInterest = async (stockcode: string, req: Request) => {
  return deleteRequest(`/api/interestStocks/${stockcode}`, req);
};
