import style from "./Display-Card.module.css";
import {useState, useEffect} from "react";

export const UnitDisplayCard = ({ monsterId }) => {
  const [monsterDetails, setMonsterDetails] = useState(null);

  useEffect(() => {
    const fetchMonsterDetails = async () => {
      try {
        const response = await fetch(`https://www.dnd5eapi.co/api/monsters/:index`);
        if (!response.ok) {
          throw new Error("Could not fetch monster id");
        }
        const data = await response.json();
        setMonsterDetails(data);
      } catch (error) {
        console.error("failed to fetch monster details:", error)
      }
    };

    fetchMonsterDetails();
    
  }, [monsterId]);

  if (!monsterDetails) return <div>Loading...</div>


  const {
    name,
    armor_class: ac,
    hit_points: hp,
    imgSrc,
  } = monsterDetails;
  
  const topTexts = [`AC: ${ac}`, `HP: ${hp}`];
const bottomTexts = [
  `Resistances: ${resistances ? resistances.join(", ") : "None"}`,
  ...(reactions ? [`Reactions: ${Object.keys(reactions).join(", ")}`] : []),
  ...(legendaryActions
    ? [`Legendary Actions: ${Object.keys(legendaryActions).join(", ")}`]
    : []),
  `Saving Throws: ${
    savingThrows
      ? Object.entries(savingThrows)
          .map(([key, value]) => `${key}: ${value}`)
          .join(", ")
      : "None"
  }`,
];


  return (
    <div className={style.card}>
      <h2 className={style.name}>{name}</h2>
      <div className={style.topSection}>
        <img src={imgSrc} alt={name} className={style.cardImage} />{" "}
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

