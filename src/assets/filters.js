export const initialFilterState = {
    crRange: { min: 0, max: 30 }, // Use an object for the CR range
  };

export const updateFilter = (state, filterName, value) => ({
  ...state,
  [filterName]: value,
});
