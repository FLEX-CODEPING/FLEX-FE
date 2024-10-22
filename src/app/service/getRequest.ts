const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

const commonHeaders = {
  'Content-Type': 'application/json',
};

const getRequest = async (url: string, accessToken?: string) => {
  // const token = getCookie(req, 'accessToken');

  const headers = accessToken
    ? { ...commonHeaders, accessToken }
    : commonHeaders;
  console.log(url);

  const response = await fetch(`${SERVER_URL}/${url}`, { headers });
  const data = await response.json();

  console.log(data);
  return data;
};

// export const getMain = async (req: Request) => {
//   const url = '/api/v1/main';
//   return getRequest(url, req);
// };

export const getPostDetail = async (accessToken: string, id: string) => {
  const url = `api/posts/${id}`;
  console.log(id, accessToken);
  return await getRequest(url, accessToken);
};
