import { create } from "zustand";
import { initialFilterState, updateFilter } from "../assets/filters";
import { useFetchStore } from "./Fetch-Store";
import { useSearchStore } from "./Search-Store";

export const useFilterStore = create((set) => ({
  filters: initialFilterState,

  setFilter: (filterName, value) => {
    set((state) => ({
      filters: updateFilter(state.filters, filterName, value),
    }));
  },

  applyFilters: async (crValue) => {
    const { fetchData } = useFetchStore.getState(); // Accessing fetchData from Fetch Store
    const { setSearchData } = useSearchStore.getState(); // Assuming there's a method to set searchData in Search Store
    const crQuery = `?cr=${crValue}`;
    try {
      const data = await fetchData(`https://api.open5e.com/v1/monsters/${crQuery}&limit=10`.replace("?&", "?"));
      console.log("Filtered data received:", data.results);
      setSearchData(data.results); // Update searchData in Search Store
    } catch (error) {
      console.error("Error applying filters:", error.message);
    }
  },
}));
