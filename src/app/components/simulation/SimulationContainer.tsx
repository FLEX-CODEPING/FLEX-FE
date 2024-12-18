'use client';

import { useSidebarStore } from '@/app/store/store';
import ChartContainer from './chart/ChartContainer';
import StockInfoContainer from './chart/stockInfo/StockInfoContainer';
import SimulateSearch from './search/SimulateSearch';

const SimulationContainer = () => {
  const { selectedItem } = useSidebarStore();
  const chartWidth = selectedItem === null ? 'w-[72%]' : 'w-[60%]';
  return (
    <div className={`${chartWidth} h-full flex flex-col dark:bg-black-0 dark:text-gray-4`}>
      <div className="w-full flex-col flex gap-y-1">
        <SimulateSearch />
        <ChartContainer />
        <StockInfoContainer />
      </div>
    </div>
  );
};

export default SimulationContainer;
