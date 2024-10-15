import SideNav from '@/app/components/simulation/side/SideNav';
import SimulationContainer from '@/app/components/simulation/SimulationContainer';

function SimulationPage() {
  return (
    <section className="w-full flex mt-[1%] items-stretch justify-between">
      <SimulationContainer />
      <SideNav />
    </section>
  );
}

export default SimulationPage;
