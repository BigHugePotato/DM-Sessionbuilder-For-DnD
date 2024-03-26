export const initialFilterState = {
    crRange: 1, // Use an object for the CR range
  };

  console.log("In filters.js, InitialFilterState", initialFilterState.crRange);

export const updateFilter = (state, filterName, value) => ({
  ...state,
  [filterName]: value,
});
