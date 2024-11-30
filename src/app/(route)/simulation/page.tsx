import ActiveSide from '@/app/components/simulation/side/ActiveSide';
import DownSideBar from '@/app/components/simulation/side/DownSideBar';
import SideNav from '@/app/components/simulation/side/SideNav';
import SimulationContainer from '@/app/components/simulation/SimulationContainer';
import TradeContainer from '@/app/components/simulation/trade/TradeContainer';

function SimulationPage() {
  return (
    <section className="relative w-full h-[calc(100vh] justify-between min-h-[800px] pr-16">
      <div className="flex w-full h-full pl-[5%] mt-[1%] justify-between mb-12">
        <div className="flex w-full gap-x-[1%] pt-[%] justify-between">
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
