'use client';

import { AMOUNT_TYPES, TRADEBAR_TEXT } from '@/app/constants/simulation';
import { useState } from 'react';
import Input from '../../common/Input';

const TradeBar = () => {
  const [tradeType, setTradeType] = useState<TradeType>('매수');
  const [tradeCnt, setTradeCnt] = useState('0');
  const [amountType, setAmountType] = useState<AmountType | null>(null);
  const selectAmountType = (type: AmountType) => {
    amountType === type ? setAmountType(null) : setAmountType(type);
  };

  const sellStyles = tradeType === '매수' ? 'text-red-1' : 'text-gray-1';
  const buyStyles = tradeType === '매도' ? 'text-blue-1' : 'text-gray-1';
  const selectedStyle = (type: TradeType) =>
    tradeType === type && 'bg-white rounded-[15px]';

  return (
    <div className="w-[300px] h-[489px] px-10 py-3 flex flex-col rounded-[10px] border border-gray-1">
      <div className="flex flex-col gap-y-4">
        <p>{TRADEBAR_TEXT[0]}</p>
        <div className="w-full flex px-5 py-1 bg-[#e6e6e6] rounded-[25px] justify-between font-semibold">
          <div
            className={`w-[84px] h-[30px] flex-center cursor-pointer ${sellStyles} ${selectedStyle('매수')}`}
            onClick={() => setTradeType('매수')}
          >
            {TRADEBAR_TEXT[1]}
          </div>
          <div
            className={`w-[84px] h-[30px] flex-center cursor-pointer ${buyStyles} ${selectedStyle('매도')}`}
            onClick={() => setTradeType('매도')}
          >
            {TRADEBAR_TEXT[2]}
          </div>
        </div>
        <div className="flex w-full flex-col gap-y-3">
          <div className=" flex w-full justify-between items-center">
            <p>{TRADEBAR_TEXT[3]}</p>
            <div className="w-[140px] h-[33px] px-3 py-2 flex items-center justify-end rounded-md border border-gray-2 font-light text-black-1 text-sm">
              72,000원
            </div>
          </div>
          <div className=" flex w-full justify-between items-center">
            <p>{TRADEBAR_TEXT[4]}</p>
            <Input
              inputType="number"
              className="text-right outline-none"
              type="trade"
              onChange={(e) => setTradeCnt(e.target.value)}
              placeholder="0"
            />
          </div>
          <div className="flex w-full justify-end gap-x-1">
            {AMOUNT_TYPES.map((amount, i) => (
              <div
                key={amount}
                className={`w-8 h-8 flex-center rounded-md text-[10px] cursor-pointer ${amountType === amount ? 'font-bold text-black border border-[#000000]' : 'text-black-1 font-normal border border-gray-2'}`}
                onClick={() => selectAmountType(amount)}
              >
                {amount}
              </div>
            ))}
          </div>
          <div className=" flex w-full justify-between items-center">
            <p>{TRADEBAR_TEXT[5]}</p>
            <div className="w-[140px] h-[33px] px-3 py-2 flex items-center justify-end rounded-md border border-gray-2 font-light text-black-1 text-sm">
              {Number(tradeCnt) * 72000}원
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeBar;
