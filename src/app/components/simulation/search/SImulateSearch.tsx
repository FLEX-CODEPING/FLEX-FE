'use client';

import { likeSmall, noneStockSearch } from '@/app/constants/iconPath';
import { STOCK_SEARCH_EMPTY_TEXT } from '@/app/constants/prediction';
import useStockCodeStore from '@/app/store/store';
import { callDelete, callGet, callPost } from '@/app/utils/callApi';
import Image from 'next/image';
import { useState } from 'react';
import Icons from '../../common/Icons';
import StockSearchBar from './StockSearchBar';

const SImulateSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [stockInfo, setStockInfo] = useState<null | StockInfoTypes>(null);
  const { setStockCode, stockCode } = useStockCodeStore();
  console.log(searchText, '현재 텍스트');

  const getStockInfo = async (code: string) => {
    const response = await callGet(`api/stocks?code=${code}`);
    if (response.isSuccess) {
      const statusRes: InterestedStautsTypes = await callGet(
        `api/stocks/interest/status?code=${response.result.stockcode}`,
      );
      setStockCode(searchText, response.result.stockName);
      setStockInfo({ ...response.result, isInterested: statusRes.result });
    } else {
      setStockCode('null', '');
    }
  };

  const interestStock = async () => {
    await callPost(`api/stocks/interest?code=${stockInfo?.stockcode}`);
    getStockInfo(stockInfo?.stockcode || '');
  };

  const deleteInterest = async () => {
    await callDelete(`api/stocks/interest?id=${stockInfo?.isInterested}`);
    getStockInfo(stockInfo?.stockcode || '');
  };

  return (
    <div className="flex w-full justify-between items-end pb-2">
      {stockInfo && stockCode !== 'null' ? (
        <div className="flex px-[15.5px] py-3 justify-between w-[360px] items-end">
          <div className="flex gap-x-2.5">
            <div className="w-[40px] h-[40px] relative rounded-[18px]">
              {stockInfo.symbolImageUrl === null ? (
                <Icons name={noneStockSearch} />
              ) : (
                <Image
                  src={stockInfo.symbolImageUrl || '/images/stocks/none.png'}
                  alt="stockImg"
                  fill
                  className="rounded-[18px]"
                />
              )}
            </div>
            <div className="flex flex-col">
              <div className="flex gap-x-1 items-end">
                <p className="text-sm font-bold">{stockInfo.stockName}</p>
                <p className="text-xs font-normal">{stockInfo.stockcode}</p>
              </div>
              <p className="text-base font-medium">75520원</p>
            </div>
          </div>
          <div className="flex gap-x-1 text-red-1 text-xs items-center">
            <p>+2200</p>
            <p>(3.72%)</p>
            <Icons
              name={{
                ...likeSmall,
                fill: stockInfo.isInterested ? '#F95700' : likeSmall.fill,
              }}
              className="ml-2 cursor-pointer"
              onClick={stockInfo.isInterested ? deleteInterest : interestStock}
            />
          </div>
        </div>
      ) : (
        <div className="flex px-8 py-[14px] justify-between rounded-xl w-[360px] items-center border-dashed border border-gray-2">
          <Icons name={noneStockSearch} />
          <div className="flex flex-col gap-y-0.5 items-end">
            <p className="text-sm font-medium">{STOCK_SEARCH_EMPTY_TEXT[0]}</p>
            <p className="text-xs font-bold">{STOCK_SEARCH_EMPTY_TEXT[1]}</p>
          </div>
        </div>
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
