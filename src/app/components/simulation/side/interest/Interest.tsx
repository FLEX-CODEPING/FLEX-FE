import Icons from '@/app/components/common/Icons';
import { interestLike } from '@/app/constants/iconPath';
import { INTEREST_EMPTY, SIDE_NAV_TYPES } from '@/app/constants/simulation';
import { callDelete, callGet, callPost } from '@/app/utils/callApi';
import { isProfit } from '@/app/utils/formatNum';
import { vrssSignColor } from '@/app/utils/qualify';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import EmptyGuide from '../EmptyGuide';

const Interest = () => {
  const [stocks, setStocks] = useState<InterestedStockTypes[]>([]);
  const [stockPrices, setStockPrices] = useState<InterestedPriceTypes[]>([]);
  const getStockInfo = async () => {
    const response = await callGet(`api/stocks/interest`);
    const interestDatas = response.result.content;
    setStocks(interestDatas);
    const prices = await Promise.all(
      interestDatas.map(async (item: InterestedStockTypes) => {
        const data = await callPost(
          `/api/stocks/price/inquire?stockcode=${item.stockcode}`,
        );
        const priceData = data.result[0];
        return {
          stockCode: item.stockcode,
          currentPrice: priceData.stck_prpr,
          changeAmount: priceData.prdy_vrss,
          changePercent: priceData.prdy_ctrt,
          changeSign: priceData.prdy_vrss_sign,
        };
      }),
    );
    setStockPrices(prices);
  };

  const deleteInterest = async (id: string) => {
    const response = await callDelete(`api/stocks/interest?id=${id}`);
    getStockInfo();
  };

  useEffect(() => {
    getStockInfo();
  }, []);

  return (
    <div className="w-[260px] h-[628px] flex-col flex px-4 py-3.5 border border-gray-4 rounded-[10px]">
      <p className="text-base">{SIDE_NAV_TYPES[0]}</p>
      <div className="flex-col-center overflow-y-auto hide-scrollbar gap-y-3 pt-2">
        {stocks.length === 0 ? (
          <EmptyGuide phraseArr={INTEREST_EMPTY} />
        ) : (
          stockPrices.length !== 0 &&
          stocks.map((stock, i) => (
            <div
              className="py-1.5 w-full flex justify-between"
              key={stock.interestStockId}
            >
              <div className="flex items-center gap-x-2">
                <Image
                  src={stock.symbolImageUrl || '/images/stocks/none.png'}
                  alt="stockImg"
                  width={32}
                  height={32}
                  className="rounded-[25px]"
                />
                <p className="text-xs font-medium">{stock.stockName}</p>
              </div>
              <div className="flex-col">
                <div className="flex text-xs items-center font-medium gap-x-0.5">
                  <p>{stockPrices[i].currentPrice}원</p>
                  <Icons
                    name={interestLike}
                    className="cursor-pointer"
                    onClick={() => deleteInterest(stock.interestStockId)}
                  />
                </div>
                <div
                  className={`flex w-full justify-end text-[10px] gap-x-0.5 ${vrssSignColor(stockPrices[i].changeSign)}`}
                >
                  <p>{isProfit(stockPrices[i].changeAmount)}</p>
                  <p>({stockPrices[i].changePercent}%)</p>
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
