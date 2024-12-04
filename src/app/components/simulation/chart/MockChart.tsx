'use client';

import React, { useEffect } from 'react';
import MockFeed from './MockFeed';

/**
 * TradingView 차트를 렌더링하는 컴포넌트
 * UDFCompatibleDatafeed를 사용하여 Upbit 시장 데이터를 표시합니다.
 */
const TradingViewChart: React.FC = () => {
  // cleanup을 위한 widget 참조

  useEffect(() => {
    // TradingView 라이브러리 동적 로드
    const script = document.createElement('script');
    script.src = '/charting_library/charting_library.standalone.js';
    script.async = true;
    script.onload = () => {
      if (typeof window !== 'undefined' && (window as any).TradingView) {
        const Widget = (window as any).TradingView.widget;

        // TradingView 위젯 설정
        const widgetOptions = {
          // 기본 설정
          container: 'chartContainer',
          library_path: '/charting_library/',
          datafeed: new MockFeed('http://localhost:3000/api'),
          symbol: 'KRW-BTC', // 기본 심볼을 BTC로 변경
          interval: '1', // 기본 시간봉
          timezone: 'Asia/Seoul',
          theme: 'Light',
          autosize: true,
          debug: true,

          // 추가 설정
          locale: 'ko', // 한국어 설정
          enabled_features: [
            'use_localstorage_for_settings',
            'volume_force_overlay',
          ],
          disabled_features: [
            'header_symbol_search', // 기본 심볼 검색 비활성화
            'header_saveload', // 차트 저장/불러오기 비활성화
          ],
          // 심볼 검색 오버라이드
          symbolSearchComplete: (symbol: string) => {
            // 심볼 검색 완료 시 호출되는 콜백
            console.log('Selected symbol:', symbol);
            return symbol;
          },
        };
        // 위젯 열기
        const tradingViewWidget = new Widget(widgetOptions);
      }
    };

    // 스크립트를 DOM에 추가
    document.body.appendChild(script);

    // 컴포넌트 언마운트 시 정리
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="chartContainer"
      style={{
        width: '100%',
        height: '360px', // 차트 높이 증가
        overflow: 'hidden',
      }}
    />
  );
};

export default TradingViewChart;
