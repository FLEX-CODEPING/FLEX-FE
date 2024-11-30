import { StockChart } from './StockChart';
import StockInfoChart from './stockInfo/StockInfoContainer';

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
      default:
        return null;
    }
  };

  return activeComponenet();
};

export default ActiveChart;
