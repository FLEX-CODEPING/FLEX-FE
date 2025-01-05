import MainDownLeft from './left/MainDownLeft';
import MainHeader from './MainHeader';
import MainDownRight from './right/MainDownRight';

const MainContainer = () => {
  return (
    <div className="w-full flex-col-center pb-20 gap-y-20">
      <MainHeader />
      <div className="flex gap-x-16">
        <MainDownLeft />
        <MainDownRight />
      </div>
    </div>
  );
};
export default MainContainer;
