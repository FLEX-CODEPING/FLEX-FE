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
      supported_resolutions: ['1D'],
      pricescale: 100,
      volume_precision: 0,
      minmov: 1,
    };

    setTimeout(() => onSymbolResolvedCallback(symbolInfo), 0);
  }

  getBars(
    symbolInfo: any,
    resolution: string,
    { from, to }: any,
    onHistoryCallback: (bars: any[], meta: { noData: boolean }) => void,
    onErrorCallback: (error: any) => void,
  ) {
    try {
      const bars = this.chartData
        .map((data) => ({
          time: new Date(
            `${data.stck_bsop_date.slice(0, 4)}-${data.stck_bsop_date.slice(4, 6)}-${data.stck_bsop_date.slice(6)}`,
          ).getTime(),
          open: parseFloat(data.stck_oprc),
          high: parseFloat(data.stck_hgpr),
          low: parseFloat(data.stck_lwpr),
          close: parseFloat(data.stck_clpr),
          volume: parseInt(data.acml_vol, 10),
        }))
        .filter((bar) => bar.time >= from * 1000 && bar.time <= to * 1000)
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

  searchSymbols(
    userInput: string,
    exchange: string,
    symbolType: string,
    onResultReadyCallback: (symbols: any[]) => void,
  ) {
    // 아무 동작도 하지 않음
    setTimeout(() => onResultReadyCallback([]), 0);
  }
}

export default MockFeed;
