import { MODAL_TEXT_BUY, TRADE_BUY_TEXT } from '@/app/constants/simulation';
import { useModal } from '@/app/hooks/useModal';
import useStockStore from '@/app/store/store';
import Button from '../../common/Button';
import DoubleCheckModal from './modal/DoubleCheckModal';

interface BuyCalculationProps {
  quantity: number;
  assets: number;
  price: number;
  totalPrice: number;
}

const BuyCalculation = ({
  quantity,
  assets,
  price,
  totalPrice,
}: BuyCalculationProps) => {
  const { isOpen, openModal, closeModal } = useModal(false);
  const { stockCode, stockName } = useStockStore();

  const isLacked = assets - quantity < 0;
  const isQualified = !isLacked && quantity > 0;

  const reqBody: TradeBuyTypes = {
    quantity,
    price,
    totalPrice,
    stockCode,
    corpName: stockName,
  };

  return (
    <div className="flex w-full flex-col gap-y-3 text-sm">
      {isOpen && (
        <DoubleCheckModal
          data={reqBody}
          textArr={MODAL_TEXT_BUY}
          tradeType="매수"
          closeModal={closeModal}
        />
      )}
      <div className="w-full border border-gray-3  dark:border-black-1" />
      <div className="flex items-center justify-between">
        <p>{TRADE_BUY_TEXT[6]}</p>
        <p>{assets}</p>
      </div>
      <div className="flex items-center justify-between">
        <p>{TRADE_BUY_TEXT[7]}</p>
        <p>{totalPrice}</p>
      </div>
      <div className="flex items-center justify-between mb-2">
        <p>{TRADE_BUY_TEXT[8]}</p>
        <p className={`${isLacked && 'text-red-1'}`}>{assets - totalPrice}</p>
      </div>
      <Button
        buttonText={TRADE_BUY_TEXT[9]}
        isDisabled={!isQualified}
        type="trade"
        className={isQualified ? 'bg-red-1' : 'cursor-not-allowed bg-gray-1 dark:bg-black-1'}
        onClickHandler={openModal}
      />
    </div>
  );
};

export default BuyCalculation;
