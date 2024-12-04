'use client';

import React, { useEffect } from 'react';
import UDFCompatibleDatafeed from './UDFCompatibleDatafeed';

const PrChart: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/charting_library/charting_library.standalone.js';
    script.async = true;

    script.onload = () => {
      if (typeof window !== 'undefined' && (window as any).TradingView) {
        const Widget = (window as any).TradingView.widget;
        const widgetOptions = {
          container: 'chartContainer',
          library_path: '/charting_library/',
          datafeed: new UDFCompatibleDatafeed(),
          symbol: 'KRW-BTC',
          interval: '1',
          timezone: 'Asia/Seoul',
          theme: 'Light',
          autosize: true,
          debug: true,
        };

        const tradingViewWidget = new Widget(widgetOptions);
        console.log('TradingView widget created:', tradingViewWidget);
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="chartContainer" style={{ width: '100%', height: '570px' }} />;
};

export default PrChart;
