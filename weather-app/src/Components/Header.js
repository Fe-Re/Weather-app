import SearchButton from "./SearchButton";

export function Header({ onSetSearch, onSearch }) {
  return (
    <header>
      <h1>Weather App</h1>
      <form
        className="search-box"
        onSubmit={(e) => {
          e.preventDefault();
          onSearch();
        }}
      >
        <input
          type="text"
          placeholder="Enter your location..."
          onChange={(e) => onSetSearch(e.target.value)}
        />
        <SearchButton onSearch={onSearch} />
      </form>
    </header>
  );
}
