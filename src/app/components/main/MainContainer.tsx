import MainDownLeft from './left/MainDownLeft';
import MainHeader from './MainHeader';
import MainBlogContainer from './MainPostContainer';
import MainDownRight from './right/MainDownRight';

const MainContainer = () => {
  return (
    <div className="w-full flex-col-center">
      <MainHeader />
      <MainBlogContainer />
      <div className="flex gap-x-[60px]">
        <MainDownLeft />
        <MainDownRight />
      </div>
    </div>
  );
};
export default MainContainer;
