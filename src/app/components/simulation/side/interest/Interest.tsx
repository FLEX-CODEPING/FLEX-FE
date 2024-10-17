import Icons from '@/app/components/common/Icons';
import { interestLike } from '@/app/constants/iconPath';
import { SIDE_NAV_TYPES } from '@/app/constants/simulation';
import { STOCK_DATA } from '@/app/data/simulation';
import Image from 'next/image';

const Interest = () => {
  const textColor = (value: number) =>
    value < 0 ? 'text-blue-1' : 'text-red-1';
  return (
    <div className="w-[254px] h-[620px] flex-col flex px-5 py-3.5 border border-gray-4 rounded-[10px] gap-y-3">
      <p className="text-base">{SIDE_NAV_TYPES[0]}</p>
      {STOCK_DATA.map((stock, i) => (
        <div className="pr-3 py-1.5 w-full flex justify-between">
          <div className="flex items-center gap-x-1">
            <Image
              src={stock.image_path}
              alt={stock.name}
              width={32}
              height={32}
              className="rounded-[25px]"
            />
            <p className="text-xs font-bold ">{stock.name}</p>
          </div>
          <div className="flex-col">
            <div className="flex text-sm items-center font-medium">
              <p>{stock.price}</p>
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

export default Interest;
