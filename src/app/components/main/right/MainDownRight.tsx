import MainFooter from './MainFooter';
import MainMyInfo from './MainMyInfo';
import PopularPost from './PopularPost';
import RecommendPost from './RecommendPost';
import SimulateRank from './SimulateRank';

const MainDownRight = () => {
  return (
    <div className="w-[475px] h-full flex-col-center justify-between">
      <div className="w-full flex flex-col-center gap-y-[56px]">
        <MainMyInfo nickname="코드핑" followers={17} profile="" views={932} />
        <PopularPost />
        <RecommendPost />
        <SimulateRank />
      </div>
      <MainFooter />
    </div>
  );
};

export default MainDownRight;
