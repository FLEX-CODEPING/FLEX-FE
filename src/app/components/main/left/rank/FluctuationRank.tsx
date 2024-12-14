interface FluctuationRankProps {
  rankData: FluctuationRankTypes;
}

const FluctuationRank = ({ rankData }: FluctuationRankProps) => {
  return (
    <div
      className="flex w-[48%] items-center justify-between bg-gray-5 py-5 px-6 rounded-lg sahdow hover:shadow-xl cursor-pointer transition-shadow duration-500"
      key={rankData.rank}
    >
      <div className="flex gap-x-3 mr-6">
        <p className="text-3xl font-semibold w-6 text-center">
          {rankData.rank}
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
            {rankData.currentPriceToClosingRate}원
          </p>
        </div>
        <div className="flex w-full justify-between">
          <p className="text-black-1 text-[13px] font-medium">
            거래량 : {rankData.cumulativeVolume}개
          </p>
          <p
            className={`text-xs ${Number(rankData.priceChangeFromOpen) > 0 ? 'text-red-1' : 'text-blue-1'} `}
          >
            {rankData.priceChangeFromOpenRate} (
            {rankData.priceChangeFromOpenRate}%)
          </p>
        </div>
      </div>
    </div>
  );
};

export default FluctuationRank;
