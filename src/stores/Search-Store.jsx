import { create } from 'zustand';
import debounce from 'lodash/debounce';
import { useFetchStore } from "./Fetch-Store";
import { useFilterStore } from './Filter-Store';

export const useSearchStore = create((set, get) => ({
  search: "",
  searchData: null,


  setSearchData: (data) => {
    set({ searchData: data });
  },
  
  setSearch: (search) => {
    set({ search });
    get().debouncedPerformSearch();
  },
  

  
  performSearch: async () => {
    const fetchStore = useFetchStore.getState();
    const { search } = get();
    

    if (!search.trim() || search.length <= 2) {
      set({ searchData: null });
      return;
    }

    set({ isLoading: true, error: null });

    try {
      const response = await fetchStore.fetchData(
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
  },

  debouncedPerformSearch: debounce(() => {
    get().performSearch(get().fetchData);
  }, 300),
}));