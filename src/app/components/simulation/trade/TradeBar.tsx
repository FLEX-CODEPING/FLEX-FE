'use client';

import {
  AMOUNT_TYPES,
  TRADE_BUY_TEXT,
  TRADE_SELL_TEXT,
} from '@/app/constants/simulation';
import { useState } from 'react';
import Input from '../../common/Input';
import BuyCalculation from './BuyCalculation';
import SellCalculation from './SellCalculation';

const TradeBar = () => {
  const [tradeType, setTradeType] = useState<TradeType>('매수');
  const [tradeCnt, setTradeCnt] = useState('');
  const [amountType, setAmountType] = useState<AmountType | null>(null);

  const sellStyles = tradeType === '매수' ? 'text-red-1' : 'text-gray-1';
  const buyStyles = tradeType === '매도' ? 'text-blue-1' : 'text-gray-1';

  const selectAmountType = (type: AmountType) => {
    amountType === type ? setAmountType(null) : setAmountType(type);
  };

  const chngeTradeType = (type: TradeType) => {
    setTradeCnt('');
    setAmountType(null);
    setTradeType(type);
  };

  const selectedStyle = (type: TradeType) =>
    tradeType === type && 'bg-white rounded-[15px]';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (Number(value) <= 999) {
      setTradeCnt(value);
    }
  };

  return (
    <div className="w-[300px] h-[475px] px-8 py-4 flex flex-col rounded-[10px] border border-gray-4">
      <div className="flex flex-col gap-y-4">
        <p>{TRADE_BUY_TEXT[0]}</p>
        <div className="w-full flex px-5 py-1 bg-[#e6e6e6] rounded-[25px] justify-between text-sm font-semibold">
          <div
            className={`w-[84px] h-[30px] flex-center cursor-pointer ${sellStyles} ${selectedStyle('매수')}`}
            onClick={() => chngeTradeType('매수')}
          >
            {TRADE_BUY_TEXT[1]}
          </div>
          <div
            className={`w-[84px] h-[30px] flex-center cursor-pointer ${buyStyles} ${selectedStyle('매도')}`}
            onClick={() => chngeTradeType('매도')}
          >
            {TRADE_BUY_TEXT[2]}
          </div>
        </div>
        <div className="flex w-full flex-col gap-y-3 text-sm">
          <div className=" flex w-full justify-between items-center">
            <p>
              {tradeType === '매수' ? TRADE_BUY_TEXT[3] : TRADE_SELL_TEXT[3]}
            </p>
            <div className="w-[140px] h-[33px] px-3 py-2 flex items-center justify-end rounded-md border border-gray-2 font-light text-black-1 text-sm">
              72,000원
            </div>
          </div>
          <div className=" flex w-full justify-between items-center">
            <p>{TRADE_BUY_TEXT[4]}</p>
            <Input
              className="text-right outline-none"
              type="trade"
              textValue={tradeCnt}
              inputType="number"
              placeholder="0"
              onChange={handleChange}
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
            <p>{TRADE_BUY_TEXT[5]}</p>
            <div className="w-[140px] h-[33px] px-3 py-2 flex items-center justify-end rounded-md border border-gray-2 font-light text-black-1 text-sm">
              {Number(tradeCnt) * 72000 || 0}원
            </div>
          </div>
        </div>
        {tradeType === '매수' ? (
          <BuyCalculation
            total={Number(tradeCnt) * 72000}
            assets={100000}
            stockId="005930"
          />
        ) : (
          <SellCalculation
            total={Number(tradeCnt) * 72000}
            assets={100000}
            stockId="005930"
          />
        )}
      </div>
    </div>
  );
};

export default TradeBar;
