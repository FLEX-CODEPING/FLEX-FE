import { dotIcon, infoIcon } from '@/app/constants/iconPath';
import { STOCK_INFO_TEXT } from '@/app/constants/simulation';
import useStockCodeStore from '@/app/store/store';
import { callGet } from '@/app/utils/callApi';
import { getTodayDateBar } from '@/app/utils/date';
import { formatStockData } from '@/app/utils/formatStock';
import { formatNumberCommas } from '@/app/utils/truncate';
import { useEffect, useState } from 'react';
import Icons from '../../common/Icons';

const StockInfoChart = () => {
  const [stockInfo, setStockInfo] = useState<null | StockDetailInfoTypes>(null);
  const { stockCode, stockName } = useStockCodeStore();
  const StockInfoArr = stockInfo ? formatStockData(stockInfo) : [];
  const plusUnit = (index: number) => {
    if (index === 5) return '%';
    if (index === 8) return '주';
    return '원';
  };

  const getStockDetail = async () => {
    const date = getTodayDateBar();
    const response = await callGet(
      `api/stocks/info?code=${stockCode}&date=${date}`,
    );
    setStockInfo(response.result);
  };

  useEffect(() => {
    getStockDetail();
  }, [stockCode]);

  return (
    <div className="flex-col flex w-full text-black-0 h-[514px] gap-y-5">
      <div className="flex w-full justify-between items-end">
        <div className="flex gap-x-3 items-end">
          <p className="text-2xl font-semibold">{stockName}</p>
          <div className="flex text-gray-1 text-sm items-center">
            <p>국내</p>
            <Icons name={dotIcon} />
            <p>{stockCode}</p>
            <Icons name={dotIcon} />
            <p>코스피</p>
          </div>
        </div>
        <p className="text-gray-1 text-sm">{stockInfo?.marketCapInfo.date}</p>
      </div>
      <div className="flex flex-wrap w-full justify-between gap-y-6">
        {STOCK_INFO_TEXT.map((info, i) => (
          <div
            className="w-[48%] h-[72px] bg-gray-6 py-2 px-3 rounded-xl shadow hover:shadow-lg hover:duration-700 flex flex-col gap-y-2"
            key={info}
          >
            <div className="flex gap-x-1 items-center">
              <p className="text-sm text-black-1">{info}</p>
              <Icons name={infoIcon} />
            </div>
            <div className="text-xl font-semibold flex gap-x-1">
              <p
                className={`${i === 5 && (Number(info) > 0 ? 'text-red-1' : 'text-blue-1')}`}
              >
                {formatNumberCommas(Number(StockInfoArr[i]))}
              </p>
              <p>{plusUnit(i)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockInfoChart;
