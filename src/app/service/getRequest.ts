import { getCookie } from '@/app/utils/setToken';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

const commonHeaders = {
  'Content-Type': 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZSI6InVzZXIiLCJ0eXBlIjoiQUNDRVNTIiwiZW1haWwiOiJqb293b2pyQGdtYWlsLmNvbSIsImV4cCI6MTcyOTY4MzQ1NH0.n-bbnxcI40j0SUeOAk1iU7Vwy-8mroFvVf4hQ23fKQY',
};

const getRequest = async (url: string, req: Request) => {
  const token = getCookie(req, 'accessToken');
  console.log(url, '요청 경로');

  const headers = {
    ...commonHeaders,
    // ...(token && { 'access-token': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZSI6InVzZXIiLCJ0eXBlIjoiQUNDRVNTIiwiZW1haWwiOiJqb293b2pyQGdtYWlsLmNvbSIsImV4cCI6MTcyOTY4MzQ1NH0.n-bbnxcI40j0SUeOAk1iU7Vwy-8mroFvVf4hQ23fKQY' }),
  };
  console.log(headers, '헤더 조회');

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
  const queryParams = new URLSearchParams();
  let url = '/api/blogs/main';
  if (salary !== 'undefined') {
    url += `?salary=${salary}`;
  }
  if (age !== 'undefined') {
    url += salary ? `&age=${age}` : `?age=${age}`;
  }

  return getRequest(url, req);
};
