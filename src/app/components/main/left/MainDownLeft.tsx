import DailyNews from './DailyNews';
import Ranking from './Ranking';

const MainDownLeft = () => {
  return (
    <div className="w-[580px] flex-col-center gap-y-">
      <DailyNews />
      <div className="w-[540px] border-b-2 border-gray-3" />
      <Ranking />
    </div>
  );
};

export default MainDownLeft;
