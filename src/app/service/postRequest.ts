import { getCookie } from '@/app/utils/setToken';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;
const commonHeaders = {
  'Content-Type': 'application/json',
};

const postRequest = async (url: string, req: Request, body: any = null) => {
  const token = getCookie(req, 'accessToken');
  const headers = {
    ...commonHeaders,
    ...(token && { Authorization: `Bearer ${token}` }),
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

export const postComment = async (
  postCommentInfo: CommentRequestTypes,
  req: Request,
  id: string,
) => {
  return postRequest(`/api/posts/${id}/comments`, req, postCommentInfo);
};

export const postLike = async (req: Request, id: string) => {
  return postRequest(`/api/posts/${id}/like`, req);
};

export const postFollow = async (req: Request, userId: string) => {
  try {
    const body = { userId }; // 요청 본문에 userId 포함
    const response = await postRequest('/api/follow', req, body);
    return response; // 응답 반환
  } catch (error) {
    console.error('팔로우 요청 중 오류 발생:', error);
    return { isSuccess: false, message: '팔로우 요청 실패' };
  }
};

export const interestStock = async (stockcode: string, req: Request) => {
  return postRequest(`/api/interestStocks?stockcode=${stockcode}`, req);
};

export const postRefresh = async (req: Request) => {
  const token = getCookie(req, 'refreshToken');
  const headers = {
    ...commonHeaders,
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const response = await fetch(`${SERVER_URL}/api/auth/reissue`, {
    method: 'POST',
    headers,
  });

  return response.json();
};

export const postCheckBlogName = async (blogName: any, req: Request) => {
  return postRequest('/api/users/checkBlogName', req, blogName);
};

export const postLogout = async (req: Request) => {
  return postRequest('/api/auth/logout', req);
};

export const postStockRank = async (body: any, req: Request, type: string) => {
  return postRequest(`/api/kis/stocks/ranking/${type}`, req, body);
};

export const postStockFinancial = async (
  req: Request,
  code: string,
  classCode: string,
) => {
  return postRequest(
    `/api/kis/stocks/financial-statements?stockCode=${code}&classCode=${classCode}`,
    req,
  );
};

export const postDailyPrice = async (req: Request, body: any) => {
  return postRequest('/api/kis/stocks/daily/item-chart-price', req, body);
};

export const postInquirePrice = async (req: Request, code: string) => {
  return postRequest(`/api/kis/stocks/inquire-price?stockcode=${code}`, req);
};

export const postStockTrade = async (req: Request, body: any) => {
  return postRequest('/api/kis/stocks/daily/trade-volume', req, body);
};

export const postStockBuy = async (req: Request, body: any) => {
  return postRequest('/api/investments/trading/buy', req, body);
};

export const postStockSell = async (req: Request, body: any) => {
  return postRequest('/api/investments/trading/sell', req, body);
};

export const postStockPredictions = async (
  req: Request,
  body: any,
  operation: string,
) => {
  return postRequest(
    `/api/stock-predictions?operation=${operation}`,
    req,
    body,
  );
};

export const postMinData = async (req: Request, body: any) => {
  return postRequest(
    '/api/kis/stocks/daily/daily-chart-price/inquire-price',
    req,
    body,
  );
};

export const postStockNotification = async (
  req: Request,
  body: any,
  operation: string,
) => {
  return postRequest(
    `/api/stock-predictions/notification?operation=${operation}`,
    req,
    body,
  );
};

export const postBackTest = async (req: Request, body: any) => {
  return postRequest('/api/back-test', req, body);
};
