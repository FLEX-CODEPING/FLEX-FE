import { TRADEBAR_TEXT } from '@/app/constants/simulation';
import Button from '../../common/Button';

interface TradeCalculationProps {
  total: number;
  assets: number;
  stockId: string;
}

const TradeCalculation = ({
  total,
  assets,
  stockId,
}: TradeCalculationProps) => {
  const isLacked = assets - total < 0;
  const isQualified = !isLacked && total > 0;
  return (
    <div className="flex w-full flex-col gap-y-4">
      <div className="w-full border border-gray-3 my-2" />
      <div className="flex items-center text-sm justify-between">
        <p>{TRADEBAR_TEXT[6]}</p>
        <p>{assets}</p>
      </div>
      <div className="flex items-center text-sm justify-between">
        <p>{TRADEBAR_TEXT[7]}</p>
        <p>{total}</p>
      </div>
      <div className="flex items-center text-sm justify-between mb-2">
        <p>{TRADEBAR_TEXT[8]}</p>
        <p className={`${isLacked && 'text-red-1'}`}>{assets - total}</p>
      </div>
      <Button
        buttonText={TRADEBAR_TEXT[9]}
        isDisabled={!isQualified}
        type="trade"
        className={isQualified ? 'bg-red-1' : 'bg-gray-1'}
        onClickHandler={() => console.log('거래 주식 id :', stockId)}
      />
    </div>
  );
};

export default TradeCalculation;
