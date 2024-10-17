'use client';

import { useSidebarStore } from '@/app/store/scoreStore';
import Chart from './chart/ChartContainer';
import SearchBar from './search/SearchBar';

const SimulationContainer = () => {
  const { selectedItem } = useSidebarStore();
  const chartWidth = selectedItem === null ? 'w-[72%]' : 'w-[60%]';
  return (
    <div className={`${chartWidth} h-full flex flex-col`}>
      <div className="w-full flex-col flex gap-y-1">
        <SearchBar />
        <Chart />
      </div>
    </div>
  );
};

export default SimulationContainer;
