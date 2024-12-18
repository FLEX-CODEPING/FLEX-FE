import { ENTERPRISE_INFO } from '@/app/constants/simulation';
import useStockCodeStore from '@/app/store/store';
import { callGet } from '@/app/utils/callApi';
import { formatEntInfo } from '@/app/utils/formatStock';
import { useEffect, useState } from 'react';

const EnterpriseInfo = () => {
  const [corpInfo, setCorpInfo] = useState<null | CorpInfoTypes>(null);
  const { stockCode, stockName } = useStockCodeStore();

  const infoArr = corpInfo && formatEntInfo(corpInfo);

  const getStockDetail = async () => {
    const response = await callGet(`api/stocks/info/corp?code=${stockCode}`);
    setCorpInfo(response.result);
  };

  useEffect(() => {
    getStockDetail();
  }, [stockCode]);

  return (
    <div className="flex flex-wrap w-full text-xs pl-3">
      {corpInfo ? (
        ENTERPRISE_INFO.map((info, i) => (
          <div className="flex w-[50%]" key={info}>
            <div className="flex items-center w-40 h-9 bg-gray-5 pl-3 border-b border-b-white">
              {info}
            </div>
            <div className="w-full h-9 border-b border-b-gray-2 pl-5 flex items-center">
              {infoArr && infoArr[i]}
            </div>
          </div>
        ))
      ) : (
        <div className="flex-center h-28 w-full bg-gray-5">
          <div className="flex text-base items-center px-4 h-12 pl-3 border-b border-b-white">
            ⚠️ 기업정보가 존재하지 않습니다
          </div>
        </div>
      )}
    </div>
  );
};

export default EnterpriseInfo;
