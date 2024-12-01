import {
  FINANCIALINTO_TITLE,
  STOCK_INFO_TEXT,
} from '@/app/constants/simulation';
import useStockStore from '@/app/store/store';
import { callPost } from '@/app/utils/callApi';
import { useEffect, useState } from 'react';
import FinancialViewDropdown from './FinancialViewDropdown';
import IncomeChart from './IncomeChart';

const FinancialInfo = () => {
  const [financialInfo, setFinancialInfo] = useState<null | FinancialDataTypes>(
    null,
  );
  console.log(financialInfo);

  const [hoverRefs, setHoverRefs] = useState<(HTMLDivElement | null)[]>([]);
  const [infoType, setInfoType] = useState('손익계산');
  const [option, setOption] = useState('분기');
  const { stockCode } = useStockStore();

  const classCode = option === '분기' ? '1' : '0';

  const getStockFinancial = async () => {
    const response = await callPost(
      `api/stocks/info/financial?code=${stockCode}&classCode=${classCode}`,
    );
    setFinancialInfo(response.result);
  };

  useEffect(() => {
    setHoverRefs((prev) => STOCK_INFO_TEXT.map(() => null));
    getStockFinancial();
  }, [stockCode]);

  return (
    <div className="flex flex-col w-full gap-y-2">
      <div className="flex w-full justify-between">
        <div className="flex">
          {FINANCIALINTO_TITLE.map((title) => (
            <div
              className={`w-[64px] h-[22px] flex-center text-[13px] cursor-pointer ${title === infoType && 'box-border font-medium border-b-black-0 border-b pb-0'} `}
              onClick={() => setInfoType(title)}
              key={title}
            >
              {title}
            </div>
          ))}
        </div>
        <FinancialViewDropdown option={option} setOption={setOption} />
      </div>
      <IncomeChart financialInfo={financialInfo?.incomeStatementInfo || []} />
    </div>
  );
};

export default FinancialInfo;
