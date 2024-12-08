import { TRADE_TYPE } from '@/app/constants/simulation';
import { motion } from 'motion/react';

interface TradeToggleProps {
  isBuy: boolean;
  chngeTradeType: () => void;
}

const TradeToggle = ({ isBuy, chngeTradeType }: TradeToggleProps) => {
  const textStyles = (type: TradeType) => {
    if (isBuy) return type === '매수' ? 'text-red-1' : 'text-gray-1';
    return type === '매도' ? 'text-blue-1' : 'text-gray-1';
  };
  return (
    <div className="w-full flex px-5 py-1 bg-[#e6e6e6] rounded-[25px] text-sm font-semibold relative">
      <motion.div
        className="absolute top-1 left-5 w-24 h-[30px] bg-white rounded-[15px]"
        animate={{
          x: isBuy ? 0 : 96,
        }}
        initial={false}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
      />
      {TRADE_TYPE.map((type) => (
        <div
          className={`w-24 h-[30px] flex-center cursor-pointer ${textStyles(type)} z-[1]`}
          onClick={chngeTradeType}
        >
          {type}
        </div>
      ))}
    </div>
  );
};

export default TradeToggle;
