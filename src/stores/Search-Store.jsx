import { create } from "zustand";
import debounce from "lodash/debounce";

export const useSearchStore = create((set, get) => ({
  initialData: [],
  searchData: null,
  search: "",
  isLoading: false,
  error: null,
  cache: {},
  filters: {
    monster: false,
    spell: false,
  },
  setFilter: (filter, value) => {
    set((state) => ({
      filters: {
        ...state.filters,
        [filter]: value,
      },
    }));
  },
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
      console.log("Fetched data:", data.results); // Log the fetched data

      const filteredData = data.results.filter(
        (item) => get().filters[item.type]
      );
      set({ initialData: filteredData });
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
    const currentState = get();
    const { search, cache } = currentState;

    if (!search.trim() || search.length <= 2) {
      set({ searchData: null });
      return;
    }

    if (cache[search]) {
      set({ searchData: cache[search], isLoading: false });
      return;
    }

    set({ isLoading: true, error: null });

    try {
      const response = await fetch(
        `https://api.open5e.com/monsters/?search=${encodeURIComponent(
          search
        )}&limit=9`
      );
      if (!response.ok) throw new Error("Failed to fetch search results");

      const data = await response.json();

      const filteredSearchData = data.results.filter(
        (item) => get().filters[item.type]
      );

      set((state) => ({
        searchData: filteredSearchData,
        isLoading: false,
        cache: { ...state.cache, [search]: data.results },
      }));
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
    console.log("Updated cache:", cache);
  },
  debouncedPerformSearch: debounce(() => {
    get().performSearch();
  }, 300),

  selectedCards: [],

  toggleCardSelection: (id) =>
    set((state) => {
      const isSelected = state.selectedCards.includes(id);
      return {
        selectedCards: isSelected
          ? state.selectedCards.filter((cardID) => cardID !== id)
          : [...state.selectedCards, id],
      };
    }),
}));
