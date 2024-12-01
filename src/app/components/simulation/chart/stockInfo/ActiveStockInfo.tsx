import EnterpriseInfo from './EnterpriseInfo';
import FinancialInfo from './financial/FinancialInfo';
import StockInfo from './StockInfo';

interface ActiveStockInfoProps {
  chartType: string;
}

const ActiveStockInfo = ({ chartType }: ActiveStockInfoProps) => {
  const activeComponenet = () => {
    switch (chartType) {
      case '종목정보':
        return <StockInfo />;
      case '재무제표':
        return <FinancialInfo />;
      case '기업정보':
        return <EnterpriseInfo />;
      default:
        return null;
    }
  };

  return activeComponenet();
};

export default ActiveStockInfo;
