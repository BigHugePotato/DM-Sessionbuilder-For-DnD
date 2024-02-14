import { useState, useEffect } from "react";
import { UnitDisplayCard } from "./Display-Cards/Unit-Display-Card"
import style from "./Card-Container.module.css";

export function CardContainer() {
  const [monsterIndexes, setMonsterIndexes] = useState([]);
 
    useEffect(() => {
    const fetchMonsterIndexes = async () => {
      try {
        const response = await fetch(`https://www.dnd5eapi.co/api/monsters`, {
          headers: { Accept: 'application/json' }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch monster indexes');
        }
        const data = await response.json();
        setMonsterIndexes(data.results.slice(0, 10));
      } catch (error) {
        console.error("Error fetching monster indexes:", error);
      }
    };

    
    fetchMonsterIndexes();
  }, []);


  return (
    <div className={style.cardContainer}>
      {monsterIndexes.map((monster, index) => (
        <UnitDisplayCard key={index} monsterId={monster.index} />
      ))}
    </div>
  );
}
