import Chart from './chart/ChartContainer';
import SearchBar from './search/SearchBar';

const SimulationContainer = () => {
  return (
    <div className="w-[66%] h-full flex flex-col">
      <div className="pl-[5%] pb-[3%] w-full flex-col flex gap-y-2.5">
        <SearchBar />
        <Chart />
      </div>
    </div>
  );
};

export default SimulationContainer;
