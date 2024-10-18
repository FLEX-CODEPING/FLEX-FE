import { TRADE_SELL_TEXT } from '@/app/constants/simulation';
import Button from '../../common/Button';

interface SellCalculationProps {
  total: number;
  assets: number;
  stockId: string;
}

const SellCalculation = ({ total, assets, stockId }: SellCalculationProps) => {
  const isQualified = total > 0;
  return (
    <div className="flex w-full flex-col gap-y-3 text-sm">
      <div className="w-full border border-gray-3" />
      <div className="flex items-center justify-between">
        <p>{TRADE_SELL_TEXT[6]}</p>
        <p>{assets}</p>
      </div>
      <div className="flex items-center justify-between">
        <p>{TRADE_SELL_TEXT[7]}</p>
        <p>{total}</p>
      </div>
      <div className="flex items-center justify-between mb-2">
        <p>{TRADE_SELL_TEXT[8]}</p>
        <p>{assets + total}</p>
      </div>
      <Button
        buttonText={TRADE_SELL_TEXT[9]}
        isDisabled={!isQualified}
        type="trade"
        className={isQualified ? 'bg-blue-1' : 'bg-gray-1 cursor-not-allowed'}
        onClickHandler={() => console.log('거래 주식 id :', stockId)}
      />
    </div>
  );
};

export default SellCalculation;
