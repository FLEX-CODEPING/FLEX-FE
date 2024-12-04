import { MODAL_TEXT_SELL, TRADE_SELL_TEXT } from '@/app/constants/simulation';
import { MODALDATA } from '@/app/data/simulation';
import { useModal } from '@/app/hooks/useModal';
import Button from '../../common/Button';
import DoubleCheckModal from './modal/DoubleCheckModal';

interface SellCalculationProps {
  total: number;
  assets: number;
  stockId: string;
}

const SellCalculation = ({ total, assets, stockId }: SellCalculationProps) => {
  const { isOpen, openModal, closeModal } = useModal(false);

  const isQualified = total > 0;
  return (
    <div className="flex w-full flex-col gap-y-3 text-sm">
      {isOpen && (
        <DoubleCheckModal
          textArr={MODAL_TEXT_SELL}
          tradeData={MODALDATA}
          tradeType="매도"
          closeModal={closeModal}
        />
      )}
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
        onClickHandler={openModal}
      />
    </div>
  );
};

export default SellCalculation;
