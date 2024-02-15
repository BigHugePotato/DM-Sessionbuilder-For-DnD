import { useState, useEffect } from "react";
import { MonsterDisplayCard } from "./Display-Cards/Monster-Display-Card"
import style from "./Card-Container.module.css";

export function CardContainer() {
  const [monsterIndexes, setMonsterIndexes] = useState([]);
 
    useEffect(() => {
    const fetchMonsterIndexes = async () => {
      try {
        const response = await fetch(`https://api.open5e.com/v1/monsters/?limit=30`, {
          headers: { Accept: 'application/json' }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch monster indexes');
        }
        const data = await response.json();
        setMonsterIndexes(data.results);
      } catch (error) {
        console.error("Error fetching monster indexes:", error);
      }
    };


    fetchMonsterIndexes();
  }, []);


  return (
    <div className={style.cardContainer}>
      {monsterIndexes.map((monster, index) => (
        <MonsterDisplayCard key={index} monsterId={monster.slug} />
      ))}
    </div>
  );
}
