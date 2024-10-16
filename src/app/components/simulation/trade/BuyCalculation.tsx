import { TRADE_BUY_TEXT } from '@/app/constants/simulation';
import Button from '../../common/Button';

interface BuyCalculationProps {
  total: number;
  assets: number;
  stockId: string;
}

const BuyCalculation = ({ total, assets, stockId }: BuyCalculationProps) => {
  const isLacked = assets - total < 0;
  const isQualified = !isLacked && total > 0;
  return (
    <div className="flex w-full flex-col gap-y-3 text-sm">
      <div className="w-full border border-gray-3" />
      <div className="flex items-center justify-between">
        <p>{TRADE_BUY_TEXT[6]}</p>
        <p>{assets}</p>
      </div>
      <div className="flex items-center justify-between">
        <p>{TRADE_BUY_TEXT[7]}</p>
        <p>{total}</p>
      </div>
      <div className="flex items-center justify-between mb-2">
        <p>{TRADE_BUY_TEXT[8]}</p>
        <p className={`${isLacked && 'text-red-1'}`}>{assets - total}</p>
      </div>
      <Button
        buttonText={TRADE_BUY_TEXT[9]}
        isDisabled={!isQualified}
        type="trade"
        className={isQualified ? 'bg-red-1' : 'bg-gray-1'}
        onClickHandler={() => console.log('거래 주식 id :', stockId)}
      />
    </div>
  );
};

export default BuyCalculation;
