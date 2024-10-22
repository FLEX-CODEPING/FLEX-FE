import { getCookie } from '@/app/utils/setToken';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

const commonHeaders = {
  'Content-Type': 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZSI6InVzZXIiLCJ0eXBlIjoiQUNDRVNTIiwiZW1haWwiOiJqb293b2pyQGdtYWlsLmNvbSIsImV4cCI6MTcyOTY4MzQ1NH0.n-bbnxcI40j0SUeOAk1iU7Vwy-8mroFvVf4hQ23fKQY',
};

export const postRequest = async (
  url: string,
  req: Request,
  body: any = null,
) => {
  const token = getCookie(req, 'accessToken');

  const headers = {
    ...commonHeaders,
    // ...(token && { 'access-token': token }),
  };

  const response = await fetch(`${SERVER_URL}${url}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });
  return response.json();
};

export const postMain = async (mainContent: any, req: Request) => {
  return postRequest('/api/v1/main', mainContent, req);
};

export const postLogin = async (loginContent: any, req: Request) => {
  return postRequest('/api/auth/login/KAKAO', req, loginContent);
};

export const postSignUp = async (
  signUpContent: SignUpFormTypes,
  req: Request,
) => {
  return postRequest('/api/auth/signup', req, signUpContent);
};

export const postBlog = async (postContent: PostTypes, req: Request) => {
  return postRequest('/api/posts', req, postContent);
};
