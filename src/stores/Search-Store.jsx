import { create } from "zustand";

export const useSearchStore = create((set) => ({
  initialData: [],
  searchData: null,
  search: "",
  isLoading: false,
  error: null,
  fetchInitialData: async () => {
    try {
      const response = await fetch(
        `https://api.open5e.com/v1/monsters/?limit=10`,
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
  setSearch: (search) => set({ search }),
  performSearch: async () => {
    if (!state.search.trim()) {
      set({ searchData: null });
      return;
    }

    set({ isLoading: true, error: null });

    try {
      const response = await fetch(
        `https://api.open5e.com/monsters/?search=${state.search}`
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
}));
