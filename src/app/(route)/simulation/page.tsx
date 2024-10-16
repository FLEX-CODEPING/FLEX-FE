import DownSideBar from '@/app/components/simulation/side/DownSideBar';
import SideNav from '@/app/components/simulation/side/SideNav';
import SimulationContainer from '@/app/components/simulation/SimulationContainer';
import TradeContainer from '@/app/components/simulation/trade/TradeContainer';

function SimulationPage() {
  return (
    <section className="flex w-full flex-col h-full justify-between relative">
      <div className="w-full h-full pl-[5%] flex mt-[1%] items-stretch justify-between">
        <SimulationContainer />
        <TradeContainer />
        <SideNav />
      </div>
      <DownSideBar />
    </section>
  );
}

export default SimulationPage;
