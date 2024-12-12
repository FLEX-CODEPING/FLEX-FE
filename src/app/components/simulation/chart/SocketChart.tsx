import { callPost } from '@/app/utils/callApi';
import { useEffect, useState } from 'react';

const WebSocketChart = ({ stockCode }: { stockCode: string }) => {
  const [messages, setMessages] = useState<any[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [socketError, setSocketError] = useState<null | string>(null);

  useEffect(() => {
    if (!stockCode) return;

    let socket: WebSocket;

    const connectWebSocket = async () => {
      try {
        const tokenResponse = await callPost('/api/socket');

        console.log('받아온 토큰:', tokenResponse);

        socket = new WebSocket(
          'ws://ops.koreainvestment.com:21000/tryitout/H0STCNT0',
        );

        socket.onopen = () => {
          setIsConnected(true);
          const requestData = {
            header: {
              approval_key: tokenResponse.approval_key,
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
          console.log(tokenResponse.approval_key, 'WebSocket 연결 성공');
          console.log(requestData, '이렇게 요청');

          socket.send(JSON.stringify(requestData));
        };

        socket.onmessage = (event) => {
          const message = event.data;
          console.log(message, '응답');

          try {
            const jsonData = JSON.parse(message);

            if (jsonData.body?.msg1 === 'SUBSCRIBE SUCCESS') {
              console.log('구독 성공:', jsonData);
            } else {
              setMessages((prev) => [...prev, jsonData]);
            }
          } catch (error) {
            console.error('메시지 파싱 중 오류:', error);
          }
        };

        socket.onerror = (error) => {
          console.error('WebSocket 에러:', error);
          setSocketError('WebSocket 연결 에러 발생');
        };

        socket.onclose = () => {
          console.log('WebSocket 연결 종료');
          setIsConnected(false);
        };
      } catch (error) {
        console.error('WebSocket 연결 실패:', error);
        setSocketError('WebSocket 연결 실패');
      }
    };

    connectWebSocket();

    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, [stockCode]);
  if (socketError) {
    return <div>WebSocket 에러: {socketError}</div>;
  }

  return (
    <div>
      <h1>WebSocket 데이터</h1>
      <div>연결 상태: {isConnected ? '연결됨' : '연결 안 됨'}</div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{JSON.stringify(message)}</li>
        ))}
      </ul>
    </div>
  );
};

export default WebSocketChart;
