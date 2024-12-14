import { POSESSION_EMPTY, SIDE_NAV_TYPES } from '@/app/constants/simulation';
import useStockStore from '@/app/store/store';
import { callGet, callPost } from '@/app/utils/callApi';
import { formatNumberCommas, isProfit } from '@/app/utils/formatNum';
import { valueColor } from '@/app/utils/qualify';
import { useEffect, useState } from 'react';
import HoldStockRecord from '../../trade/HoldStockRecord';
import EmptyGuide from '../EmptyGuide';

const Posession = () => {
  const [holdStocks, setHoldStocks] = useState<HoldStockTypes[]>([]);
  const [isSelected, setIsSelected] = useState(false);
  const [stockPrices, setStockPrices] = useState<
    { stockCode: string; price: string }[]
  >([]);
  const { setStockCode } = useStockStore();

  const getHoldStocks = async () => {
    const response = await callGet(
      `/api/stocks/hold?holdStatus=HOLDING&page=1&size=20&property=createdAt&direction=desc`,
    );
    const stocks = response.result.content;
    setHoldStocks(stocks);
    const prices = await Promise.all(
      stocks.map(async (item: HoldStockTypes) => {
        const data = await callPost(
          `/api/stocks/price/inquire?stockcode=${item.stockCode}`,
        );
        return { stockCode: item.stockCode, price: data.result[0].stck_prpr };
      }),
    );
    setStockPrices(prices);
  };

  const handleCode = (code: string, name: string) => {
    setStockCode(code, name);
    setIsSelected(true);
  };

  useEffect(() => {
    getHoldStocks();
  }, []);

  return (
    <div className="w-[260px] h-[628px] flex-col flex px-4 py-3.5 border border-gray-4 rounded-[10px]">
      {isSelected ? (
        <HoldStockRecord closeDetail={setIsSelected} />
      ) : (
        <div>
          <p className="text-base">{SIDE_NAV_TYPES[1]}</p>
          <div className="flex-col-center overflow-y-auto hide-scrollbar gap-y-3 pt-2">
            {holdStocks.length === 0 ? (
              <EmptyGuide phraseArr={POSESSION_EMPTY} />
            ) : (
              stockPrices.length !== 0 &&
              holdStocks.map((stock, i) => (
                <div
                  className="py-1.5 w-full flex justify-between cursor-pointer"
                  onClick={() => handleCode(stock.stockCode, stock.corpName)}
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
                        평단가 {formatNumberCommas(stock.avgPrice)}원
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="flex text-sm items-center jutify-end font-medium">
                      {formatNumberCommas(
                        Number(stockPrices[i].price) * stock.totalHoldings,
                      )}
                      원
                    </p>
                    <div
                      className={`flex w-full justify-end text-[10px] gap-x-0.5 ${valueColor(
                        Number(stockPrices[i].price) - stock.avgPrice,
                      )}`}
                    >
                      <p>
                        {isProfit(
                          Math.floor(
                            Number(stockPrices[i].price) - stock.avgPrice,
                          ) * stock.totalHoldings,
                        )}
                      </p>
                      <p>
                        {`(${Math.floor(
                          ((Number(stockPrices[i].price) - stock.avgPrice) /
                            Number(stockPrices[i].price)) *
                            100,
                        )}%)`}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Posession;
