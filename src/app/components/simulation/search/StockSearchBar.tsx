import { dotIcon, searchStock } from '@/app/constants/iconPath';
import { SEARCH_STOCK } from '@/app/constants/simulation';
import { callGet } from '@/app/utils/callApi';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Icons from '../../common/Icons';
import Input from '../../common/Input';

interface StockSearchBarProps {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  getStockInfo: (code: string) => Promise<void>;
}
const StockSearchBar = ({
  searchText,
  setSearchText,
  getStockInfo,
}: StockSearchBarProps) => {
  const [autoComplete, setAutoComplete] = useState<AutoCompleteTypes[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const searchAutoComplete = async () => {
    const response = await callGet(`/api/stocks/search?keyword=${searchText}`);
    if (response.isSuccess) {
      setAutoComplete(response.result);
      setSelectedIndex(-1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      setSelectedIndex((prev) =>
        prev < autoComplete.length - 1 ? prev + 1 : prev,
      );
    } else if (e.key === 'ArrowUp') {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === 'Enter') {
      if (selectedIndex !== -1) {
        const selectedStock = autoComplete[selectedIndex];
        setSearchText(selectedStock.stockcode);
      }
      getStockInfo(searchText);
      setAutoComplete([]);
    }
  };

  useEffect(() => {
    searchAutoComplete();
  }, [searchText]);

  return (
    <div className="flex relative">
      <Input
        type="simulation"
        placeholder={SEARCH_STOCK}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        textValue={searchText}
        onKeyDown={handleKeyDown}
        onEnterPress={() => getStockInfo}
      />
      <Icons
        name={searchStock}
        className="absolute right-5 top-2 cursor-pointer"
        onClick={() => getStockInfo}
      />
      {autoComplete.length !== 0 && (
        <div className="absolute top-10 bg-white flex-col-center w-full px-2.5 py-3 rounded-lg border-x border-b border-gray-4 z-20">
          {autoComplete.map((stockInfo, i) => (
            <div
              className={`flex w-full p-2.5 justify-between cursor-pointer ${selectedIndex === i ? 'bg-gray-200' : ''}`}
              key={stockInfo.stockcode}
              onMouseEnter={() => setSelectedIndex(i)}
              onClick={() => {
                setSearchText(stockInfo.stockName);
                setAutoComplete([]);
                getStockInfo(searchText);
              }}
            >
              <p className="text-xs">{stockInfo.stockName}</p>
              <div className="flex items-center text-[10px] text-gray-1">
                <p>{stockInfo.stockcode}</p>
                <Icons name={dotIcon} />
                <p>{stockInfo.market}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StockSearchBar;
