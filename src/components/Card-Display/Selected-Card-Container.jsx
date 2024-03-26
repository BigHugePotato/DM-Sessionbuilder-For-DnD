import { useFetchStore } from "../../stores/Fetch-Store";
import { MonsterDisplayCard } from "./Display-Cards/Monster-Display-Card";
import style from "./Card-Container.module.css";

export function SelectedCardContainer() {
  const selectedCards = useFetchStore((state) => state.selectedCards);

  return (
    <div className={style.selectedCardContainer}>
      {selectedCards.map((cardId, index) => (
        <MonsterDisplayCard key={index} monsterId={cardId} />
      ))}
    </div>
  );
}
