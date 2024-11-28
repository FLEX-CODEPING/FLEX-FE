import { formatNumberCommas } from '@/app/utils/truncate';

interface VolumeRankProps {
  rankData: VolumeRankTypes;
}

const VolumeRank = ({ rankData }: VolumeRankProps) => {
  const isPlus = Number(rankData.priceChange) > 0;
  return (
    <div
      className="flex w-full items-center justify-between bg-gray-5 py-5 px-6 rounded-lg sahdow hover:shadow-xl cursor-pointer transition-shadow duration-500"
      key={rankData.ranking}
    >
      <div className="flex gap-x-3 mr-6">
        <p className="text-3xl font-semibold w-6 text-center">
          {rankData.ranking}
        </p>
        <div className="w-9 h-9 relative">
          {/* <Image
              src={stock.image_path}
              alt={stock.name}
              fill
              loading="lazy"
              className="rounded-full"
            /> */}
        </div>
      </div>
      <div className="flex flex-col w-full gap-y-1">
        <div className="flex w-full justify-between">
          <p className="text-base font-normal">{rankData.corpName}</p>
          <p className="text-base font-medium">
            {formatNumberCommas(Number(rankData.curPrice))}원
          </p>
        </div>
        <div className="flex w-full justify-between">
          <p className="text-black-1 text-[13px] font-medium">
            거래량 : {formatNumberCommas(Number(rankData.accTradingVolume))}개
          </p>
          <p className={`text-xs ${isPlus ? 'text-red-1' : 'text-blue-1'}`}>
            {`${isPlus ? '+' : ''}${formatNumberCommas(rankData.priceChange)} (${rankData.prevPeriodPriceChangeRate}%)`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VolumeRank;
