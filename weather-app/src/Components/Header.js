export function Header({ onSetSearch, onSearch }) {
  return (
    <header>
      <h1>Weather App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your location..."
          onChange={(e) => onSetSearch(e.target.value)}
        />
        <button onClick={onSearch}>Search</button>
      </div>
    </header>
  );
}
