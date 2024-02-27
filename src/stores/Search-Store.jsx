import { create } from "zustand";
import debounce from "lodash/debounce";

export const useSearchStore = create((set, get) => ({
  initialData: [],
  searchData: null,
  search: "",
  isLoading: false,
  error: null,
  cache: {},
  fetchInitialData: async () => {
    try {
      const response = await fetch(
        `https://api.open5e.com/v1/monsters/?limit=9`,
        {
          headers: { Accept: "application/json" },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch initial monster data");
      }
      const data = await response.json();
      set({ initialData: data.results });
    } catch (error) {
      console.error("Error fetching initial data:", error);
      set({ error: error.message });
    }
  },
  setSearch: (search) => {
     set({ search });
     get().debouncedPerformSearch();
  },
  performSearch: async () => {
    const currentState = get()
    if (!currentState.search.trim() || currentState.search.length <= 2) {
      set({ searchData: null });
      return;
    }

    set({ isLoading: true, error: null });

    try {
      const response = await fetch(
        `https://api.open5e.com/monsters/?search=${encodeURIComponent(
          currentState.search
        )}&limit=9`
      );
      if (!response.ok) throw new Error("Failed to fetch search results");

      const data = await response.json();
      set({ searchData: data.results });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
  debouncedPerformSearch: debounce(() => {
    get().performSearch();
  }, 300),
}));
