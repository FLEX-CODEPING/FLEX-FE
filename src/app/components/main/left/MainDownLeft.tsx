import MainPostContainer from '../MainPostContainer';
import DailyNews from './DailyNews';
import Ranking from './Ranking';

const MainDownLeft = () => {
  return (
    <div className="w-[737px] flex-col-center">
      <MainPostContainer />
      <DailyNews />
      <Ranking />
    </div>
  );
};

export default MainDownLeft;
