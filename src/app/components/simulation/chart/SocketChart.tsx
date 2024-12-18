import { useLiveDataStore } from '@/app/store/store';
import { callPost } from '@/app/utils/callApi';
import { extractDateTimeAndPrice } from '@/app/utils/formatStock';
import { useEffect, useState } from 'react';

interface WebSocketChartProps {
  stockCode: string;
}

const WebSocketChart = ({ stockCode }: WebSocketChartProps) => {
  const [isConnected, setIsConnected] = useState(false);
  const [socketError, setSocketError] = useState<null | string>(null);
  const { setLiveData } = useLiveDataStore();

  useEffect(() => {
    if (!stockCode) return;

    let socket: WebSocket | null = null;
    let lastUpdateTime = 0;

    const connectWebSocket = async () => {
      try {
        const tokenResponse = await callPost('/api/socket');
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
                tr_key: stockCode,
              },
            },
          };
          socket?.send(JSON.stringify(requestData));
        };

        socket.onmessage = (event) => {
          const currentTime = Date.now();

          if (
            currentTime - lastUpdateTime >= 1000 &&
            event.data.trim().startsWith('0')
          ) {
            lastUpdateTime = currentTime;
            const message = event.data;
            const formattedData = extractDateTimeAndPrice(message);
            setLiveData(formattedData);
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
        console.log('기존 WebSocket 연결 종료');
        socket.close();
        socket = null;
      }
    };
  }, [stockCode]);

  if (socketError) {
    return <div></div>;
  }

  return <div></div>;
};

export default WebSocketChart;
