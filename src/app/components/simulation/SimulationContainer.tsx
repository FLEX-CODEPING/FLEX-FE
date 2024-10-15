import SearchBar from './search/SearchBar';

const SimulationContainer = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="pl-[5%] w-full">
        <SearchBar />
      </div>
    </div>
  );
};

export default SimulationContainer;
