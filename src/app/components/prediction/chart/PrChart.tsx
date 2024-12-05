'use client';

import React, { useEffect } from 'react';
import UDFCompatibleDatafeed from './UDFCompatibleDatafeed';

interface PrChartProps {
  chartData: any[];
  symbol: string;
}

const PrChart: React.FC<PrChartProps> = ({ chartData, symbol }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/charting_library/charting_library.standalone.js';
    script.async = true;

    script.onload = () => {
      if (typeof window !== 'undefined' && (window as any).TradingView) {
        const Widget = (window as any).TradingView.widget;

        const widgetOptions = {
          symbol,
          interval: '1D',
          container: 'chartContainer',
          library_path: '/charting_library/',
          datafeed: new UDFCompatibleDatafeed(chartData), // 심볼 기반 데이터 반영
          timezone: 'Asia/Seoul',
          theme: 'Light',
          autosize: true,
          toolbar_bg: '#f4f7f9',
          disabled_features: [
            'header_symbol_search', // 기본 심볼 검색 비활성화
           
          ],
        };

        new Widget(widgetOptions);
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [chartData, symbol]); // 심볼 및 데이터 변경 시 차트 재렌더링

  return <div id="chartContainer" style={{ width: '98%', height: '570px' }} />;
};

export default PrChart;
