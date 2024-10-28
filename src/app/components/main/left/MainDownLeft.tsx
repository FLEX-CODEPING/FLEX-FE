import DailyNews from './DailyNews';
import DailyPostContainer from './DailyPostContainer';
import StockRank from './StockRank';

const MainDownLeft = () => {
  return (
    <div className="w-[737px] flex-col-center gap-y-10">
      <DailyPostContainer />
      <DailyNews />
      <StockRank />
    </div>
  );
};

export default MainDownLeft;
