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

export const getLandingLatest = async (req: Request) => {
  const url = `/api/blogs/landings/latest`;
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

export const getComments = async (req: Request, id: string) => {
  const url = `/api/posts/${id}/comments`;
  return getRequest(url, req);
};

export const getMyBlogInfo = async (req: Request, blogName: string) => {
  const url = `/api/blogs/${blogName}/info`;
  return getRequest(url, req);
};

export const getMyPosts = async (req: Request, blogName: string) => {
  const url = `/api/blogs/${blogName}/posts`;
  return getRequest(url, req);
};

export const getMyLikedPosts = async (req: Request) => {
  const url = `/api/blogs/myBlog/likePosts`;
  return getRequest(url, req);
};

export const getStock = async (req: Request, code: string) => {
  const url = `/api/stocks/${code}`;
  return getRequest(url, req);
};

export const getStockInfo = async (
  req: Request,
  code: string,
  date: string,
) => {
  const url = `/api/stocks/market/preOpen?stockcode=${code}&date=${date}`;
  return getRequest(url, req);
};

export const getInterestedStocks = async (req: Request) => {
  const url = `/api/interestStocks?page=0&size=20`;
  return getRequest(url, req);
};

export const getInterestedStatus = async (req: Request, code: string) => {
  const url = `/api/interestStocks/${code}`;
  return getRequest(url, req);
};

export const getStockOffHour = async (
  req: Request,
  code: string,
  date: string,
) => {
  const url = `/api/stocks/${code}/preOpen?date=${date}`;
  return getRequest(url, req);
};

export const getStockSearch = async (req: Request, keyword: string) => {
  const url = `/api/stocks/search/autoComplete/V1?keyword=${keyword}&size=12`;
  return getRequest(url, req);
};

export const getPresignedUrl = async (
  req: Request,
  bucketName: string,
  fileName: string,
) => {
  const url = `/api/presigned-url?bucketName=${bucketName}&fileName=${fileName}`;
  return getRequest(url, req);
};

export const getUsersProfile = async (req: Request) => {
  const url = '/api/users/profile';
  return getRequest(url, req);
};

export const getAnalysis = async (req: Request) => {
  const url = '/api/investment-analysis';
  return getRequest(url, req);
};

export const getSearchPost = async (req: Request,page:number, query?: string) => {
  const url = `/api/blogs/search?query=${query}&page=${page}&size=9`;
  return getRequest(url, req)
};

export const getHoldStock = async (
  req: Request,
  holdStatus: string,
  page: string,
  size: string,
  property: string,
  direction: string,
) => {
  const url = `/api/hold-stocks?holdStatus=${holdStatus}&page=${page}&size=${size}&property=${property}&direction=${direction}`;
  return getRequest(url, req);
};

export const getBalance = async (req: Request) => {
  const url = '/api/transactions/summary';
  return getRequest(url, req);
};

export const getInvestmentRecord = async (
  req: Request,
  stockCode: string,
  size: string,
  page: string,
  property: string,
  direction: string,
) => {
  const url = `/api/investments?stockCode=${stockCode}&page=${page}&size=${size}&property=${property}&direction=${direction}`;
  return getRequest(url, req);
};

export const getHoldStockInfo = async (req: Request, stockCode: string) => {
  const url = `/api/hold-stocks/${stockCode}`;
  return getRequest(url, req);
};

export const getTransactions = async (
  req: Request,
  size: string,
  page: string,
  property: string,
  direction: string,
) => {
  const url = `/api/transactions?page=${page}&size=${size}&property=${property}&direction=${direction}`;
  return getRequest(url, req);
};

export const getCorpInfo = async (req: Request, stockCode: string) => {
  const url = `/api/stocks/${stockCode}/corpInfo`;
  return getRequest(url, req);
};
