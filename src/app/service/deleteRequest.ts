import { getCookie } from '../utils/setToken';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

const commonHeaders = {
  'Content-Type': 'application/json',
};

const deleteRequest = async (url: string, req: Request) => {
  const token = getCookie(req, 'accessToken');

  const response = await fetch(`${SERVER_URL}${url}`, {
    method: 'DELETE',
    headers: {
      ...commonHeaders,
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
  return response.json();
};

export const deleteMain = async (id: string, req: Request) => {
  return deleteRequest(`${SERVER_URL}/api/v1/quotations/${id}/delete`, req);
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

export const deleteFollow = async (id: string, req: Request) => {
  return deleteRequest(`/api/blogs/${id}/follow`, req);
};