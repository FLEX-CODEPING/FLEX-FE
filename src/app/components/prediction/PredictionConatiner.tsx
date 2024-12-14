'use client';

import SimulateSearch from '../simulation/search/SimulateSearch';
import ChartContainer from './chart/PrChartContainer';

const PredictionConatiner = () => {
  return (
    <div className="w-[80%] h-full flex flex-col">
      <div className="w-full flex-col flex h-full gap-y-1">
        <SimulateSearch />
        <ChartContainer />
      </div>
    </div>
  );
};

export default PredictionConatiner;
