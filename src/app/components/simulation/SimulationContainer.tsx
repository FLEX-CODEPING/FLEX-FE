import Chart from './chart/ChartContainer';
import SearchBar from './search/SearchBar';

const SimulationContainer = () => {
  return (
    <div className="w-[70%] h-full flex flex-col pb-[4%]">
      <div className="w-full flex-col flex gap-y-1">
        <SearchBar />
        <Chart />
      </div>
    </div>
  );
};

export default SimulationContainer;
