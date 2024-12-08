import DailyNews from './DailyNews';
import DailyPostContainer from './DailyPostContainer';
import StockRank from './rank/StockRank';

const MainDownLeft = () => {
  return (
    <div className="w-[737px] flex-col-center gap-y-[50px]">
      <DailyPostContainer />
      <DailyNews />
      <StockRank />
    </div>
  );
};

export default MainDownLeft;
