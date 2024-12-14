import Icons from '@/app/components/common/Icons';
import { blogSearch } from '@/app/constants/iconPath';

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
  handleSearch: () => void;
}
const SearchBar: React.FC<SearchBarProps> = ({
  query,
  setQuery,
  handleSearch,
}) => {
  return (
    <div className="flex items-center border border-[#F95700] rounded-full p-4 w-[687px] h-[58px] mx-auto my-2.5">
      <input
        type="text"
        placeholder="검색어를 입력해 주세요."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 border-none outline-none p-3 text-base rounded-full"
      />
      <button
        type="button"
        onClick={handleSearch}
        className="bg-transparent border-none cursor-pointer"
      >
        <Icons name={blogSearch} />
      </button>
    </div>
  );
};
export default SearchBar;
