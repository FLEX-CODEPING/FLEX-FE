'use client';

import { useSidebarStore } from '@/app/store/store';
import ChartContainer from './chart/ChartContainer';
import SImulateSearch from './search/SImulateSearch';

const SimulationContainer = () => {
  const { selectedItem } = useSidebarStore();
  const chartWidth = selectedItem === null ? 'w-[72%]' : 'w-[60%]';
  return (
    <div className={`${chartWidth} h-full flex flex-col`}>
      <div className="w-full flex-col flex gap-y-1">
        <SImulateSearch />
        <ChartContainer />
      </div>
    </div>
  );
};

export default SimulationContainer;
