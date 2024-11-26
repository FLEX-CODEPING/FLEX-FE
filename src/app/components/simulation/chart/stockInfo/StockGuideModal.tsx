import {
  STOCK_INFO_TEXT,
  STOCK_INFO_TOOLTIP,
} from '@/app/constants/simulation';

interface StockGuideModalProps {
  index: number;
}

const StockGuideModal = ({ index }: StockGuideModalProps) => {
  return (
    <div className="absolute z-10 bg-black-1/95 text-white flex flex-col gap-y-1.5  w-[320px] h-[72px] rounded-lg p-3 transparent">
      <p className="text-sm underline">{STOCK_INFO_TEXT[index]}</p>
      <p className="text-xs">{STOCK_INFO_TOOLTIP[index]}</p>
    </div>
  );
};

export default StockGuideModal;
