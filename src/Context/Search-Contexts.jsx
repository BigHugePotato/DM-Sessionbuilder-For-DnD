import { useState, createContext, useEffect, useContext } from "react";

const SearchContext = createContext();

export function useSearch() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }) {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const performSearch = async (query) => {
    setSearchQuery(query);
    // Implement the search logic here, updating searchResults accordingly
  };

  return (
    <SearchContext.Provider
      value={{ searchResults, searchQuery, performSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
}
