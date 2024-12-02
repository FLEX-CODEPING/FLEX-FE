'use client';

import ChartContainer from './chart/PrChartContainer';
import SImulateSearch from '../simulation/search/SImulateSearch';

const PredictionConatiner = () => {
  return (
    <div className="w-[80%] h-full flex flex-col">
      <div className="w-full flex-col flex h-full gap-y-1">
        <SImulateSearch />
        <ChartContainer />
      </div>
    </div>
  );
};

export default PredictionConatiner;
