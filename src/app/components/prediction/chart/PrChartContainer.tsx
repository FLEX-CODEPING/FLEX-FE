'use client';

import { useEffect, useState } from 'react';
import { callPost } from '@/app/utils/callApi';
import PrChart from './PrChart';
import StockSearchBar from '@/app/components/simulation/search/StockSearchBar'; // StockSearchBar 컴포넌트 가져오기
import useStockStore from '@/app/store/store';

const PrChartContainer = () => {
  const [data, setData] = useState<any[]>([]);
  const [symbol, setSymbol] = useState('005930'); // 기본 심볼
  const [searchText, setSearchText] = useState(''); // 검색 입력 상태
  const { stockCode, stockName } = useStockStore();

  // 데이터 로드
  const fetchData = async () => {
    const reqBody = {
      marketDivCode: 'J',
      stockCode: stockCode,
      dateFrom: '20220101',
      dateTo: '20241231',
      periodDivCode: 'D',
      orgAdjPrice: 0,
    };

    try {
      const response = await callPost('/api/stocks/price', reqBody);
      console.log(response, '받아온 주식데이터', stockName, '종목명');
      if (response?.result) {
        setData(response.result[1]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // 심볼 변경 시 데이터 로드
  }, [stockCode]);

  // 검색된 심볼 데이터를 로드
  const handleGetStockInfo = async (stockCode: string) => {
    setSymbol(stockCode); // 심볼 업데이트
    fetchData(); // 데이터 로드
  };

  return (
    <div>
      <PrChart chartData={data} symbol={stockCode || '005930'} />
    </div>
  );
};

export default PrChartContainer;
