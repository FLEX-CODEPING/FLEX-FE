import ActiveSide from '@/app/components/simulation/side/ActiveSide';
import DownSideBar from '@/app/components/simulation/side/DownSideBar';
import SideNav from '@/app/components/simulation/side/SideNav';
import SimulationContainer from '@/app/components/simulation/SimulationContainer';
import TradeContainer from '@/app/components/simulation/trade/TradeContainer';

function SimulationPage() {
  return (
    <section className="flex w-full flex-col h-full justify-between relative">
      <div className="flex w-full h-full pl-[5%] mt-[1%] items-stretch justify-between ">
        <div className="flex w-full pb-[5%] gap-x-[1%] justify-between">
          <SimulationContainer />
          <TradeContainer />
          <ActiveSide />
        </div>
        <SideNav />
      </div>
      <DownSideBar />
    </section>
  );
}

export default SimulationPage;
