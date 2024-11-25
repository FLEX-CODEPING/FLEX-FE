import { likeSmall, noneStockSearch } from '@/app/constants/iconPath';
import { STOCK_SEARCH_EMPTY_TEXT } from '@/app/constants/prediction';
import { callDelete, callPost } from '@/app/utils/callApi';
import Image from 'next/image';
import Icons from '../../common/Icons';

interface SearchInfoProps {
  stockInfo: StockInfoTypes | null;
  stockCode: string | null;
  getStockInfo: (code: string) => Promise<void>;
}

const SearchInfo = ({
  stockInfo,
  stockCode,
  getStockInfo,
}: SearchInfoProps) => {
  const interestStock = async () => {
    await callPost(`api/stocks/interest?code=${stockInfo?.stockcode}`);
    getStockInfo(stockInfo?.stockcode || '');
  };
  console.log(stockInfo?.symbolImageUrl);

  const deleteInterest = async () => {
    await callDelete(`api/stocks/interest?id=${stockInfo?.isInterested}`);
    getStockInfo(stockInfo?.stockcode || '');
  };

  return stockInfo && stockCode !== 'null' ? (
    <div className="flex px-[15.5px] py-3 justify-between w-[360px] items-end">
      <div className="flex gap-x-2.5">
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
        </div>
      </div>
      <Icons
        name={{
          ...likeSmall,
          fill: stockInfo.isInterested ? '#F95700' : likeSmall.fill,
        }}
        className="cursor-pointer"
        onClick={stockInfo.isInterested ? deleteInterest : interestStock}
      />
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

export default SearchInfo;
