import Icons from '@/app/components/common/Icons';
import { interestLike } from '@/app/constants/iconPath';
import { INTEREST_EMPTY, SIDE_NAV_TYPES } from '@/app/constants/simulation';
import { callDelete, callGet } from '@/app/utils/callApi';
import { valueColor } from '@/app/utils/qualify';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import EmptyGuide from '../EmptyGuide';

const Interest = () => {
  const [stocks, setStocks] = useState<InterestedStockTypes[]>([]);

  const getStockInfo = async () => {
    const response = await callGet(`api/stocks/interest`);
    setStocks(response.result.content);
  };

  const deleteInterest = async (id: string) => {
    const response = await callDelete(`api/stocks/interest?id=${id}`);
    getStockInfo();
  };

  useEffect(() => {
    getStockInfo();
  }, []);

  return (
    <div className="w-[260px] h-[620px] flex-col flex px-4 py-3.5 border border-gray-4 rounded-[10px]">
      <p className="text-base">{SIDE_NAV_TYPES[0]}</p>
      <div className="flex-col-center overflow-y-auto hide-scrollbar gap-y-3 pt-2">
        {stocks.length === 0 ? (
          <EmptyGuide phraseArr={INTEREST_EMPTY} />
        ) : (
          stocks.map((stock) => (
            <div className="py-1.5 w-full flex justify-between" key={stock.id}>
              <div className="flex items-center gap-x-2">
                <Image
                  src={stock.symbolImageUrl || '/images/stocks/none.png'}
                  alt={stock.id}
                  width={32}
                  height={32}
                  className="rounded-[25px]"
                />
                <p className="text-xs font-medium">{stock.corpName}</p>
              </div>
              <div className="flex-col">
                <div className="flex text-xs items-center font-medium gap-x-0.5">
                  <p>{stock.id}원</p>
                  <Icons
                    name={interestLike}
                    className="cursor-pointer"
                    onClick={() => deleteInterest(stock.id)}
                  />
                </div>
                <div
                  className={`flex w-full justify-end text-[10px] gap-x-0.5 ${valueColor(30)}`}
                >
                  <p>{stock.id}</p>
                  <p>({stock.id}%)</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Interest;
