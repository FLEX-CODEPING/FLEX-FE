import {
  STOCK_INFO_TEXT,
  STOCK_INFO_TOOLTIP,
} from '@/app/constants/simulation';

interface StockGuideModalProps {
  index: number;
}

const StockGuideModal = ({ index }: StockGuideModalProps) => {
  return (
    <div className="absolute z-10 bottom-5 bg-black-1/90 text-white flex flex-col min-w-[285px] gap-y-0.5 h-auto rounded-lg px-2 py-2">
      <div className="text-xs underline flex">{STOCK_INFO_TEXT[index]}</div>
      <div className="text-[11px] font-light flex">
        {STOCK_INFO_TOOLTIP[index]}
      </div>
    </div>
  );
};

export default StockGuideModal;
