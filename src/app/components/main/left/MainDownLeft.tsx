import MainPostContainer from './MainPostContainer';
import DailyNews from './DailyNews';
import StockRank from './StockRank';

const MainDownLeft = () => {
  return (
    <div className="w-[737px] flex-col-center gap-y-10">
      <MainPostContainer />
      <DailyNews />
      <StockRank />
    </div>
  );
};

export default MainDownLeft;
