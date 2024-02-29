import { useSearchStore } from "../../../stores/Search-Store";

export const SelectButton = ({ cardId }) => {
  const toggleCardSelection = useSearchStore(
    (state) => state.toggleCardSelection
  );

  return <button onClick={() => toggleCardSelection(cardId)}>Select</button>;
};
