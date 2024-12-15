import {
  FINANCIALINFO_TITLE,
  STOCK_INFO_TEXT,
} from '@/app/constants/simulation';
import useStockStore from '@/app/store/store';
import { callPost } from '@/app/utils/callApi';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import BalanceChart from './BalanceChart';
import FinancialViewDropdown from './FinancialViewDropdown';
import IncomeChart from './IncomeChart';

const FinancialInfo = () => {
  const [financialInfo, setFinancialInfo] = useState<null | FinancialDataTypes>(
    null,
  );
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
  }, [stockCode, option]);

  return (
    <div className="flex flex-col w-full gap-y-2">
      <div className="flex w-full justify-between">
        <div className="flex">
          {FINANCIALINFO_TITLE.map((title) => (
            <div
              className={`w-[64px] relative pb-1 h-[22px] flex-center text-[13px] cursor-pointer`}
              onClick={() => setInfoType(title)}
              key={title}
            >
              {title}
              {title === infoType && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-black-1"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
              )}
            </div>
          ))}
        </div>
        <FinancialViewDropdown option={option} setOption={setOption} />
      </div>
      {infoType === '손익계산' ? (
        <IncomeChart financialInfo={financialInfo?.incomeStatementInfo || []} />
      ) : (
        <BalanceChart balanceInfo={financialInfo?.balanceSheetInfo || []} />
      )}
    </div>
  );
};

export default FinancialInfo;
