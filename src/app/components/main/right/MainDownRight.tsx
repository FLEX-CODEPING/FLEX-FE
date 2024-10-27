import DailyNews from '../left/DailyNews';
import MainPostContainer from '../left/MainPostContainer';
import StockRank from '../left/StockRank';
import MainMyInfo from './MainMyInfo';

const MainDownRight = () => {
  return (
    <div className="w-[475px] flex-col-center gap-y-12">
      <MainMyInfo
        nickname={'코드핑'}
        followers={17}
        profile={''}
        profit={+172000}
        views={932}
      />
      <MainPostContainer />
      <DailyNews />
      <StockRank />
    </div>
  );
};

export default MainDownRight;
