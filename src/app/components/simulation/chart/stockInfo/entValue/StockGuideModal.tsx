interface StockGuideModalProps {
  index: number;
  text: string[];
  tooltip: string[];
}

const StockGuideModal = ({ index, text, tooltip }: StockGuideModalProps) => {
  return (
    <div className="absolute z-10 bottom-5 bg-black-1/90 text-white flex flex-col min-w-[285px] gap-y-0.5 h-auto rounded-lg px-2 py-2">
      <div className="text-xs underline flex">{text[index]}</div>
      <div className="text-[11px] font-light flex">{tooltip[index]}</div>
    </div>
  );
};

export default StockGuideModal;
