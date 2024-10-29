import MainFooter from './MainFooter';
import MainMyInfo from './MainMyInfo';
import PopularPost from './PopularPost';
import RecommendPost from './RecommendPost';
import SimulateRank from './SimulateRank';

const MainDownRight = () => {
  return (
    <div className="w-[475px] flex-col-center gap-y-12">
      <MainMyInfo
        nickname="코드핑"
        followers={17}
        profile=""
        profit={+172000}
        views={932}
      />
      <PopularPost />
      <RecommendPost />
      <div className="w-full flex flex-col">
        <SimulateRank />
        <MainFooter />
      </div>
    </div>
  );
};

export default MainDownRight;
