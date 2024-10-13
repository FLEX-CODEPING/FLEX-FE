import React from 'react';

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
  handleSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery, handleSearch }) => {
  return (
    <div className="search-bar">
      <div className="icon-container">
        <img src="/images/logo.png" alt="search-icon" className="icon" />
      </div>
      <input
        type="text"
        placeholder="검색어를 입력해 주세요."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="input"
      />
      <button onClick={handleSearch} className="search-button">
        <img src="/images/1c.png" alt="search-button" className="button-icon" />
      </button>
    </div>
  );
};

export default SearchBar;
