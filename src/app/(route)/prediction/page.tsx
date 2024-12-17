import PredictionConatiner from '@/app/components/prediction/PredictionConatiner';
import PredictionSideContainer from '@/app/components/prediction/predictionSide/PredictionSideContainer';
import DownSideBar from '@/app/components/simulation/side/DownSideBar';

function SimulationPage() {
  return (
    <section className="relative w-full h-[calc(100vh] justify-between min-h-[800px]">
      <div className="flex w-full h-full px-[5%] mt-[1%] justify-between mb-4">
        <div className="flex w-full gap-x-[1%] justify-between">
          <PredictionConatiner />
          <PredictionSideContainer />
        </div>
      </div>
      <DownSideBar />
    </section>
  );
}

export default SimulationPage;
