import { NextResponse } from 'next/server';

export async function POST() {
  const webSocketResponse = await fetch(
    `https://openapivts.koreainvestment.com:29443/oauth2/Approval`,
    {
      method: 'POST',
      body: JSON.stringify({
        grant_type: 'client_credentials',
        appkey: 'PSQemE10Vl1DvokfVYnpjPdYIWGBlc9oNLMh',
        secretkey:
          'N3ip8gjxMARN08tMZUkxno0W4+2JPHLBkXwGqTzbHRsvYeKuIhNpoly2aYQQWTRhk5OgZMqvBNvo9O2Hoa+nKJKcAXVWXiNIAXEynrOF76Qb4FY41VlLhA6nMpubrEm9sOl26jEDZLdtpbMmz0XKKoEe/aTSaiQNU22ee4FXmuDFfK1WsMU=',
      }),
    },
  );

  const tokenData = await webSocketResponse.json();
  console.log('받아온 웹소켓 토큰키', tokenData);
  const socket = new WebSocket(
    'ws://ops.koreainvestment.com:21000/tryitout/H0STCNT0',
  );

  return new Promise<NextResponse>((resolve, reject) => {
    socket.onopen = () => {
      const requestData = {
        header: {
          approval_key: tokenData.approval_key,
          custtype: 'P',
          tr_type: '1',
          'content-type': 'utf-8',
        },
        body: {
          input: {
            tr_id: 'H0STCNT0',
            tr_key: '005930',
          },
        },
      };

      socket.send(JSON.stringify(requestData));
    };

    socket.onmessage = (event) => {
      const message = event.data;

      try {
        const jsonData = JSON.parse(message);

        if (jsonData.body?.msg1 === 'SUBSCRIBE SUCCESS') {
          const { iv } = jsonData.body.output;
          const { key } = jsonData.body.output;

          console.log('복호화에 필요한 IV:', iv);
          console.log('복호화에 필요한 Key:', key);

          resolve(NextResponse.json({ iv, key }));
        } else {
          console.log('응답 데이터:', message);
          resolve(NextResponse.json({ message }));
        }
      } catch (error) {
        console.error('응답 파싱 중 오류 발생:', error);
        reject(error);
      }
    };

    socket.onerror = (error) => {
      console.error('WebSocket 에러:', error);
      reject(error);
    };

    socket.onclose = () => {
      console.log('WebSocket 연결이 종료되었습니다.');
    };
  });
}
