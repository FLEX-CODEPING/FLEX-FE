'use client';

import Input from '@/app/components/common/Input';
import {
  SIDE_NAV_TYPES,
  TRADE_EMPTY,
  TRADE_PLACEHOLDER,
  TRADETYPE_MAP,
} from '@/app/constants/simulation';
import { useRefreshTrade } from '@/app/hooks/useRefreshTrade';
import { formatNumberCommas } from '@/app/utils/formatNum';
import { tradeTypeColor } from '@/app/utils/qualify';
import { useEffect, useState } from 'react';
import EmptyGuide from '../EmptyGuide';

const Trade = () => {
  const [text, setText] = useState('');
  const [filteredRecords, setFilteredRecords] = useState<
    TransactionDataTypes[]
  >([]);

  const { data } = useRefreshTrade();

  useEffect(() => {
    const records = data || [];
    const filtered = records.filter((item) =>
      item.investment.corpName.includes(text),
    );
    setFilteredRecords(filtered);
  }, [data, text]);

  return (
    <div className="w-[260px] h-[628px] flex-col flex px-4 py-3.5 border border-gray-4  dark:border-black-1 rounded-[10px] gap-y-4 ">
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
      <div className="w-full flex flex-col gap-y-4 overflow-y-auto hide-scrollbar">
        {filteredRecords.length === 0 ? (
          <EmptyGuide phraseArr={TRADE_EMPTY} />
        ) : (
          filteredRecords.map((filteredData, i) => (
            <div
              className="w-full flex px-2 text-black-0 dark:text-gray-3 justify-between"
              key={filteredData.transactionId}
            >
              <div className="flex flex-col gap-y-0.5">
                <p className="text-xs text-black-1 dark:text-gray-3 ">
                  {filteredData?.createdAt &&
                    new Date(filteredData.createdAt).toLocaleDateString()}
                </p>
                <p className="flex text-sm font-medium">
                  {filteredData.investment.corpName}
                </p>
              </div>
              {filteredData?.investment && (
                <div className="items-end flex flex-col gap-y-0.5">
                  <div className="flex gap-x-0.5 text-xs">
                    <p className="text-[10px]">
                      {filteredData.investment.quantity}주
                    </p>
                    <p
                      className={`${tradeTypeColor(filteredData.investment.investType)}`}
                    >
                      {TRADETYPE_MAP[filteredData.investment.investType]}
                    </p>
                  </div>
                  <p className="text-sm text-black-0">
                    {formatNumberCommas(filteredData.investment.totalPrice)}원
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
