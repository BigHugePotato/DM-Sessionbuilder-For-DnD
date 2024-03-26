
import { useEffect } from "react";
import { useSearchStore } from "../../../stores/Search-Store";

export function SearchFunction() {
  const { search, setSearch, performSearch, searchData, isLoading, error } =
    useSearchStore();

  useEffect(() => {
    const debounceId = setTimeout(() => {
      if (search.length >= 2) performSearch();
    }, 500);

    return () => clearTimeout(debounceId);
  }, [search, performSearch]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {}
    </div>
  );
}
