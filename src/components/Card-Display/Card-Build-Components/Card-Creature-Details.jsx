import style from "../Display-Cards/Monster-Card.module.css";
import { Tooltip } from "../Tool-Tip/Tool-Tip";

export const CardCreatureDetails = ({ immunities, resistances, conditionImmunities, senses }) => (
    <div className={style.detailsContainer}>
      <Tooltip content={immunities || "None"}>
        <span>Immunities</span>
      </Tooltip>
      <Tooltip content={resistances || "None"}>
        <span>Resistances</span>
      </Tooltip>
      <Tooltip content={conditionImmunities || "None"}>
        <span>Condition Immunities</span>
      </Tooltip>
      <Tooltip content={senses || "None"}>
        <span>Senses</span>
      </Tooltip>
    </div>
  );
