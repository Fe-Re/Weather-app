import search from "../Image/Search.svg";

export default function SearchButton({ onSearch }) {
  return (
    <span>
      <img onClick={onSearch} src={search} alt="search" />
    </span>
  );
}
