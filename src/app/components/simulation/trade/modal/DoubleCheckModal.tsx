'use client';

import Button from '@/app/components/common/Button';
import useStockStore from '@/app/store/store';
import { callPost } from '@/app/utils/callApi';
import { useState } from 'react';

interface DoubleCheckModalProps {
  textArr: string[];
  tradeData: TradeDataType;
  tradeType: TradeType;
  closeModal: () => void;
}

const DoubleCheckModal = ({
  textArr,
  tradeData,
  tradeType,
  closeModal,
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

  const getTradeRecord = async () => {
    const response = await callPost('api/stocks/trade/buy', buyReqBody);
    setIsDone(true);
    console.log(response, '차트 결과');
  };

  

  return (
    <div className="fixed inset-0 flex-center bg-gray-1 bg-opacity-70 z-50">
      <div className="w-[640px] h-[284px] px-11 py-[52px] bg-white rounded-[20px] flex flex-col justify-between">
        <div className="flex flex-col gap-y-2">
          <div className="text-2xl font-semibold">
            {isDone ? textArr[3] : textArr[0]}
          </div>
          <div className="flex text-lg text-gray-1">
            {tradeData.stockName} {tradeData.stockQuantity}주{' '}
            {tradeData.stockPrice}원
          </div>
        </div>
        <div className="flex w-full flex-row-reverse gap-x-4">
          {!isDone && (
            <Button
              buttonText={textArr[1]}
              className={`${colorBefore} text-white ${colorAfter}`}
              type="tradeModal"
              onClickHandler={getTradeRecord}
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
