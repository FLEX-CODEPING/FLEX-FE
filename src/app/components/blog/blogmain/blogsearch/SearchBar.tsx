import React from 'react';
import Image from 'next/image';
interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
  handleSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery, handleSearch }) => {
  return (
    <div className="search-bar">
      <div className="icon-container">
      <Image
          src="/images/logo.png"
          alt="logoImg"
          width={40}
          height={40}
        />
      </div>
      <input
        type="text"
        placeholder="검색어를 입력해 주세요."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="input"
      />
      <button onClick={handleSearch} className="search-button">
      <Image
            src="/images/1c.png"
            alt="search-button"
            width={27}
            height={27}
          />
      </button>
    </div>
  );
};

export default SearchBar;
