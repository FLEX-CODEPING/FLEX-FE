import ActiveSide from '@/app/components/simulation/side/ActiveSide';
import DownSideBar from '@/app/components/simulation/side/DownSideBar';
import SideNav from '@/app/components/simulation/side/SideNav';
import SimulationContainer from '@/app/components/simulation/SimulationContainer';
import TradeContainer from '@/app/components/simulation/trade/TradeContainer';

function SimulationPage() {
  return (
    <section className="relative w-full h-[calc(100vh] justify-between min-h-[800px] pr-16 dark:bg-black-0 dark:text-gray-4">
      <div className="wh-fullex pl-[5%] pt-[1%] justify-between pb-12">
        <div className="flex w-full gap-x-[1%] justify-between">
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
