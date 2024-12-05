'use client';

import Button from '@/app/components/common/Button';
import useStockStore from '@/app/store/store';
import { callPost } from '@/app/utils/callApi';
import { useState } from 'react';

interface DoubleCheckModalProps {
  textArr: string[];
  tradeType: TradeType;
  closeModal: () => void;
  data: TradeBuyTypes;
}

const DoubleCheckModal = ({
  textArr,
  tradeType,
  closeModal,
  data,
}: DoubleCheckModalProps) => {
  const [isDone, setIsDone] = useState(false);
  const colorBefore = tradeType === '매수' ? 'bg-red-2' : 'bg-blue-2';
  const colorAfter =
    tradeType === '매수' ? 'hover:bg-red-1' : 'hover:bg-blue-1';
  const { stockCode, stockName } = useStockStore();

  const buyReqBody = {
    quantity: 1,
    price: 20000,
    totalPrice: 20000,
    stockCode: stockCode,
    corpName: stockName,
  };

  const buyStock = async () => {
    const response = await callPost('api/stocks/trade/buy', buyReqBody);
    setIsDone(true);
  };

  return (
    <div className="fixed inset-0 flex-center bg-gray-1 bg-opacity-70 z-50">
      <div className="w-[640px] h-[244px] px-11 py-12 bg-white rounded-[20px] flex flex-col justify-between relative">
        <div className="flex flex-col gap-y-2">
          <div className="text-2xl font-medium">
            {isDone ? textArr[3] : textArr[0]}
          </div>
          <div className="flex text-lg text-gray-1">
            {data.corpName} {data.quantity}주 {data.totalPrice}원
          </div>
        </div>
        <div className="flex w-full flex-row-reverse gap-x-4">
          {!isDone && (
            <Button
              buttonText={textArr[1]}
              className={`${colorBefore} text-white ${colorAfter}`}
              type="tradeModal"
              onClickHandler={buyStock}
            />
          )}
          <Button
            buttonText={textArr[2]}
            className="border border-gray-4 hover:border-black-1 text-black-1"
            type="tradeModal"
            onClickHandler={closeModal}
          />
        </div>
      </div>
    </div>
  );
};

export default DoubleCheckModal;
