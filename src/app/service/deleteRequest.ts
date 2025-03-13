import { getCookie } from '../utils/setToken';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

const commonHeaders = {
  'Content-Type': 'application/json',
};

const deleteRequest = async (url: string, req: Request, body: any = null) => {
  const token = getCookie(req, 'accessToken');
  const headers = {
    ...commonHeaders,
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const options: RequestInit = {
    method: 'DELETE',
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${SERVER_URL}${url}`, options);
  return response.json();
};

export const deleteComment = async (
  req: Request,
  postId: string,
  commentId: string,
) => {
  return deleteRequest(`/api/posts/${postId}/comments/${commentId}`, req);
};

export const deleteLike = async (id: string, req: Request) => {
  return deleteRequest(`/api/posts/${id}/like`, req);
};

export const deleteInterest = async (id: string, req: Request) => {
  return deleteRequest(`/api/interestStocks/${id}`, req);
};

export const deleteFollow = async (req: Request, userId: string) => {
  try {
    const body = { userId };
    const response = await deleteRequest('/api/follow', req, body);
    return response;
  } catch (error) {
    console.error('팔로우 해제 요청 중 오류 발생:', error);
    return { isSuccess: false, message: '팔로우 해제 요청 실패' };
  }
};
