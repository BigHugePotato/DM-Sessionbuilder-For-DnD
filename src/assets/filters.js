export const initialFilterState = {
    crRange: 1, // Use an object for the CR range
  };

export const updateFilter = (state, filterName, value) => ({
  ...state,
  [filterName]: value,
});
