import Icons from '@/app/components/common/Icons';
import { interestLike } from '@/app/constants/iconPath';
import { POSESSION_EMPTY, SIDE_NAV_TYPES } from '@/app/constants/simulation';
import { callGet } from '@/app/utils/callApi';
import { useEffect, useState } from 'react';
import EmptyGuide from '../EmptyGuide';

const Posession = () => {
  const [holdStocks, setHoldStocks] = useState<HoldStockTypes[]>([]);

  const getHoldStocks = async () => {
    const response = await callGet('api/stocks/hold');
    setHoldStocks(response.result.content);
  };

  useEffect(() => {
    getHoldStocks();
  }, []);

  return (
    <div className="w-[260px] h-[628px] flex-col flex px-4 py-3.5 border border-gray-4 rounded-[10px]">
      <p className="text-base">{SIDE_NAV_TYPES[1]}</p>
      <div className="flex-col-center overflow-y-auto hide-scrollbar gap-y-3 pt-2">
        {holdStocks.length === 0 ? (
          <EmptyGuide phraseArr={POSESSION_EMPTY} />
        ) : (
          holdStocks.map((stock, i) => (
            <div
              className="py-1.5 w-full flex justify-between"
              key={stock.holdStockId}
            >
              <div className="flex items-center gap-x-2">
                {/* <Image
                  src={stock.image_path}
                  alt={stock.name}
                  width={32}
                  height={32}
                  className="rounded-[25px]"
                /> */}
                <div className="flex-col gap-y-1">
                  <div className="flex items-center">
                    <p className="text-xs font-medium">{stock.corpName}</p>
                    <p className="text-[10px] font-normal">
                      ({stock.totalHoldings}주)
                    </p>
                  </div>
                  <p className="text-[10px] font-normal">
                    평균 매수가 {stock.avgPrice}원
                  </p>
                </div>
              </div>
              <div className="flex-col">
                <div className="flex text-xs items-center font-medium gap-x-0.5">
                  <p>{stock.avgPrice}원</p>
                  <Icons name={interestLike} className="cursor-pointer" />
                </div>
                <div className="flex w-full justify-end text-[10px] gap-x-0.5">
                  <p>{stock.principal}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Posession;
