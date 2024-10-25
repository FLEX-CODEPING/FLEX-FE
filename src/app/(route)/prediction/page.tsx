import PredictionConatiner from '@/app/components/prediction/PredictionConatiner';
import DownSideBar from '@/app/components/simulation/side/DownSideBar';
import TradeContainer from '@/app/components/simulation/trade/TradeContainer';

function SimulationPage() {
  return (
    <section className="relative w-full h-[calc(100vh-140px)] justify-between min-h-[800px]">
      <div className="flex w-full h-full px-[5%] mt-[1%] justify-between ">
        <div className="flex w-full gap-x-[1%]  pt-[2%] justify-between">
          <PredictionConatiner />
          <TradeContainer />
        </div>
      </div>
      <DownSideBar />
    </section>
  );
}

export default SimulationPage;
