import style from "./Monster-Card.module.css";
import { CardImage } from "../Card-Build-Components/Card-Image";
import { CardAcHp } from "../Card-Build-Components/Card-AcHp";
import { useState, useEffect } from "react";
import { Tooltip } from "../Tool-Tip/Tool-Tip";
import { GiWalk } from "react-icons/gi";
import { GiBatWing } from "react-icons/gi";
import { TbSwimming } from "react-icons/tb";
import { CardCreatureDetails } from "../Card-Build-Components/Card-Creature-Details";
import { CardSkills } from "../Card-Build-Components/Card-Skills";
import { CardSaves } from "../Card-Build-Components/Card-Saves";
import { CardLegendaryActions } from "../Card-Build-Components/Card-LegendaryActions";
import { CardReactions } from "../Card-Build-Components/Card-Reactions";

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
        // console.log(data);
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
    legendary_actions,
    reactions,
    skills,
    img_main,
  } = monsterDetails || {};

  return (
    <div className={style.monsterCard}>
      <h2 className={style.name}>{name}</h2>
      <div className={style.topSection}>
        {img_main && (
          <div className={style.imageContainer}>
            <CardImage imgSrc={img_main} altText={name || "Monster Image"} />
          </div>
        )}
        <CardAcHp armorClass={armor_class} hitPoints={hit_points} />
      </div>
      <div className={style.statsContainer}>
        <div className={style.speedContainer}>
          <GiWalk /> : {speed?.walk || "N/A"} <GiBatWing /> :{" "}
          {speed?.fly || "N/A"} <TbSwimming /> : {speed?.swim || "N/A"}
        </div>
      </div>
      <div className={style.bottomSection}>
        <CardCreatureDetails
          immunities={damage_immunities}
          resistances={damage_resistances}
          conditionImmunities={condition_immunities}
          senses={senses}
        />
        <CardLegendaryActions actions={legendary_actions || []} />
        <CardReactions reactions={reactions || []} />
        <CardSkills skillsObj={skills} />
        <CardSaves saveValues={monsterDetails} />
      </div>
    </div>
  );
};
