

export const initialFilterState = {
  hpRange: [0, 300], // Example range; adjust based on your data
  acRange: [0, 30], // Example range; adjust based on your data
  monsterType: "", // Could be a specific type or 'All' for no filter
  hasSpecialTrait: false, // Example boolean filter
  challengeRating: [0, 30], // Example range; adjust based on your data
};


export const updateFilter = (state, filterName, value) => ({
    ...state,
    [filterName]: value,
  });