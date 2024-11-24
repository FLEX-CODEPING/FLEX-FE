'use client';

import useStockCodeStore from '@/app/store/store';
import { callGet } from '@/app/utils/callApi';
import { getTodayDateBar, isPreOpenTime } from '@/app/utils/date';
import { useState } from 'react';
import SimulateSearchInfo from './SimulateSearchInfo';
import StockSearchBar from './StockSearchBar';

const SImulateSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [stockInfo, setStockInfo] = useState<null | StockInfoTypes>(null);
  const { setStockCode, stockCode } = useStockCodeStore();

  const apiURL = (code: string) => {
    return isPreOpenTime()
      ? `api/stocks?code=${code}`
      : `api/stocks/offHour?code=${code}&date=${getTodayDateBar()}`;
  };

  const getStockInfo = async (code: string) => {
    console.log('주식 정보 가져오기',code,'로 요청');
    
    const response = await callGet(apiURL(code));

    if (response.isSuccess) {
      const statusRes: InterestedStautsTypes = await callGet(
        `api/stocks/interest/status?code=${response.result.stockcode}`,
      );
      setStockCode(response.result.stockcode, response.result.stockName);
      setStockInfo({ ...response.result, isInterested: statusRes.result });
    } else {
      setStockCode('null', '');
    }
    setSearchText('');
  };

  return (
    <div className="flex w-full justify-between items-end pb-2">
      <SimulateSearchInfo
        stockInfo={stockInfo}
        stockCode={stockCode}
        getStockInfo={getStockInfo}
      />
      <StockSearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        getStockInfo={getStockInfo}
      />
    </div>
  );
};

export default SImulateSearch;
