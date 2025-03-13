import { MODAL_TEXT_SELL, TRADE_SELL_TEXT } from '@/app/constants/simulation';
import { useModal } from '@/app/hooks/useModal';
import useStockStore from '@/app/store/store';
import Button from '../../common/Button';
import DoubleCheckModal from './modal/DoubleCheckModal';

interface SellCalculationProps {
  quantity: number;
  assets: number;
  price: number;
  totalPrice: number;
  holdStock: HoldStockTypes | null;
  holdStockId: number;
}

const SellCalculation = ({
  quantity,
  assets,
  price,
  totalPrice,
  holdStock,
  holdStockId,
}: SellCalculationProps) => {
  const { isOpen, openModal, closeModal } = useModal(false);
  const { stockCode, stockName } = useStockStore();
  const isQualified =
    quantity > 0 && holdStock && holdStock.totalHoldings >= quantity;

  const reqBody: TradeSellTypes = {
    holdStockId,
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
          textArr={MODAL_TEXT_SELL}
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
        <p>{totalPrice}</p>
      </div>
      <div className="flex items-center justify-between mb-2">
        <p>{TRADE_SELL_TEXT[8]}</p>
        <p>{assets + totalPrice}</p>
      </div>
      <Button
        buttonText={holdStock ? TRADE_SELL_TEXT[9] : TRADE_SELL_TEXT[10]}
        isDisabled={!isQualified}
        type="trade"
        className={isQualified ? 'bg-blue-1' : 'bg-gray-1 cursor-not-allowed'}
        onClickHandler={openModal}
      />
    </div>
  );
};

export default SellCalculation;
