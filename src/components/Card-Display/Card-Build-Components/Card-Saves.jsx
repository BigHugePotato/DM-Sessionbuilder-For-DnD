import { Tooltip } from "../Tool-Tip/Tool-Tip";
import style from "../Display-Cards/Monster-Card.module.css";

export const CardSaves = ({ monsterDetails }) => {
  if (!monsterDetails) return null;
  const saveTypes = [
    { name: "STR Save", value: monsterDetails.strength_save },
    { name: "DEX Save", value: monsterDetails.dexterity_save },
    { name: "CON Save", value: monsterDetails.constitution_save },
    { name: "INT Save", value: monsterDetails.intelligence_save },
    { name: "WIS Save", value: monsterDetails.wisdom_save },
    { name: "CHA Save", value: monsterDetails.charisma_save },
  ];

  const saveValues = saveTypes.map((save, index) =>
    save.value !== null ? (
      <div key={index}>{`${save.name}: +${save.value}`}</div>
    ) : null
  );

  return (
    <Tooltip content={<div>{saveValues}</div>}>
      <span className={style.savesTrigger}>Saves</span>
    </Tooltip>
  );
};
