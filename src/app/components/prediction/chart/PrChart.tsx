'use client';

import React, { useEffect } from 'react';
import PrChartContainer from './PrChartContainer';

interface MockChartProps {
  chartData: any[];
  symbol: string;
}

const PrChart: React.FC<MockChartProps> = ({ chartData, symbol }) => {
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
          datafeed: new PrChartContainer(chartData), // 데이터 피드 연결
          timezone: 'Asia/Seoul',
          theme: 'Light',
          autosize: true,
          toolbar_bg: '#f4f7f9',
          disabled_features: [
            'header_symbol_search', // 심볼 검색 버튼 제거
            'symbol_search_hot_key', // 검색 단축키 비활성화
            'symbol_info', // 심볼 정보 툴팁 제거
            'header_compare',
          ],
          enabled_features: [],
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
