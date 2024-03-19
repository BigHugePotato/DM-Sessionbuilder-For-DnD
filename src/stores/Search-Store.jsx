import { create } from "zustand";
import debounce from "lodash/debounce";

export const useSearchStore = create((set, get) => ({
  initialData: [],
  searchData: null,
  search: "",
  isLoading: false,
  error: null,
  cache: {},
  selectedCards: [],
  filters: {
    monster: false,
    spell: false,
  },

  // Generic fetchData function
  fetchData: async (url, options = {}) => {
    try {
      const response = await fetch(url, {
        headers: { Accept: "application/json" },
        ...options,
      });
      if (!response.ok) throw new Error(`Failed to fetch data from ${url}`);
      const data = await response.json();
      return data; // Return the fetched data for use in specific fetching functions
    } catch (error) {
      console.error("Fetch error:", error);
      throw error; // Rethrow to allow specific fetching functions to handle errors
    }
  },

  // Updated fetchInitialData using fetchData
  fetchInitialData: async () => {
    try {
      const data = await get().fetchData(
        `https://api.open5e.com/v1/monsters/?limit=9`
      );
      set({ initialData: data.results });
    } catch (error) {
      set({ error: error.message });
    }
  },

  // Updated fetchCardDetails using fetchData
  fetchCardDetails: async (cardType, cardId) => {
    try {
      const data = await get().fetchData(
        `https://api.open5e.com/v1/${cardType}/${cardId}`
      );
      set({ cardDetails: data }); // Assuming you're storing individual card details
    } catch (error) {
      set({ error: error.message });
    }
  },

  setFilter: (filter, value) => {
    set((state) => ({
      filters: {
        ...state.filters,
        [filter]: value,
      },
    }));
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
