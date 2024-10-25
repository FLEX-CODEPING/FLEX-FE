'use client';

import ChartContainer from '../simulation/chart/ChartContainer';
import SImulateSearch from '../simulation/search/SImulateSearch';

const PredictionConatiner = () => {
  return (
    <div className="w-[80%] h-full flex flex-col">
      <div className="w-full flex-col flex gap-y-1">
        <SImulateSearch />
        <ChartContainer />
      </div>
    </div>
  );
};

export default PredictionConatiner;
