import { formatNumberCommas } from '@/app/utils/formatNum';

interface FluctuationRankProps {
  rankData: FluctuationRankTypes;
}

const FluctuationRank = ({ rankData }: FluctuationRankProps) => {
  const isPlus = () => {
    return Number(rankData.priceChange) > 0 ? '+' : '';
  };
  return (
    <div
      className="flex w-full items-center justify-between bg-gray-5 py-5 px-6 rounded-lg sahdow hover:shadow-xl cursor-pointer transition-shadow duration-500"
      key={rankData.dataRank}
    >
      <div className="flex gap-x-3 mr-6">
        <p className="text-3xl font-semibold w-6 text-center">
          {rankData.dataRank}
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
          <p className="text-base font-normal">{rankData.stockName}</p>
          <p className="text-base font-medium">
            {formatNumberCommas(rankData.curPrice)}원
          </p>
        </div>
        <div className="flex w-full justify-between">
          <p
            className={`text-[13px] font-medium ${Number(rankData.priceChangeSign) === 2 ? 'text-red-1' : 'text-blue-1'} `}
          >
            등락률 : {rankData.priceChangeRate}% / 변동금액 :{' '}
            {isPlus() + rankData.priceChange}
          </p>
          <p
            className={`text-xs ${Number(rankData.priceChangeSign) === 2 ? 'text-red-1' : 'text-blue-1'} `}
          >
            {isPlus() + rankData.priceChange} ({rankData.priceChangeRate}%)
          </p>
        </div>
      </div>
    </div>
  );
};

export default FluctuationRank;
