/**
 * TradingView Universal Data Feed(UDF) 프로토콜을 구현한 데이터피드 클래스
 * Upbit API를 사용하여 암호화폐 시장 데이터를 제공합니다.
 */
class MockFeed {
  private baseUrl: string;

  private socket: WebSocket | null = null;

  /**
   * @param baseUrl - API 기본 URL
   */
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * 데이터피드의 기능과 설정을 초기화합니다.
   * @param callback - 설정 정보를 전달받을 콜백 함수
   */
  static onReady(
    callback: (config: {
      supported_resolutions: string[]; // 지원되는 시간봉 배열
      supports_search: boolean; // 심볼 검색 지원 여부
      supports_group_request: boolean; // 그룹 요청 지원 여부
      supports_marks: boolean; // 마크 지원 여부
      supports_timescale_marks: boolean; // 타임스케일 마크 지원 여부
    }) => void,
  ) {
    setTimeout(() => {
      callback({
        supports_search: true,
        supports_group_request: false,
        supported_resolutions: ['1', '5', '15', '30', '60', '1D', '1W', '1M'],
        supports_marks: false,
        supports_timescale_marks: false,
      });
    }, 0);
  }

  // /**
  //  * 사용자 입력에 따라 심볼을 검색합니다.
  //  * @param userInput - 사용자가 입력한 검색어
  //  * @param exchange - 거래소 식별자
  //  * @param symbolType - 심볼 유형
  //  * @param onResultReadyCallback - 검색 결과를 전달받을 콜백 함수
  //  */
  // static searchSymbols(
  //   userInput: string,
  //   exchange: string,
  //   symbolType: string,
  //   onResultReadyCallback: (result: any[]) => void,
  // ) {
  //   // Upbit API를 통해 전체 마켓 정보를 조회
  //   fetch(`https://api.upbit.com/v1/market/all`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // 검색어와 일치하는 심볼 필터링
  //       const searchResults = data
  //         .filter((item: any) => item.market.includes(userInput.toUpperCase()))
  //         .map((item: any) => ({
  //           symbol: item.market,
  //           full_name: item.korean_name,
  //           description: `Symbol: ${item.market}`,
  //           exchange,
  //           type: symbolType,
  //         }));
  //       console.log('Search results:', searchResults);
  //       onResultReadyCallback(searchResults);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching symbols:', error);
  //     });
  // }

  /**
   * 특정 심볼에 대한 상세 정보를 해석하여 제공합니다.
   * @param symbolName - 심볼 이름
   * @param onSymbolResolvedCallback - 심볼 정보를 전달받을 콜백 함수
   */
  resolveSymbol(
    symbolName: string,
    onSymbolResolvedCallback: (symbolInfo: any) => void,
  ) {
    // 심볼 정보 구성
    const symbolInfo = {
      ticker: symbolName,
      name: symbolName,
      description: `Symbol: ${symbolName}`,
      type: 'crypto',
      session: '24x7',
      timezone: 'Asia/Seoul',
      has_intraday: true,
      supported_resolutions: ['1', '5', '15', '30', '60', '1D', '1W', '1M'],
      pricescale: 100,
      volume_precision: 2,
      exchange: 'Upbit',
      minmov: 1,
    };
    setTimeout(() => onSymbolResolvedCallback(symbolInfo), 0);
  }

  /**
   * 과거 차트 데이터를 조회합니다.
   * @param symbolInfo - 심볼 정보
   * @param resolution - 시간봉 단위
   * @param params - 조회 기간 정보 (from, to)
   * @param onHistoryCallback - 히스토리 데이터를 전달받을 콜백 함수
   * @param onErrorCallback - 에러 발생 시 호출될 콜백 함수
   */

  getBars(
    symbolInfo: any,
    resolution: string,
    { from, to }: any,
    onHistoryCallback: (bars: any[], meta: { noData: boolean }) => void,
    onErrorCallback: (error: any) => void,
  ) {
    fetch(
      `https://api.upbit.com/v1/candles/minutes/${resolution}?market=${symbolInfo.name}&to=${new Date(
        to * 1000,
      ).toISOString()}&count=200`,
    )
      .then((response) => response.json())
      .then((data) => {
        const bars = data.reverse().map((item: any) => ({
          time: new Date(item.candle_date_time_utc).getTime(),
          open: item.opening_price,
          high: item.high_price,
          low: item.low_price,
          close: item.trade_price,
          volume: item.candle_acc_trade_volume,
        }));
        console.log('Historical bars:', bars);
        onHistoryCallback(bars, { noData: bars.length === 0 });
      })
      .catch((error) => {
        console.error('Error fetching historical data:', error);
        onErrorCallback(error);
      });
  }
  /**
   * 실시간 데이터 구독을 시작합니다.
   * @param symbolInfo - 심볼 정보
   * @param resolution - 시간봉 단위
   * @param onRealtimeCallback - 실시간 데이터를 전달받을 콜백 함수
   * @param subscriberUID - 구독자 식별자
   * @param onResetCacheNeededCallback - 캐시 리셋이 필요할 때 호출될 콜백 함수
   */
  subscribeBars(
    symbolInfo: any,
    resolution: string,
    onRealtimeCallback: (bar: any) => void,
    subscriberUID: string,
    onResetCacheNeededCallback: () => void,
  ) {
    // Upbit 웹소켓 연결 설정
    this.socket = new WebSocket('wss://api.upbit.com/websocket/v1');

    // 웹소켓 연결 성공 시
    this.socket.onopen = () => {
      console.log('WebSocket connected');
      // 구독 메시지 전송
      this.socket?.send(
        JSON.stringify([
          { ticket: 'tradingview' },
          {
            type: 'ticker',
            codes: [symbolInfo.name],
          },
        ]),
      );
    };

    // 실시간 데이터 수신 시
    this.socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.code === symbolInfo.name) {
          // 수신된 데이터를 TradingView 형식으로 변환
          const bar = {
            time: new Date(data.trade_timestamp).getTime(),
            open: data.opening_price,
            high: data.high_price,
            low: data.low_price,
            close: data.trade_price,
            volume: data.acc_trade_volume_24h,
          };
          onRealtimeCallback(bar);
        }
      } catch (err) {
        console.error('Error parsing WebSocket message:', err);
      }
    };

    // 웹소켓 에러 처리
    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    // 웹소켓 연결 종료 처리
    this.socket.onclose = () => {
      console.log('WebSocket disconnected');
    };
  }

  /**
   * 실시간 데이터 구독을 해제합니다.
   * @param subscriberUID - 구독자 식별자
   */
  unsubscribeBars(subscriberUID: string) {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
      console.log('Unsubscribed from WebSocket');
    }
  }
}

export default MockFeed;
