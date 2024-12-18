import { dotIcon, searchStock } from '@/app/constants/iconPath';
import { SEARCH_STOCK } from '@/app/constants/simulation';
import { callGet } from '@/app/utils/callApi';
import { useEffect, useState } from 'react';
import Icons from '../../common/Icons';
import Input from '../../common/Input';

interface StockSearchBarProps {
  getStockInfo: (code: string) => Promise<void>;
}
const StockSearchBar = ({ getStockInfo }: StockSearchBarProps) => {
  const [autoComplete, setAutoComplete] = useState<AutoCompleteTypes[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [searchText, setSearchText] = useState('');

  const searchAutoComplete = async () => {
    const response = await callGet(`/api/stocks/search?keyword=${searchText}`);
    if (response.isSuccess) {
      setAutoComplete(response.result);
      setSelectedIndex(-1);
    }
  };

  const searchKeyword = (keyword: string) => {
    getStockInfo(keyword);
    setSearchText('');
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
        searchKeyword(selectedStock.stockcode);
      }
      getStockInfo(searchText);
      setSearchText('');
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
        onEnterPress={() => searchKeyword(searchText)}
      />
      <Icons
        name={searchStock}
        className="absolute right-5 top-2 cursor-pointer"
        onClick={() => searchKeyword(searchText)}
      />
      {autoComplete.length !== 0 && (
        <div className="absolute top-10 bg-white dark:bg-black-0 dark:text-gray-4 flex-col-center w-full px-2.5 py-3 rounded-lg border-x border-b border-gray-4 z-20 max-h-[312px] overflow-y-auto">
          {autoComplete.map((stockInfo, i) => (
            <div
              className={`flex w-full p-2.5 justify-between cursor-pointer rounded ${selectedIndex === i ? 'bg-gray-200 dark:bg-black-1 dark:text-gray-4' : ''}`}
              key={stockInfo.stockcode}
              onMouseEnter={() => setSelectedIndex(i)}
              onClick={() => searchKeyword(stockInfo.stockcode)}
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
