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

export const getLandingToday = async (req: Request) => {
  const url = `/api/blogs/landings/today`;
  return getRequest(url, req);
};

export const getBlogsMain = async (
  req: Request,
  page: string,
  salary?: any,
  age?: any,
  filter?: string,
) => {
  let url = `/api/blogs/main?page=${page}&size=9`;
  if (salary !== 'undefined') {
    url += `&salary=${salary}`;
  }
  if (age !== 'undefined') {
    url += `&age=${age}`;
  }
  if (filter !== 'undefined') {
    url += `&filter=${filter}`;
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

export const getBlogsRecommend = async (
  req: Request,
  page: string,
  filter?: any,
) => {
  let url = `/api/blogs/recommend?page=${page}&size=9`;
  if (filter !== 'undefined') {
    url += `&filter=${filter}`;
  }
  return getRequest(url, req);
};

export const getBlogsFollowing = async (
  req: Request,
  page: string,
  filter?: any,
) => {
  let url = `/api/blogs/following?page=${page}&size=9`;
  if (filter !== 'undefined') {
    url += `&filter=${filter}`;
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

export const getLandingPopular = async (req: Request) => {
  const url = '/api/blogs/landings/popular';
  return getRequest(url, req);
};

export const getLandingRecommend = async (req: Request) => {
  const url = '/api/blogs/landings/recommend';
  return getRequest(url, req);
};

export const getStockInfo = async (req: Request, code: string) => {
  const url = `/api/stocks/${code}`;
  return getRequest(url, req);
};
