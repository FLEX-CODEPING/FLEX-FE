import DailyNews from './DailyNews';
import Ranking from './Ranking';

const MainDownLeft = () => {
  return (
    <div className="w-[580px] flex-col-center gap-y-8">
      <DailyNews />
      <Ranking />
    </div>
  );
};

export default MainDownLeft;
