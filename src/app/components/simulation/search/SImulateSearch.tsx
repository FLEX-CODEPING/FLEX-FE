'use client';

import useStockCodeStore from '@/app/store/store';
import { callGet } from '@/app/utils/callApi';
import { isOpenTime } from '@/app/utils/date';
import { useEffect, useState } from 'react';
import PreopenSearchInfo from './PreopenSearchInfo';
import SearchInfo from './SearchInfo';
import StockSearchBar from './StockSearchBar';

const SImulateSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [stockInfo, setStockInfo] = useState<null | StockInfoTypes>(null);
  const { setStockCode, stockCode } = useStockCodeStore();

  const apiURL = (code: string) => {
    return isOpenTime()
      ? `api/stocks?code=${code}`
      : `api/stocks/offHour?code=${code}&date=${'2024-12-04'}`;
  };

  const getStockInfo = async (code: string) => {
    const response = await callGet(apiURL(code));
    if (response.isSuccess) {
      const statusRes: InterestedStautsTypes = await callGet(
        `api/stocks/interest/status?code=${code}`,
      );
      setStockCode(code, response.result.stockName);
      setStockInfo({ ...response.result, isInterested: statusRes.result });
    } else {
      setStockCode('null', '');
    }
    setSearchText('');
  };

  useEffect(() => {
    stockCode && getStockInfo(stockCode);
  }, [stockCode]);

  return (
    <div className="flex w-full justify-between items-end pb-2">
      {isOpenTime() ? (
        <SearchInfo
          stockInfo={stockInfo}
          stockCode={stockCode}
          getStockInfo={getStockInfo}
        />
      ) : (
        <PreopenSearchInfo
          stockInfo={stockInfo}
          stockCode={stockCode}
          getStockInfo={getStockInfo}
        />
      )}
      <StockSearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        getStockInfo={getStockInfo}
      />
    </div>
  );
};

export default SImulateSearch;
