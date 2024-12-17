'use client';

import Input from '@/app/components/common/Input';
import {
  SIDE_NAV_TYPES,
  TRADE_EMPTY,
  TRADE_PLACEHOLDER,
  TRADETYPE_MAP,
} from '@/app/constants/simulation';
import { formatNumberCommas } from '@/app/utils/formatNum';
import { tradeTypeColor } from '@/app/utils/qualify';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import EmptyGuide from '../EmptyGuide';

const fetchTradeRecords = async ({ pageParam = 1 }) => {
  const response = await fetch(
    `/api/stocks/trade/transactions?page=${pageParam}&size=21&property=createdAt&direction=desc`,
  );
  const data = await response.json();
  return data.result;
};

const Trade = () => {
  const [text, setText] = useState('');
  const [filteredRecords, setFilteredRecords] = useState<
    TransactionDataTypes[]
  >([]);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ['tradeRecords'],
      queryFn: fetchTradeRecords,
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        if (!lastPage.hasNext) return undefined;
        return lastPage.page + 1;
      },
    });
  const records = data?.pages.flatMap((page) => page.content) || [];

  useEffect(() => {
    const filtered = records.filter((data) =>
      data.investment.corpName.includes(text),
    );
    setFilteredRecords(filtered);
  }, [text]);

  // const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
  //   const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
  //   if (
  //     scrollHeight - scrollTop <= clientHeight * 1.5 &&
  //     hasNextPage &&
  //     !isFetchingNextPage
  //   ) {
  //     fetchNextPage();
  //   }
  // };

  return (
    <div className="w-[260px] h-[628px] flex-col flex px-4 py-3.5 border border-gray-4 rounded-[10px] gap-y-4">
      <div className="w-full flex justify-between items-end">
        <p className="text-base">{SIDE_NAV_TYPES[3]}</p>
      </div>
      <div className="relative">
        <Input
          type="record"
          onChange={(e) => setText(e.target.value)}
          placeholder={TRADE_PLACEHOLDER[0]}
        />
      </div>
      <div
        className="w-full flex flex-col gap-y-4 overflow-y-auto hide-scrollbar"
        // onScroll={handleScroll}
      >
        {records.length === 0 ? (
          <EmptyGuide phraseArr={TRADE_EMPTY} />
        ) : (
          records.map((data, i) => (
            <div
              className="w-full flex px-2 text-black-0 justify-between"
              key={data.transactionId}
            >
              <div className="flex flex-col gap-y-0.5">
                <p className="text-xs text-black-1">
                  {data?.createdAt &&
                    new Date(data.createdAt).toLocaleDateString()}
                </p>
                <p className="flex text-sm font-medium">
                  {data.investment.corpName}
                </p>
              </div>
              {data?.investment && (
                <div className="items-end flex flex-col gap-y-0.5">
                  <div className="flex gap-x-0.5 text-xs">
                    <p className="text-[10px]">{data.investment.quantity}주</p>
                    <p
                      className={`${tradeTypeColor(data.investment.investType)}`}
                    >
                      {TRADETYPE_MAP[data.investment.investType]}
                    </p>
                  </div>
                  <p className="text-sm text-black-0">
                    {formatNumberCommas(data.investment.totalPrice)}원
                  </p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Trade;
