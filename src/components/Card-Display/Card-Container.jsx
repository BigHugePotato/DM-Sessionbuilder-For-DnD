import { MonsterDisplayCard } from "./Display-Cards/Monster-Display-Card";
import { useFetchStore } from "../../stores/Fetch-Store";
import { useEffect } from "react";
import style from "./Card-Container.module.css";
import { useSearchStore } from "../../stores/Search-Store";

console.log("CardContainer component rendering");


export function CardContainer() {
  const { initialData, fetchInitialData, selectedCards } = useFetchStore();
  const { searchData } = useSearchStore(); // Get searchData from useSearchStore

  useEffect(() => {
    console.log("Component mounted. Calling fetchInitialData...");
    fetchInitialData();
  }, [fetchInitialData]);

  const dataToDisplay = searchData || initialData || [];

  return (
    <div className={style.cardContainer}>
      {dataToDisplay.map((monster, index) => (
        <MonsterDisplayCard
          key={index}
          monsterId={monster.slug}
          isSelected={selectedCards.includes(monster.slug)}
        />
      ))}
    </div>
  );
}
