interface StockGuideModalProps {
  index: number;
  text: string[];
  tooltip: string[];
  isLong?: boolean;
}

const StockGuideModal = ({
  index,
  text,
  tooltip,
  isLong,
}: StockGuideModalProps) => {
  return (
    <div
      className={`absolute z-20 bottom-5 bg-black-1/90 text-white ${isLong ? 'min-w-[360px]' : 'min-w-80'}  flex flex-col gap-y-0.5 h-auto rounded-lg px-2 py-2`}
    >
      <div className="text-xs underline flex flex-nowrap ">{text[index]}</div>
      <div className="text-[11px] font-light flex">{tooltip[index]}</div>
    </div>
  );
};

export default StockGuideModal;
