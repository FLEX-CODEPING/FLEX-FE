import { getCookie } from '../utils/setToken';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

const commonHeaders = {
  'Content-Type': 'application/json',
};

const deleteBodyReq = async (url: string, req: Request, body: any = null) => {
  const token = getCookie(req, 'accessToken');
  const headers = {
    ...commonHeaders,
    ...(token && { Authorization: `Bearer ${token}` }),
  };
  const response = await fetch(`${SERVER_URL}${url}`, {
    method: 'DELETE',
    headers,
    body: JSON.stringify(body),
  });
  return response.json();
};

export const deleteFollow = async (req: Request, userId: string) => {
  try {
    const body = { userId };
    const response = await deleteBodyReq('/api/follow', req, body);
    return response;
  } catch (error) {
    console.error('팔로우 해제 요청 중 오류 발생:', error);
    return { isSuccess: false, message: '팔로우 해제 요청 실패' };
  }
};
