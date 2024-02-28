import style from "./Monster-Card.module.css";
import { useState, useEffect } from "react";
import { Tooltip } from "../Tool-Tip/Tool-Tip";
import { MdShield } from "react-icons/md";
import { GiWalk } from "react-icons/gi";
import { GiBatWing } from "react-icons/gi";
import { TbSwimming } from "react-icons/tb";

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

  const LegendaryActions = (Lactions) => {
    return Lactions.map((action, index) => (
      <div key={index}>
        <strong>{action.name}:</strong> {action.desc}
      </div>
    ));
  };

  const Reactions = (actions) => {
    return actions.map((reaction, index) => (
      <div key={index}>
        <strong>{reaction.name}:</strong> {reaction.desc}
      </div>
    ));
  };

  const formatSkills = (skillsObj) => {
    if (!skillsObj) return "None";

    const skillEntries = Object.entries(skillsObj);
    return skillEntries.map(([skillName, skillValue], index) => (
      <div key={index}>
        <strong>{skillName}:</strong> +{skillValue}
      </div>
    ));
  };

  const getSaveValues = (monsterDetails) => {
    const saves = [];

    const saveTypes = [
      { name: "STR Save", value: monsterDetails.strength_save },
      { name: "DEX Save", value: monsterDetails.dexterity_save },
      { name: "CON Save", value: monsterDetails.constitution_save },
      { name: "INT Save", value: monsterDetails.intelligence_save },
      { name: "WIS Save", value: monsterDetails.wisdom_save },
      { name: "CHA Save", value: monsterDetails.charisma_save },
    ];

    saveTypes.forEach((save) => {
      if (save.value !== null) {
        saves.push(`${save.name}: +${save.value}`);
      }
    });
    return saves.length > 0 ? saves : ["No Saves"];
  };
  const saveValues = getSaveValues(monsterDetails);

  const legendaryActionsContent = LegendaryActions(legendary_actions || []);
  const ReactionContent = Reactions(reactions || []);
  const skillsContent = formatSkills(skills);
  const saveValuesContent = saveValues.map((save, index) => (
    <div key={index}>{save}</div>
  ));

  return (
    <div className={style.monsterCard}>
      <h2 className={style.name}>{name}</h2>
      <div className={style.topSection}>
        {img_main && (
          <div className={style.imageContainer}>
            <img
              src={img_main}
              alt={name || "Monster Image"}
              className={style.monsterImage}
            />
          </div>
        )}
        <div className={style.acHpContainer}>
          <div className={style.ac}>
            <MdShield /> {armor_class || "N/A"}
          </div>
          <div className={style.hp}>HP: {hit_points || "N/A"}</div>
        </div>
      </div>
      <div className={style.statsContainer}>
        <div className={style.speedContainer}>
          <GiWalk /> : {speed?.walk || "N/A"}{" "}
          <GiBatWing /> : {speed?.fly || "N/A"}{" "}
          <TbSwimming /> : {speed?.swim || "N/A"}
        </div>
      </div>
      <div className={style.bottomSection}>
        <Tooltip content={damage_immunities || "None"}>
          <span>Immunities</span>
        </Tooltip>
        <Tooltip content={damage_resistances || "None"}>
          <span>Resistances</span>
        </Tooltip>
        <Tooltip content={condition_immunities || "None"}>
          <span>Condition Immunities</span>
        </Tooltip>
        <Tooltip content={senses || "None"}>
          <span>Senses</span>
        </Tooltip>
        <Tooltip content={legendaryActionsContent}>
          <span>Legendary Actions</span>
        </Tooltip>
        <Tooltip content={ReactionContent}>
          <span>Reactions</span>
        </Tooltip>
        <Tooltip content={skillsContent}>
          <span>Skills</span>
        </Tooltip>
        <Tooltip content={saveValuesContent}>
          <span>Saves</span>
        </Tooltip>
      </div>
    </div>
  );
};
