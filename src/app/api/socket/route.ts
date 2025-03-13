export async function POST() {
  const response = await fetch(
    `https://openapivts.koreainvestment.com:29443/oauth2/Approval`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        grant_type: 'client_credentials',
        appkey: 'PSQemE10Vl1DvokfVYnpjPdYIWGBlc9oNLMh',
        secretkey:
          'N3ip8gjxMARN08tMZUkxno0W4+2JPHLBkXwGqTzbHRsvYeKuIhNpoly2aYQQWTRhk5OgZMqvBNvo9O2Hoa+nKJKcAXVWXiNIAXEynrOF76Qb4FY41VlLhA6nMpubrEm9sOl26jEDZLdtpbMmz0XKKoEe/aTSaiQNU22ee4FXmuDFfK1WsMU=',
      }),
    },
  );

  const tokenData = await response.json();
  return new Response(JSON.stringify(tokenData), { status: 200 });
}
