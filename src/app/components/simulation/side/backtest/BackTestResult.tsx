import { BACKTEST_TEXT } from '@/app/constants/simulation';
import useStockStore from '@/app/store/store';
import { howManyDays } from '@/app/utils/date';
import {
  formatCurrencyNoUnit,
  formatNumberCommas,
} from '@/app/utils/formatNum';
import { backTestPurchaseCnt } from '@/app/utils/formatStock';

interface BackTestResultProps {
  testResult: BackTestTypes;
  orderType: BackTestOrderTypes;
}
const BackTestResult = ({ testResult, orderType }: BackTestResultProps) => {
  const isProfit = testResult.profit > 0 ? 'text-red-1' : 'text-blue-1';
  const { stockCode, stockName } = useStockStore();
  const totalBuyCnt = backTestPurchaseCnt(
    testResult.startDate,
    testResult.endDate,
    orderType,
  );
  const totalBuyStocks =
    totalBuyCnt * howManyDays(testResult.startDate, testResult.endDate);
  return (
    <div className="flex-col-center flex w-full text-sm">
      <div className="flex w-full justify-between mb-2">
        <p>{BACKTEST_TEXT[4]}</p>
        <p className="text-[10px] text-gray-1">
          {testResult.startDate} ~ {testResult.endDate}
        </p>
      </div>
      <div className="flex w-full pb-3 pt-1">
        <div className="flex gap-x-1 items-end bg-gray-3 py-1 px-2 rounded-md">
          <p className="text-[13px] font-medium text-black-0"># {stockName}</p>
          <p className="text-[11px] text-black-0 pt-0.5">{stockCode}</p>
        </div>
      </div>
      <div className="flex w-full justify-between  text-[11px]">
        <div className="flex flex-col gap-y-1.5">
          <div className=" bg-gray-5 py-1 w-[60px] flex-center rounded-lg">
            {BACKTEST_TEXT[5]}
          </div>
          <p className="w-[60px] flex-center text-[13px] text-black-1">
            {totalBuyStocks}주
          </p>
        </div>
        <div className="flex flex-col gap-y-1.5">
          <div className=" bg-gray-5 py-1 w-20 flex-center rounded-lg">
            {BACKTEST_TEXT[6]}
          </div>
          <p className="w-20 flex-center text-[13px] text-black-1">
            {formatCurrencyNoUnit(testResult.totalPrice)}원
          </p>
        </div>
        <div className="flex flex-col gap-y-1.5">
          <div className=" bg-gray-5 py-1 w-16 flex-center rounded-lg">
            {BACKTEST_TEXT[7]}
          </div>
          <p className="w-16 flex-center text-[13px] text-black-1">
            {howManyDays(testResult.startDate, testResult.endDate)}일
          </p>
        </div>
      </div>
      <div className="px-3 flex w-full justify-between border-b border-b-gray-2 mt-4 pb-1">
        <div>
          <p className="text-[11px] text-gray-7">{BACKTEST_TEXT[8]}</p>
          <p className="text-sm">{formatNumberCommas(testResult.totalPrice)}</p>
        </div>
        <div>
          <p className="text-[11px] text-gray-7">{BACKTEST_TEXT[9]}</p>
          <p className={`text-sm ${isProfit}`}>
            {formatNumberCommas(testResult.totalProfit)}
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-y-2 px-3 py-3">
        <div className="w-full flex justify-between">
          <p className="text-[11px]">{BACKTEST_TEXT[10]}</p>
          <p className={`${isProfit}`}>
            {formatNumberCommas(testResult.totalProfit - testResult.totalPrice)}
            원
          </p>
        </div>
        <div className="w-full flex justify-between">
          <p className="text-[11px]">{BACKTEST_TEXT[11]}</p>
          <p className={`${isProfit}`}>
            {((testResult.profit / testResult.totalPrice) * 100).toFixed(2)}%
          </p>
        </div>
        <div className="w-full flex justify-between">
          <p className="text-[11px]">{BACKTEST_TEXT[12]}</p>
          <p>
            {backTestPurchaseCnt(
              testResult.startDate,
              testResult.endDate,
              orderType,
            )}
          </p>
        </div>
      </div>
      {/* <Button
        buttonText={'다시하기'}
        type={'backTest'}
        className="bg-gray-7"
        onClickHandler={function (): void {
          throw new Error('Function not implemented.');
        }}
      /> */}
    </div>
  );
};

export default BackTestResult;
