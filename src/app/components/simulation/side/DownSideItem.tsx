interface DownSideItemProps {
  title: string;
  value: string;
  difference: number;
  differenceRate: string;
}

const DownSideItem = ({
  title,
  value,
  difference,
  differenceRate,
}: DownSideItemProps) => {
  const textColor = difference < 0 ? 'text-blue-1' : 'text-red-1';
  return (
    <div className="px-4 items-center gap-1.5 flex text-sm mt-[10px]">
      <p>{title}</p>
      <div className="items-center gap-1 flex">
        <p>{value}</p>
        <div className={`flex ${textColor} text-xs gap-1`}>
          <p>{difference}</p>
          <p>{differenceRate}</p>
        </div>
      </div>
    </div>
  );
};

export default DownSideItem;
