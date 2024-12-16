import { formatNumberCommas } from '@/app/utils/formatNum';

interface VolumeRankProps {
  rankData: VolumeRankTypes[];
}

const VolumeRank = ({ rankData }: VolumeRankProps) => {
  const isPlus = (price: string) => {
    return Number(price) > 0 ? '+' : '';
  };
  return (
    <div className="flex flex-col w-[48%] gap-y-4">
      {rankData.map((data) => (
        <div
          className="flex w-full justify-between text-black-1 bg-gray-6 py-5 px-6 rounded-lg"
          key={data.ranking}
        >
          <div className="flex gap-x-3 mr-6">
            <p className="text-3xl font-medium w-6 text-center text-black-0">
              {data.ranking}
            </p>
          </div>
          <div className="flex flex-col w-full gap-y-1">
            <div className="flex w-full justify-between">
              <p className="text-base font-normal">{data.corpName}</p>
              <p className="text-base font-medium">
                {formatNumberCommas(Number(data.curPrice))}원
              </p>
            </div>
            <div className="flex w-full justify-between">
              <p className="text-black-1 text-[13px] font-medium">
                거래량 : {formatNumberCommas(Number(data.accTradingVolume))}개
              </p>
              <p
                className={`text-xs ${Number(data.priceChange) > 0 ? 'text-red-1' : 'text-blue-1'}`}
              >
                {`${isPlus(data.priceChange) ? '+' : ''}${formatNumberCommas(data.priceChange)} (${data.prevPeriodPriceChangeRate}%)`}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VolumeRank;
