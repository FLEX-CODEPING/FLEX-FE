import Icons from '@/app/components/common/Icons';
import { interestLike } from '@/app/constants/iconPath';
import { POSESSION_EMPTY, SIDE_NAV_TYPES } from '@/app/constants/simulation';
import { callGet, callPost } from '@/app/utils/callApi';
import { useEffect, useState } from 'react';
import EmptyGuide from '../EmptyGuide';

const Posession = () => {
  const [holdStocks, setHoldStocks] = useState<HoldStockTypes[]>([]);
  const [stockPrices, setStockPrices] = useState<
    { stockCode: string; price: string }[]
  >([]);

  const getHoldStocks = async () => {
    const response = await callGet(
      `/api/stocks/hold?holdStatus=HOLDING&page=1&size=20&property=createdAt&direction=desc`,
    );

    const stocks = response.result.content;
    setHoldStocks(stocks);

    const prices = await Promise.all(
      stocks.map(async (item: HoldStockTypes) => {
        const data = await callPost(
          `/api/stocks/price/inquire?stock_code=${item.stockCode}`,
        );
        return { stockCode: item.stockCode, price: data.result[0].stck_prpr };
      }),
    );

    setStockPrices(prices);
  };
  console.log(stockPrices, '보유주');

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
