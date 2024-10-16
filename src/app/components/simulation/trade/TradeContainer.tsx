import AnalyzeBar from './AnalyzeBar';
import TradeBar from './TradeBar';

const TradeContainer = () => {
  return (
    <div className="w-[300px] flex flex-col pt-[57px] gap-y-2">
      <TradeBar />
      <AnalyzeBar />
    </div>
  );
};

export default TradeContainer;
