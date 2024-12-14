import { getCookie } from '../utils/setToken';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

const commonHeaders = {
  'Content-Type': 'application/json',
};

const patchRequest = async (url: string, req: Request, body: any = null) => {
  const token = getCookie(req, 'accessToken');

  const headers = {
    ...commonHeaders,
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const response = await fetch(`${SERVER_URL}${url}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(body),
  });
  return response.json();
};

export const patchMain = async (mainInfo: any, req: Request) => {
  return patchRequest('/api/v1/quotations/quotation/1', mainInfo, req);
};

export const patchComment = async (
  commentinfo: CommentRequestTypes,
  req: Request,
  postId: string,
  commentId: string,
) => {
  return patchRequest(
    `/api/posts/${postId}/comments/${commentId}`,
    req,
    commentinfo,
  );
};

export const patchProfile = async (
  profileinfo: AccountFormTypes,
  req: Request,
) => {
  return patchRequest(`/api/users/profile`, req, profileinfo);
};
