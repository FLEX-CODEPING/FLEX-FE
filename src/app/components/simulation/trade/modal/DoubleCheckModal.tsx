'use client';

import Button from '@/app/components/common/Button';
import { useInvalidateBalance } from '@/app/hooks/useBalance';
import { useInvalidateHoldStock } from '@/app/hooks/useHoldStock';
import { useInfiniteTrade } from '@/app/hooks/useInfiniteTrade';
import { useRefreshHoldStocks } from '@/app/hooks/usePosession';
import { callPost } from '@/app/utils/callApi';
import { motion } from 'motion/react';
import { useState } from 'react';

interface DoubleCheckModalProps {
  textArr: string[];
  tradeType: TradeType;
  closeModal: () => void;
  data: TradeBuyTypes | TradeSellTypes;
}

const DoubleCheckModal = ({
  textArr,
  tradeType,
  closeModal,
  data,
}: DoubleCheckModalProps) => {
  const [isDone, setIsDone] = useState(false);
  const invalidateBalance = useInvalidateBalance();
  const invalidateHoldStock = useInvalidateHoldStock();
  const invalidateTrade = useInfiniteTrade();
  const invalidatePosession = useRefreshHoldStocks();
  const colorBefore = tradeType === '매수' ? 'bg-red-2' : 'bg-blue-2';
  const colorAfter =
    tradeType === '매수' ? 'hover:bg-red-1' : 'hover:bg-blue-1';

  const buyStock = async () => {
    try {
      const url =
        tradeType === '매수' ? 'api/stocks/trade/buy' : 'api/stocks/trade/sell';
      const response = await callPost(url, data);
      invalidateBalance.mutate();
      invalidateHoldStock.mutate();
      invalidatePosession.mutate();
      setIsDone(true);
    } catch (error) {
      console.error('매수 실패:', error);
    }
  };

  return (
    <div className="z-20 fixed inset-0 flex-center bg-gray-1 bg-opacity-70">
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
            <motion.div
              className={`${colorBefore} text-white ${colorAfter} rounded-md `}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Button
                buttonText={textArr[1]}
                type="tradeModal"
                onClickHandler={buyStock}
              />
            </motion.div>
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
