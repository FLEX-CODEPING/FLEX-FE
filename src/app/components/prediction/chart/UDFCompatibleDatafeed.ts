import { symbols } from '../../../constants/symbols';

class UDFCompatibleDatafeed {
  private chartData: any[];
  private symbols: {
    symbol: string;
    name: string;
    description: string;
    exchange: string;
  }[];

  constructor(chartData: any[]) {
    this.chartData = chartData;
    this.symbols = symbols;
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
    const symbol = this.symbols.find((s) => s.symbol === symbolName);

    if (!symbol) {
      throw new Error(`Symbol ${symbolName} not found`);
    }

    const symbolInfo = {
      ticker: symbol.symbol,
      name: symbol.name,
      description: symbol.description,
      type: 'stock',
      session: '0900-1530',
      timezone: 'Asia/Seoul',
      exchange: symbol.exchange,
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
    const filteredSymbols = this.symbols.filter((symbol) => {
      const matchesInput =
        symbol.symbol.toLowerCase().includes(userInput.toLowerCase()) ||
        symbol.description.toLowerCase().includes(userInput.toLowerCase());

      const matchesExchange = exchange
        ? symbol.exchange.toLowerCase() === exchange.toLowerCase()
        : true;

      return matchesInput && matchesExchange;
    });

    setTimeout(() => onResultReadyCallback(filteredSymbols), 0);
  }
}

export default UDFCompatibleDatafeed;
