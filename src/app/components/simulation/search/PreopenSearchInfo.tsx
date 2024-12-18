import { likeSmall, noneStockSearch } from '@/app/constants/iconPath';
import { STOCK_SEARCH_EMPTY_TEXT } from '@/app/constants/prediction';
import {
  useAddInterestStock,
  useDeleteInterestStock,
} from '@/app/hooks/useInterestStock';
import { valueColor } from '@/app/utils/qualify';
import Image from 'next/image';
import Icons from '../../common/Icons';

interface PreopenSearchInfoProps {
  stockInfo: StockInfoTypes | null;
  stockCode: string | null;
  getStockInfo: (code: string) => Promise<void>;
}

const PreopenSearchInfo = ({
  stockInfo,
  stockCode,
  getStockInfo,
}: PreopenSearchInfoProps) => {
  const { mutate: addInterestStock } = useAddInterestStock();
  const { mutate: removeInterestStock } = useDeleteInterestStock();

  const handleInterestClick = () => {
    if (stockInfo?.isInterested) {
      removeInterestStock(stockInfo.isInterested);
    } else {
      addInterestStock(stockInfo?.stockcode || '');
    }
    getStockInfo(stockInfo?.stockcode || '');
  };

  return stockInfo && stockCode !== 'null' ? (
    <div className="flex px-[15.5px] py-3 justify-between w-[360px]">
      <div className="flex gap-x-2.5 h-11">
        <div className="w-10 h-10 relative rounded-[18px]">
          {stockInfo.symbolImageUrl === null ? (
            <Icons name={noneStockSearch} />
          ) : (
            <Image
              src={stockInfo.symbolImageUrl || '/images/stocks/none.png'}
              alt="stockImg"
              fill
              className="rounded-[18px]"
            />
          )}
        </div>
        <div className="flex flex-col">
          <div className="flex gap-x-1 items-end">
            <p className="text-sm font-bold">{stockInfo.stockName}</p>
            <p className="text-xs font-normal">{stockInfo.stockcode}</p>
          </div>
          <div
            className={`flex gap-x-1 ${valueColor(stockInfo.changeRate)} text-xs items-end`}
          >
            <p className="text-base font-medium">{stockInfo.closePrice}원</p>
            <div className="flex pb-0.5 gap-0.5">
              <p>
                {Math.floor(stockInfo.changeRate * stockInfo.closePrice * 0.01)}
              </p>
              <p>({stockInfo.changeRate.toFixed(2)}%)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col flex h- text-[11px] text-black justify-between">
        <div className="flex gap-x-2 items-center">
          <div className="h-5 px-2 py-2 rounded flex-center bg-gray-3 dark:bg-gray-1 dark:text-gray-3 text-black-1">
            코스피
          </div>
          <Icons
            name={{
              ...likeSmall,
              fill: stockInfo.isInterested ? '#F95700' : likeSmall.fill,
            }}
            className="cursor-pointer"
            onClick={handleInterestClick}
          />
        </div>
        <p>{stockInfo.date.slice(5)} 장 종료</p>
      </div>
    </div>
  ) : (
    <div className="flex px-8 py-[14px] justify-between rounded-xl w-[360px] items-center border-dashed border border-gray-2">
      <Icons name={noneStockSearch} />
      <div className="flex flex-col gap-y-0.5 items-end">
        <p className="text-sm font-medium">{STOCK_SEARCH_EMPTY_TEXT[0]}</p>
        <p className="text-xs font-bold">{STOCK_SEARCH_EMPTY_TEXT[1]}</p>
      </div>
    </div>
  );
};

export default PreopenSearchInfo;
