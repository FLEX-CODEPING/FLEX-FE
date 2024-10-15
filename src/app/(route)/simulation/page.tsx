import DownSideBar from '@/app/components/simulation/side/DownSideBar';
import SideNav from '@/app/components/simulation/side/SideNav';
import SimulationContainer from '@/app/components/simulation/SimulationContainer';

function SimulationPage() {
  return (
    <section className="flex w-full h-full flex-col justify-between">
      <div className="w-full h-full pl-[5%] flex mt-[1%] justify-between">
        <SimulationContainer />
        <SideNav />
      </div>
      <DownSideBar />
    </section>
  );
}

export default SimulationPage;
