import style from "./Monster-Card.module.css";
import { useState, useEffect } from "react";

export const MonsterDisplayCard = ({ monsterId }) => {
  const [monsterDetails, setMonsterDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!monsterId) return;

    const fetchMonsterDetails = async () => {
      try {
        const response = await fetch(
          `https://api.open5e.com/v1/monsters/${monsterId}`,
          {
            method: "GET",
            headers: { Accept: "application/json" },
          }
        );
        if (!response.ok) {
          throw new Error(
            `Failed to fetch details for monster with index ${monsterId}`
          );
        }
        const data = await response.json();
        console.log(data);
        setMonsterDetails(data);
      } catch (error) {
        console.error("Failed to fetch monster details:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMonsterDetails();
  }, [monsterId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

 const {
   name,
   hit_points,
   armor_class,
   speed,
   damage_immunities,
   damage_resistances,
   senses,
   condition_immunities,
 } = monsterDetails || {};

  const topTexts = [
    `AC: ${armor_class || "N/A"}`,
    `HP: ${hit_points || "N/A"}`,
    `Speed: Walk: ${speed?.walk || "N/A"}, Fly: ${speed?.fly || "N/A"}, Swim: ${
      speed?.swim || "N/A"
    }`,
  ];

  const bottomTexts = [
    `Immunities: ${damage_immunities || "None"}`,
    `Resistances: ${damage_resistances || "None"}`,
    `Condition Immunities: ${condition_immunities || "None"}`,
    `Senses: ${senses || "None"}`,
  ];

  return (
    <div className={style.monsterCard}>
      <h2 className={style.name}>{name}</h2>
      <div className={style.topSection}>
        {/* <img src={imgSrc} alt={name} className={style.cardImage} />{" "} */}
        <div className={style.textbox}>
          {topTexts.map((text, index) => (
            <div key={index} className={style.text}>
              {text}
            </div>
          ))}
        </div>
      </div>
      <div className={style.bottomSection}>
        {bottomTexts.map((text, index) => (
          <div key={index} className={style.text}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};
