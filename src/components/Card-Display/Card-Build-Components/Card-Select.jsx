import { useFetchStore } from "../../../stores/Fetch-Store";

export const SelectButton = ({ cardId }) => {
  const toggleCardSelection = useFetchStore(
    (state) => state.toggleCardSelection
  );

  return <button onClick={() => toggleCardSelection(cardId)}>Select</button>;
};
