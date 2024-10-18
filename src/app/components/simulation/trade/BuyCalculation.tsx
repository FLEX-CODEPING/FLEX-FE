import { MODAL_TEXT_BUY, TRADE_BUY_TEXT } from '@/app/constants/simulation';
import { MODALDATA } from '@/app/data/simulation';
import { useModal } from '@/app/hooks/useModal';
import Button from '../../common/Button';
import DoubleCheckModal from '../modal/DoubleCheckModal';

interface BuyCalculationProps {
  total: number;
  assets: number;
  stockId: string;
}

const BuyCalculation = ({ total, assets, stockId }: BuyCalculationProps) => {
  const { isOpen, openModal, closeModal } = useModal(false);
  const isLacked = assets - total < 0;
  const isQualified = !isLacked && total > 0;

  return (
    <div className="flex w-full flex-col gap-y-3 text-sm">
      {isOpen && (
        <DoubleCheckModal
          textArr={MODAL_TEXT_BUY}
          tradeData={MODALDATA}
          tradeType="매수"
          closeModal={closeModal}
        />
      )}
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
        className={isQualified ? 'bg-red-1' : 'cursor-not-allowed bg-gray-1'}
        onClickHandler={openModal}
      />
    </div>
  );
};

export default BuyCalculation;
