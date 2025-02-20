import search from "../Image/Search.svg";

export default function SearchButton({ onSearch }) {
  return (
    <span className="search-button">
      <img
        onClick={onSearch}
        src={search}
        alt="search"
        className="search-icon"
      />
    </span>
  );
}
