
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

const commonHeaders = {
  'Content-Type': 'application/json',
};

export const postRequest = async (
  url: string,
  body: any = null,
  accessToken?: string,
) => {

  const response = await fetch(`${SERVER_URL}${url}`, {
    method: 'POST',
      headers: { ...commonHeaders, Authorization: 'Bearer ' + accessToken },
      body: JSON.stringify(body),
  });
  return response.json();
};


export const postBlog = async (
  postContent: PostTypes,
  accessToken: string,
) => {
  return postRequest('/api/auth/signup', postContent, accessToken);
};