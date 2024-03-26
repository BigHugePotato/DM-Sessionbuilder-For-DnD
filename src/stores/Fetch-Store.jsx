import { create } from "zustand";
import { useFilterStore } from "./Filter-Store";
import { useSearchStore } from "./Search-Store";

export const useFetchStore = create((set, get) => ({
  initialData: [],
  searchData: null,
  search: "",
  isLoading: false,
  cache: {},
  selectedCards: [],

  fetchData: async (url, options = {}) => {
    const cacheKey = url;
    // Check if data for this URL is already in the cache
    if (get().cache[cacheKey]) {
      console.log("Returning cached data for:", url);
      return get().cache[cacheKey]; // Return cached data
    }

    console.log("Fetching data for:", url);
    set({ isLoading: true });

    try {
      const response = await fetch(cacheKey, {
        headers: { Accept: "application/json" },
        ...options,
      });

      if (!response.ok) throw new Error(`Failed to fetch data from ${url}`);

      const data = await response.json();
      set((state) => ({
        isLoading: false,
        // Update cache with new data using URL as the key
        cache: { ...state.cache, [url]: data },
      }));

      return data; // Return the fetched data for use in specific fetching functions
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  // Fetch data without any CR filter by default
  fetchInitialData: async () => {
    console.log("Fetching initial data...");
    try {
      const data = await get().fetchData(
        `https://api.open5e.com/v1/monsters/?limit=3`
      );
      console.log("Initial data fetched:", data.results);
      set({ initialData: data.results, searchData: data.results });
    } catch (error) {
      console.error("Error fetching initial data:", error.message);
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
