interface DownSideItemProps {
  title: string;
  value: string;
  difference: string;
  differenceRate: string;
}

const DownSideItem = ({
  title,
  value,
  difference,
  differenceRate,
}: DownSideItemProps) => {
  return (
    <div className="items-center gap-1.5 flex text-sm">
      <p>{title}</p>
      <div className="items-center gap-1 flex">
        <p>{value}</p>
        <div className="flex text-blue-1 text-xs gap-1">
          <p>{difference}</p>
          <p>{differenceRate}</p>
        </div>
      </div>
    </div>
  );
};

export default DownSideItem;
