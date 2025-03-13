import { formatNumberCommas } from '@/app/utils/formatNum';

interface FluctuationRankProps {
  rankData: FluctuationRankTypes[];
}

const FluctuationRank = ({ rankData }: FluctuationRankProps) => {
  const isPlus = (price: string) => {
    return Number(price) > 0 ? '+' : '';
  };
  return (
    <div className="flex flex-col w-[48%] gap-y-4">
      {rankData.map((data) => (
        <div
          className="flex w-full justify-between text-black-1 bg-gray-6 py-5 px-6 rounded-lg"
          key={data.dataRank}
        >
          <div className="flex gap-x-3 mr-6">
            <p className="text-3xl font-semibold w-6 text-center text-black-0">
              {data.dataRank}
            </p>
          </div>
          <div className="flex flex-col w-full gap-y-1">
            <div className="flex w-full justify-between">
              <p className="text-base font-normal">{data.stockName}</p>
              <p className="text-base font-medium">
                {formatNumberCommas(data.curPrice)}원
              </p>
            </div>
            <div className="flex w-full justify-between">
              <p className="text-[13px] font-medium">
                등락률 : {data.priceChangeRate}%
              </p>
              <p
                className={`text-xs ${Number(data.priceChange) > 0 ? 'text-red-1' : 'text-blue-1'} `}
              >
                {isPlus(data.priceChange) +
                  formatNumberCommas(data.priceChange)}{' '}
                ({data.priceChangeRate}%)
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FluctuationRank;
