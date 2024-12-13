'use client';

import React, { useEffect } from 'react';
import PrDataFeed from './PrDataFeed';

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
          datafeed: new PrDataFeed(chartData),
          timezone: 'Asia/Seoul',
          theme: 'Light',
          autosize: true,
          toolbar_bg: '#f4f7f9',
          disabled_features: [
            'header_symbol_search',
            'symbol_search_hot_key',
            'symbol_info',
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
  }, [chartData, symbol]);

  return <div id="chartContainer" style={{ width: '98%', height: '570px' }} />;
};

export default PrChart;
