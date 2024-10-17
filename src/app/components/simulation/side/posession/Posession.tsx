import Icons from '@/app/components/common/Icons';
import { interestLike } from '@/app/constants/iconPath';
import { SIDE_NAV_TYPES } from '@/app/constants/simulation';
import { STOCK_DATA } from '@/app/data/simulation';
import Image from 'next/image';

const Posession = () => {
  const textColor = (value: number) =>
    value < 0 ? 'text-blue-1' : 'text-red-1';
  return (
    <div className="w-[260px] h-[620px] flex-col flex px-4 py-3.5 border border-gray-4 rounded-[10px] gap-y-3">
      <p className="text-base">{SIDE_NAV_TYPES[0]}</p>
      {STOCK_DATA.map((stock, i) => (
        <div className="py-1.5 w-full flex justify-between">
          <div className="flex items-center gap-x-2">
            <Image
              src={stock.image_path}
              alt={stock.name}
              width={32}
              height={32}
              className="rounded-[25px]"
            />
            <div className="flex-col gap-y-1">
              <div className="flex items-center">
                <p className="text-xs font-medium">{stock.name}</p>
                <p className="text-[10px] font-normal">({stock.quantity}주)</p>
              </div>
              <p className="text-[10px] font-normal">
                내 평균 {stock.avg_purchase_price}원
              </p>
            </div>
          </div>
          <div className="flex-col">
            <div className="flex text-xs items-center font-medium gap-x-0.5">
              <p>{stock.price}원</p>
              <Icons name={interestLike} className="cursor-pointer" />
            </div>
            <div
              className={`flex w-full justify-end text-[10px] gap-x-0.5 ${textColor(stock.change_amount)}`}
            >
              <p>{stock.change_amount}</p>
              <p>({stock.change_percent}%)</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posession;
