'use client';

import {
  SIDE_NAV_TYPES,
  TRADE_EMPTY,
  TRADETYPE_MAP,
} from '@/app/constants/simulation';
import { callGet } from '@/app/utils/callApi';
import { formatNumberCommas } from '@/app/utils/formatNum';
import { tradeTypeColor } from '@/app/utils/qualify';
import { useEffect, useState } from 'react';
import EmptyGuide from '../EmptyGuide';

const Trade = () => {
  const [record, setRecord] = useState<TransactionDataTypes[]>([]);

  const getTradeRecord = async () => {
    const response = await callGet(
      `/api/stocks/trade/transactions?page=${1}&size=${20}&property=createdAt&direction=desc`,
    );
    setRecord(response.result.content);
  };

  useEffect(() => {
    getTradeRecord();
  }, []);

  return (
    <div className="w-[260px] h-[628px] flex-col flex px-4 py-3.5 border border-gray-4 rounded-[10px]">
      <div className="w-full flex justify-between items-end">
        <p className="text-base">{SIDE_NAV_TYPES[3]}</p>
      </div>
      <div className="w-full flex flex-col py-3 gap-y-4 overflow-y-auto hide-scrollbar">
        {record.length === 0 ? (
          <EmptyGuide phraseArr={TRADE_EMPTY} />
        ) : (
          record.map((data, i) => (
            <div className="w-full flex px-2 text-black-0 justify-between">
              <div className="flex flex-col gap-y-0.5">
                <p className="text-xs text-black-1">{11.12}</p>
                <p className="flex text-sm font-medium">
                  {data.investment.corpName}
                </p>
              </div>
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
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Trade;
