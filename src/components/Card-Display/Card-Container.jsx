import { MonsterDisplayCard } from "./Display-Cards/Monster-Display-Card";
import { useSearchStore } from "../../stores/Search-Store";
import { useEffect } from "react";
import style from "./Card-Container.module.css";

export function CardContainer() {
  const { initialData, searchData, fetchInitialData } = useSearchStore();

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  const dataToDisplay = searchData || initialData;

  return (
    <div className={style.cardContainer}>
      {dataToDisplay.map((monster, index) => (
        <MonsterDisplayCard key={index} monsterId={monster.slug} />
      ))}
    </div>
  );
}
