'use client';

import {
  likeSmall,
  noneStockSearch,
  searchStock,
} from '@/app/constants/iconPath';
import { STOCK_SEARCH_EMPTY_TEXT } from '@/app/constants/prediction';
import { SEARCH_STOCK } from '@/app/constants/simulation';
import { callGet, callPost } from '@/app/utils/callApi';
import Image from 'next/image';
import { useState } from 'react';
import Icons from '../../common/Icons';
import Input from '../../common/Input';

const SImulateSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [stockInfo, setStockInfo] = useState<null | StockInfoTypes>(null);
  console.log(stockInfo);

  const getStockInfo = async () => {
    const response = await callGet(`api/stocks?code=${searchText}`);
    setStockInfo(response.result);
  };

  const interestStock = async () => {
    const response = await callPost(`api/stocks/interest?code=${searchText}`);
    getStockInfo();
  };

  const deleteInterest = async () => {
    const response = await callPost(`api/stocks/interest?code=${searchText}`);
    getStockInfo();
  };

  return (
    <div className="flex w-full justify-between items-end pb-2">
      {stockInfo ? (
        <div className="flex px-[15.5px] py-3 justify-between w-[360px] items-end">
          <div className="flex gap-x-2.5">
            <div className="w-[40px] h-[40px] relative rounded-[18px]">
              {stockInfo.symbolImageUrl === null ? (
                <Icons name={noneStockSearch} />
              ) : (
                <Image
                  src="/Images/samsung.png"
                  alt="stockImg"
                  fill
                  className="rounded-[18px]"
                />
              )}
            </div>
            <div className="flex flex-col">
              <div className="flex gap-x-1 items-end">
                <p className="text-sm font-bold">{stockInfo.corpName}</p>
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

      <div className="flex relative">
        <Input
          type="simulation"
          placeholder={SEARCH_STOCK}
          onChange={(e) => setSearchText(e.target.value)}
          onEnterPress={getStockInfo}
        />
        <Icons
          name={searchStock}
          className="absolute right-5 top-2 cursor-pointer"
          onClick={getStockInfo}
        />
      </div>
    </div>
  );
};

export default SImulateSearch;
