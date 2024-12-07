import { goBack } from '@/app/constants/iconPath';
import {
  HOLDSTOCK_RECORD,
  SIDE_NAV_TYPES,
  TRADETYPE_MAP,
} from '@/app/constants/simulation';
import useStockStore from '@/app/store/store';
import { callGet } from '@/app/utils/callApi';
import { formatMD } from '@/app/utils/date';
import { formatNumberCommas } from '@/app/utils/formatNum';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Icons from '../../common/Icons';

interface HoldStockRecordProps {
  closeDetail: Dispatch<SetStateAction<boolean>>;
}

const HoldStockRecord = ({ closeDetail }: HoldStockRecordProps) => {
  const [record, setRecord] = useState<HoldStockRecordTypes[]>([]);
  const [stockInfo, setStockInfo] = useState<HoldStockInfoTypes | null>(null);
  const { stockCode } = useStockStore();

  const getTradeRecord = async () => {
    const response = await callGet(
      `/api/stocks/trade/investment?code=${stockCode}&page=${1}&size=${20}&property=createdAt&direction=desc`,
    );
    setRecord(response.result.content);
    console.log(response, '거래내역 데이터 응답');

    const infoData = await callGet(`/api/stocks/hold/info?code=${stockCode}`);
    setStockInfo(infoData.result);
    console.log(infoData, '보유종목 데이터 응답');
  };

  useEffect(() => {
    getTradeRecord();
  }, [stockCode]);

  return (
    <div className="w-full flex flex-col gap-y-2">
      <div className="flex w-full justify-between mb-4">
        <p className="text-base">{SIDE_NAV_TYPES[1]}</p>
        <div
          className="w-9 h-6 flex-center bg-gray-3 rounded-lg cursor-pointer"
          onClick={() => closeDetail(false)}
        >
          <Icons name={goBack} />
        </div>
      </div>
      <div className="flex items-end border-b border-gray-2 pb-1 text-black-0 gap-x-1.5 px-2">
        <p className="w-[90px] text-[15px]">{stockInfo?.corpName}</p>
        <div className="flex flex-col items-end gap-y-0.5 w-[66px]">
          <p className="text-gray-1 text-[10px]">{HOLDSTOCK_RECORD[0]}</p>
          <p className="text-[13px]">
            {Math.floor(stockInfo?.avgPrice || 0)}원
          </p>
        </div>
        <div className="flex flex-col items-end gap-y-0.5 w-[38px]">
          <p className="text-gray-1 text-[10px]">{HOLDSTOCK_RECORD[1]}</p>
          <p className="text-[13px]">{stockInfo?.totalHoldings}개</p>
        </div>
      </div>
      <div className="flex flex-col w-full overflow-y-auto gap-y-2">
        {record.map((record) => (
          <div
            className="text-xs font-medium flex w-full"
            key={record.investmentId}
          >
            <p className="flex-center font-light w-[24%]">
              {formatMD(record.createdAt)}
            </p>
            <p className="flex-center w-[38%]">
              {TRADETYPE_MAP[record.investType]} {record.quantity}주
            </p>
            <p className="flex-center w-[38%]">
              주당 {formatNumberCommas(record.price)} 원
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoldStockRecord;
