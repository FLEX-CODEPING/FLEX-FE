import AnalyzeBar from './AnalyzeBar';
import TradeBar from './TradeBar';

const TradeContainer = () => {
  return (
    <div className="w-[300px] flex flex-col">
      <TradeBar />
      <AnalyzeBar />
    </div>
  );
};

export default TradeContainer;
