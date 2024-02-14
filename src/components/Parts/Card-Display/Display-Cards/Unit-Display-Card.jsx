import style from "./Display-Card.module.css";
import { useState, useEffect } from "react";

export const UnitDisplayCard = ({ monsterId }) => {
  const [monsterDetails, setMonsterDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!monsterId) return;

    const fetchMonsterDetails = async () => {
      try {
        const response = await fetch(
          `https://www.dnd5eapi.co/api/monsters/${monsterId}`,
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

  const { name, hit_points } = monsterDetails || {};
  const armorClassValue =
    monsterDetails && monsterDetails.armor_class.length > 0
      ? monsterDetails.armor_class[0].value
      : "N/A";
  const walkSpeed =
    monsterDetails && monsterDetails.speed && monsterDetails.speed.walk
      ? monsterDetails.speed.walk
      : "N/A";
  const swimSpeed =
    monsterDetails && monsterDetails.speed && monsterDetails.speed.swim
      ? monsterDetails.speed.swim
      : "N/A";
  const flySpeed =
    monsterDetails && monsterDetails.speed && monsterDetails.speed.fly
      ? monsterDetails.speed.fly
      : "N/A";

  const topTexts = [
    `AC: ${armorClassValue || "N/A"}`,
    `HP: ${hit_points || "N/A"}`,
    `Walk: ${walkSpeed}`,
    `Swim: ${swimSpeed}`,
    `Fly: ${flySpeed}`,
  ];

  const bottomTexts = [
    `Immunities: ${
      monsterDetails.damage_immunities
        ? monsterDetails.damage_immunities.join(", ")
        : "None"
    }`,
    `Resistances: ${
      monsterDetails.damage_resistances
        ? monsterDetails.damage_resistances.join(", ")
        : "None"
    }`,
    `Immunities: ${
      monsterDetails.condition_immunities
        ? monsterDetails.condition_immunities.join(", ")
        : "None"
    }`,
    `Vulnerabilities: ${
      monsterDetails.damage_vulnerabilities
        ? monsterDetails.damage_vulnerabilities.join(", ")
        : "None"
    }`,
    `Darkvision: ${
      monsterDetails.senses.darkvision
        ? monsterDetails.senses.darkvision
        : "None"
    }`,
    `Blindsight: ${
      monsterDetails.senses.blindsight
        ? monsterDetails.senses.blindsight
        : "None"
    }`,
    `Passive Perception: ${
      monsterDetails.senses.passive_perception
        ? monsterDetails.senses.passive_perception
        : "None"
    }`,
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
