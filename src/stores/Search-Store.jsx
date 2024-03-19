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

  // Inside your Zustand store
  fetchCardDetails: async (cardType, cardId) => {
    try {
      const response = await fetch(
        `https://api.open5e.com/v1/${cardType}/${cardId}`,
        {
          headers: { Accept: "application/json" },
        }
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch details for ${cardType} with ID ${cardId}`
        );
      }
      const data = await response.json();

      // Assuming you want to store the fetched card details in a generic way
      // You might need a way to store multiple card details if they are fetched simultaneously
      set({ cardDetails: data });
    } catch (error) {
      console.error("Failed to fetch card details:", error);
      set({ error: error.message });
    }
  },
}));
