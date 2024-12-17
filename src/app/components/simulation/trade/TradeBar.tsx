'use client';

import {
  AMOUNT_PERCENT,
  AMOUNT_TYPES,
  TRADE_BUY_TEXT,
  TRADE_SELL_TEXT,
} from '@/app/constants/simulation';
import { useBalance } from '@/app/hooks/useBalance';
import useStockStore from '@/app/store/store';
import { callGet, callPost } from '@/app/utils/callApi';
import { useEffect, useState } from 'react';
import Input from '../../common/Input';
import BuyCalculation from './BuyCalculation';
import SellCalculation from './SellCalculation';
import TradeToggle from './TradeToggle';

const TradeBar = () => {
  const { data: balance = 0 } = useBalance();
  const [isBuy, setIsBuy] = useState(true);
  const [tradeCnt, setTradeCnt] = useState('');
  const [holdStock, setHoldStock] = useState<HoldStockTypes | null>(null);
  const [amountType, setAmountType] = useState<AmountType | null>(null);
  const [stockPrice, setStockPrice] = useState(0);
  const { stockCode } = useStockStore();

  const selectAmountType = (type: AmountType, i: number) => {
    const possibleCnt = isBuy
      ? (balance / stockPrice) * AMOUNT_PERCENT[i]
      : Number(holdStock?.totalHoldings) * AMOUNT_PERCENT[i];
    setTradeCnt(String(Math.floor(possibleCnt)));
    if (amountType === type) {
      setAmountType(null);
      setTradeCnt('0');
    } else {
      setAmountType(type);
    }
  };

  const chngeTradeType = () => {
    setTradeCnt('');
    setAmountType(null);
    setIsBuy(!isBuy);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (
      !isBuy &&
      holdStock &&
      Number(value) <= Number(holdStock.totalHoldings)
    ) {
      setTradeCnt(value);
    }
    if (Number(value) <= 999) {
      setTradeCnt(value);
    }
  };

  useEffect(() => {
    const initCalc = async () => {
      const price = await callPost(
        `/api/stocks/price/inquire?stockcode=${stockCode}`,
      );
      const limitResponse = await callGet(
        `/api/stocks/hold?holdStatus=HOLDING&page=1&size=20&property=createdAt&direction=desc`,
      );

      const stocks = limitResponse.result.content;
      const hold: HoldStockTypes = stocks.find(
        (item: HoldStockTypes) => item.stockCode === stockCode,
      );
      setStockPrice(price.result[0].stck_prpr);
      if (!isBuy && hold) {
        setStockPrice(Math.floor(hold.avgPrice));
        setHoldStock(hold);
        setTradeCnt(String(hold.totalHoldings));
      } else if (!hold) {
        setHoldStock(null);
      }
    };
    stockCode && initCalc();
  }, [stockCode, isBuy]);

  return (
    <div className="w-[300px] h-[475px] px-8 py-4 flex flex-col rounded-[10px] border border-gray-4">
      <div className="flex flex-col gap-y-4">
        <p>{TRADE_BUY_TEXT[0]}</p>
        <TradeToggle isBuy={isBuy} chngeTradeType={chngeTradeType} />
        <div className="flex w-full flex-col gap-y-3 text-sm">
          <div className=" flex w-full justify-between items-center">
            <p>{isBuy ? TRADE_BUY_TEXT[3] : TRADE_SELL_TEXT[3]}</p>
            <div className="w-[140px] h-[33px] px-3 py-2 flex items-center justify-end rounded-md border border-gray-2 font-light text-black-1 text-sm">
              {stockPrice}
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
                className={`w-8 h-8 flex-center rounded-md text-[10px] cursor-pointer ${amountType === amount ? 'font-medium text-black border border-black-1' : 'text-black-1 font-light border border-gray-2'}`}
                onClick={() => selectAmountType(amount, i)}
              >
                {amount}
              </div>
            ))}
          </div>
          <div className=" flex w-full justify-between items-center">
            <p>{TRADE_BUY_TEXT[5]}</p>
            <div className="w-[140px] h-[33px] px-3 py-2 flex items-center justify-end rounded-md border border-gray-2 font-light text-black-1 text-sm">
              {Number(tradeCnt) * stockPrice || 0}원
            </div>
          </div>
        </div>
        {isBuy ? (
          <BuyCalculation
            quantity={Number(tradeCnt)}
            assets={balance}
            totalPrice={Number(tradeCnt) * stockPrice}
            price={stockPrice}
          />
        ) : (
          <SellCalculation
            holdStockId={holdStock?.holdStockId || 0}
            quantity={Number(tradeCnt)}
            assets={balance}
            totalPrice={Number(tradeCnt) * stockPrice}
            price={stockPrice}
            holdStock={holdStock}
          />
        )}
      </div>
    </div>
  );
};

export default TradeBar;
