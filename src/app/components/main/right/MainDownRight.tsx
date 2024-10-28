import MainMyInfo from './MainMyInfo';
import PopularPost from './PopularPost';
import RecommendPost from './RecommendPost';
import SimulateRank from './SimulateRank';

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
      <PopularPost />
      <RecommendPost />
      <SimulateRank />
    </div>
  );
};

export default MainDownRight;
