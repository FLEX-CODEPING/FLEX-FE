'use client';

import Button from '@/app/components/common/Button';
import {
  SIDE_NAV_TYPES,
  SIDE_STATUS_TEXT,
  TRADE_EMPTY,
} from '@/app/constants/simulation';
import { TRADE_DATA } from '@/app/data/simulation';
import { useState } from 'react';
import EmptyGuide from '../EmptyGuide';

const Trade = () => {
  const [isNow, setIsNow] = useState(true);
  return (
    <div className="w-[260px] h-[620px] flex-col flex px-4 py-3.5 border border-gray-4 rounded-[10px]">
      <div className="w-full flex justify-between items-end">
        <p className="text-base">{SIDE_NAV_TYPES[4]}</p>
        <div className="flex gap-x-1">
          <Button
            buttonText={SIDE_STATUS_TEXT[0]}
            type={isNow ? 'statusClicked' : 'status'}
            onClickHandler={() => setIsNow(true)}
          />
          <Button
            buttonText={SIDE_STATUS_TEXT[1]}
            type={!isNow ? 'statusClicked' : 'status'}
            onClickHandler={() => setIsNow(false)}
          />
        </div>
      </div>
      <div className="w-full flex gap-x-10 justify-center text-xs font-semibold text-black-1 border-b border-gray-1 pt-6 pb-1">
        <p>{SIDE_STATUS_TEXT[2]}</p>
        <p>{SIDE_STATUS_TEXT[3]}</p>
        <p>{SIDE_STATUS_TEXT[4]}</p>
      </div>
      <div className="w-full flex flex-col py-3 px-5 gap-y-2 overflow-y-auto">
        {TRADE_DATA.length === 0 ? (
          <EmptyGuide phraseArr={TRADE_EMPTY} />
        ) : (
          TRADE_DATA.map((data, i) => (
            <div className="w-full flex text-[11px] text-black-1 justify-between">
              <p className="w-[44px] font-medium text-center">
                {data.trade_time}
              </p>
              <p className="w-[54px] text-center">{data.trade_price}원</p>
              <p className="w-[50px] text-center">{data.trade_amount}개</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Trade;
