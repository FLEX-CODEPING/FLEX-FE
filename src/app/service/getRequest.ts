import { getCookie } from '@/app/utils/setToken';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;
const commonHeaders = {
  'Content-Type': 'application/json',
};

const getRequest = async (url: string, req: Request) => {
  const token = getCookie(req, 'accessToken');
  const headers = {
    ...commonHeaders,
    ...(token && { Authorization: `Bearer ${token}` }),
  };
  const response = await fetch(`${SERVER_URL}${url}`, { headers });
  return response.json();
};

export const getMain = async (req: Request) => {
  const url = '/api/v1/main';
  return getRequest(url, req);
};

export const getLandingPost = async (req: Request, filter: string) => {
  const url = `/api/blogs/landing?filter=${filter}`;
  return getRequest(url, req);
};

export const getBlogsMain = async (req: Request, salary?: any, age?: any) => {
  let url = '/api/blogs/main';
  if (salary !== 'undefined') {
    url += `?salary=${salary}`;
  }
  if (age !== 'undefined') {
    url += salary ? `&age=${age}` : `?age=${age}`;
  }

  return getRequest(url, req);
};

export const getNews = async (
  req: Request,
  keyword?: string,
  pressArray?: string[],
  period?: string,
) => {
  let url = `/api/news-summary/?keyword=${keyword}`;

  if (!pressArray || pressArray.length === 0) {
    url += `&press=hk`;
  } else {
    url += `&${pressArray.map((press) => `press=${press}`).join('&')}`;
  }

  if (period !== 'undefined') {
    url += `&period=${Number(period)}`;
  }

  return getRequest(url, req);
};

export const getPostDetail = async (req: Request, id: string) => {
  const url = `/api/posts/${id}`;
  return getRequest(url, req);
};

export const getUsers = async (req: Request) => {
  const url = '/api/users/info';
  return getRequest(url, req);
};
