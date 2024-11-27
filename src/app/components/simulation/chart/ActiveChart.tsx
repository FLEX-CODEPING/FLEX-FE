import { StockChart } from './StockChart';
import EnterpriseChart from './stockInfo/EnterpriseChart';
import FinancialChart from './stockInfo/FinancialChart';
import StockInfoChart from './stockInfo/StockInfoChart';

interface ActiveChartProps {
  chartType: string;
}

const ActiveChart = ({ chartType }: ActiveChartProps) => {
  const activeComponenet = () => {
    switch (chartType) {
      case '차트':
        return <StockChart />;
      case '종목정보':
        return <StockInfoChart />;
      case '재무제표':
        return <FinancialChart />;
      case '기업정보':
        return <EnterpriseChart />;
      default:
        return null;
    }
  };

  return <div className="pt-[85px] mr-[1.5%]">{activeComponenet()}</div>;
};

export default ActiveChart;
