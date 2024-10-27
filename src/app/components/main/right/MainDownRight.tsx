import { MAIN_CONTENTS_TITLE } from '@/app/constants/main';
import { STOCK_DATA } from '@/app/data/simulation';
import Image from 'next/image';

const MainDownRight = () => {
  const filteredStocks = STOCK_DATA.slice(0, 6);
  return (
    <div className="w-[580px] flex-col-center px-6 py-4">
      <div className="flex w-full justify-between items-end">
        <p className="text-xl font-bold">{MAIN_CONTENTS_TITLE[3]}</p>
        <p className="text-xs">2024.10.04</p>
      </div>
      <div className="w-full py-6 flex-col-center gap-y-6">
        {filteredStocks.map((stock, i) => (
          <div className="flex w-full items-center justify-between py-5 px-6 rounded-lg shadow-md cursor-pointer">
            <div className="flex gap-x-4 mr-6">
              <p className="text-3xl font-semibold">{i + 1}</p>
              <Image
                src={stock.image_path}
                alt={stock.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col w-full gap-y-2">
              <div className="flex w-full justify-between">
                <p className="text-base font-normal">{stock.name}</p>
                <p className="text-sm font-medium">{stock.price}원</p>
              </div>
              <div className="flex w-full justify-between">
                <p className="text-gray-1 text-xs font-semibold">
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

export default MainDownRight;
