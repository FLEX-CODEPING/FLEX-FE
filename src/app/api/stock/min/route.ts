import { NextResponse } from 'next/server';

export async function POST() {
  const tokenResponse = await fetch(
    `https://openapivts.koreainvestment.com:29443/oauth2/tokenP`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'client_credentials',
        appkey: 'PSQemE10Vl1DvokfVYnpjPdYIWGBlc9oNLMh',
        appsecret:
          'N3ip8gjxMARN08tMZUkxno0W4+2JPHLBkXwGqTzbHRsvYeKuIhNpoly2aYQQWTRhk5OgZMqvBNvo9O2Hoa+nKJKcAXVWXiNIAXEynrOF76Qb4FY41VlLhA6nMpubrEm9sOl26jEDZLdtpbMmz0XKKoEe/aTSaiQNU22ee4FXmuDFfK1WsMU=',
      }),
    },
  );

  const tokenData = await tokenResponse.json();
  console.log(tokenData);

  const stockResponse = await fetch(
    `https://openapi.koreainvestment.com:9443/uapi/domestic-stock/v1/quotations/inquire-time-itemchartprice?FID_COND_MRKT_DIV_CODE=J&FID_INPUT_ISCD=035720&FID_ETC_CLS_CODE=''&FID_INPUT_HOUR_1=123000&FID_PW_DATA_INCU_YN=Y`,
    {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
        authorization: `Bearer ${tokenData.access_token}`,
        appkey: 'PSQemE10Vl1DvokfVYnpjPdYIWGBlc9oNLMh',
        appsecret:
          'N3ip8gjxMARN08tMZUkxno0W4+2JPHLBkXwGqTzbHRsvYeKuIhNpoly2aYQQWTRhk5OgZMqvBNvo9O2Hoa+nKJKcAXVWXiNIAXEynrOF76Qb4FY41VlLhA6nMpubrEm9sOl26jEDZLdtpbMmz0XKKoEe/aTSaiQNU22ee4FXmuDFfK1WsMU=',
        tr_id: 'FHKST03010200',
        custtype: 'P',
      },
      body: JSON.stringify({
        FID_ETC_CLS_CODE: '',
        FID_COND_MRKT_DIV_CODE: 'J',
        FID_INPUT_ISCD: '035720',
        FID_INPUT_HOUR_1: '123000',
        FID_PW_DATA_INCU_YN: 'Y',
      }),
    },
  );

  const stockData = await stockResponse.json();

  // 클라이언트로 최종 응답 반환
  return NextResponse.json(stockData);
}
