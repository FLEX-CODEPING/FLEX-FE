import { MAIN_CONTENTS_TITLE } from '@/app/constants/main';
import { STOCK_DATA } from '@/app/data/simulation';
import { formatDate, getTodayDate } from '@/app/utils/date';
import Image from 'next/image';

const StockRank = () => {
  const filteredStocks = STOCK_DATA.slice(0, 10);
  const today = getTodayDate();

  return (
    <div className="flex-col-center w-full gap-y-3">
      <div className="w-full flex items-end justify-between px-3 py-2">
        <p className="text-2xl font-semibold">{MAIN_CONTENTS_TITLE[2]}</p>
        <p className="text-xs">{today}</p>
      </div>
      <div className="flex-center gap-y-4 w-full flex-wrap flex-col h-[502px] gap-x-[4%]">
        {filteredStocks.map((stock, i) => (
          <div className="flex w-[48%] items-center justify-between bg-gray-5 py-5 px-6 rounded-lg sahdow hover:shadow-xl cursor-pointer transition-shadow duration-500">
            <div className="flex gap-x-3 mr-6">
              <p className="text-3xl font-semibold w-6 text-center">{i + 1}</p>
              <div className="w-9 h-9 relative">
                <Image
                  src={stock.image_path}
                  alt={stock.name}
                  fill
                  loading="lazy"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-y-1">
              <div className="flex w-full justify-between">
                <p className="text-base font-normal">{stock.name}</p>
                <p className="text-base font-medium">{stock.price}원</p>
              </div>
              <div className="flex w-full justify-between">
                <p className="text-black-1 text-[13px] font-medium">
                  거래량 : {stock.quantity}개
                </p>
                <p
                  className={`text-xs ${stock.change_amount > 0 ? 'text-red-1' : 'text-blue-1'} `}
                >
                  {stock.change_amount} ({stock.change_percent}%)
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockRank;
