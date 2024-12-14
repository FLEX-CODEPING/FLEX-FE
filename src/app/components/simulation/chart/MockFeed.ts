class MockFeed {
  private chartData: any[];

  constructor(chartData: any[]) {
    this.chartData = chartData;
  }

  onReady(callback: (config: any) => void) {
    setTimeout(() => {
      callback({
        supported_resolutions: ['1', '5', '15', '30', '60', '1D'],
        supports_search: true,
        supports_group_request: false,
        supports_marks: false,
        supports_timescale_marks: false,
      });
    }, 0);
  }

  subscribeBars(
    symbolInfo: any,
    resolution: string,
    onRealtimeCallback: (bar: any) => void,
    subscriberUID: string,
  ) {
    return () => {};
  }

  resolveSymbol(
    symbolName: string,
    onSymbolResolvedCallback: (symbolInfo: any) => void,
  ) {
    const symbolInfo = {
      ticker: symbolName, // symbolName을 사용
      name: symbolName,
      description: `${symbolName} Stock`,
      type: 'stock',
      session: '0900-1530',
      timezone: 'Asia/Seoul',
      exchange: 'Default Exchange', // 기본값 설정
      has_intraday: true,
      supported_resolutions: ['1', '5', '30', '60', '1D'], // 분봉 및 일봉 추가
      pricescale: 100,
      volume_precision: 0,
      minmov: 1,
    };

    setTimeout(() => onSymbolResolvedCallback(symbolInfo), 0);
  }

  getBars(
    { from, to }: any,
    onHistoryCallback: (bars: any[], meta: { noData: boolean }) => void,
    onErrorCallback: (error: any) => void,
  ) {
    try {
      const bars = this.chartData
        .map((data) => {
          const year = data.tradingDate.slice(0, 4);
          const month = data.tradingDate.slice(4, 6);
          const day = data.tradingDate.slice(6);
          const hour = data.transactionTime.slice(0, 2);
          const minute = data.transactionTime.slice(2, 4);
          const second = data.transactionTime.slice(4);
          return {
            time:
              new Date(
                `${year}-${month}-${day}T${hour}:${minute}:${second}`,
              ).getTime() / 1000,
            open: parseFloat(data.openPrice),
            high: parseFloat(data.highPrice),
            low: parseFloat(data.lowPrice),
            close: parseFloat(data.curPrice),
            volume: parseInt(data.transactionVolume, 10),
          };
        })
        .filter((bar) => bar.time >= from && bar.time <= to)
        .sort((a, b) => a.time - b.time);

      if (bars.length === 0) {
        onHistoryCallback([], { noData: true });
      } else {
        onHistoryCallback(bars, { noData: false });
      }
    } catch (error) {
      console.error('Error in getBars:', error);
      onErrorCallback(error);
    }
  }
}

export default MockFeed;
