import MainDownLeft from './left/MainDownLeft';
import MainBlogContainer from './MainPostContainer';
import MainHeader from './MainHeader';
import MainDownRight from './right/MainDownRight';

const MainContainer = () => {
  return (
    <div className="w-full flex-col-center">
      <MainHeader />
      <MainBlogContainer />
      <MainDownLeft />
      <MainDownRight />
    </div>
  );
};
export default MainContainer;
