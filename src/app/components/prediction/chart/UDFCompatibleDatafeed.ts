class UDFCompatibleDatafeed {
  private static baseUrl: string = 'http://localhost:3000/api';

  static onReady(
    callback: (config: {
      supported_resolutions: string[];
      supports_search: boolean;
      supports_group_request: boolean;
      supports_marks: boolean;
      supports_timescale_marks: boolean;
    }) => void,
  ): void {
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

  static resolveSymbol(
    symbolName: string,
    onSymbolResolvedCallback: (symbolInfo: any) => void,
  ): void {
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
      exchange: 'Dummy Exchange',
      minmov: 1,
    };
    setTimeout(() => onSymbolResolvedCallback(symbolInfo), 0);
  }

  static getBars(
    symbolInfo: any,
    resolution: string,
    { from, to }: { from: number; to: number },
    onHistoryCallback: (bars: any[], meta: { noData: boolean }) => void,
    onErrorCallback: (error: any) => void,
  ): void {
    const bars = [];
    let currentTime = from * 1000;
    const barInterval = UDFCompatibleDatafeed.getBarInterval(resolution);

    try {
      while (currentTime <= to * 1000) {
        const open = Math.random() * 100 + 5000;
        const close = open + Math.random() * 10 - 5;
        const high = Math.max(open, close) + Math.random() * 5;
        const low = Math.min(open, close) - Math.random() * 5;
        const volume = Math.random() * 100;

        bars.push({
          time: currentTime,
          open,
          high,
          low,
          close,
          volume,
        });

        currentTime += barInterval;
      }
      onHistoryCallback(bars, { noData: bars.length === 0 });
    } catch (error) {
      onErrorCallback(error);
    }
  }

  static subscribeBars(
    symbolInfo: any,
    resolution: string,
    onRealtimeCallback: (bar: any) => void,
  ): void {
    setInterval(() => {
      const open = Math.random() * 100 + 5000;
      const close = open + Math.random() * 10 - 5;
      const high = Math.max(open, close) + Math.random() * 5;
      const low = Math.min(open, close) - Math.random() * 5;
      const volume = Math.random() * 100;
      const bar = {
        time: Date.now(),
        open,
        high,
        low,
        close,
        volume,
      };
      onRealtimeCallback(bar);
    }, UDFCompatibleDatafeed.getBarInterval(resolution));
  }

  static getBarInterval(resolution: string): number {
    const resolutionMap: { [key: string]: number } = {
      '1': 60 * 1000,
      '5': 5 * 60 * 1000,
      '15': 15 * 60 * 1000,
      '30': 30 * 60 * 1000,
      '60': 60 * 60 * 1000,
      '1D': 24 * 60 * 60 * 1000,
    };
    return resolutionMap[resolution] || 60 * 1000; // 기본값 1분
  }
}

export default UDFCompatibleDatafeed;
