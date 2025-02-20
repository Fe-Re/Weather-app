import SearchButton from "./SearchButton";

export function Header({ onSetSearch, onSearch }) {
  return (
    <header>
      <h1>Weather App</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter your location..."
          onChange={(e) => onSetSearch(e.target.value)}
        />
        <SearchButton onSearch={onSearch} />
      </div>
    </header>
  );
}
