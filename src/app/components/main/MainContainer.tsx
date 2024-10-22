import MainDownLeft from './left/MainDownLeft';
import MainHeader from './MainHeader';
import MainBlogContainer from './MainPostContainer';
import MainDownRight from './right/MainDownRight';

const MainContainer = () => {
  return (
    <div className="w-full flex-col-center pb-20">
      <MainHeader />
      <MainBlogContainer />
      <div className="flex gap-x-[60px] mt-10">
        <MainDownLeft />
        <MainDownRight />
      </div>
    </div>
  );
};
export default MainContainer;
