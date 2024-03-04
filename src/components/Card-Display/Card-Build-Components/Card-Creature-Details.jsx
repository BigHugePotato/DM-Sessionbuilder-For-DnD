import style from "../Display-Cards/Monster-Card.module.css";
import { Tooltip } from "../Tool-Tip/Tool-Tip";

export const CardCreatureDetails = ({ immunities, resistances, conditionImmunities, senses }) => {
    
    const isEmpty = !immunities && !resistances && !conditionImmunities && !senses;

    if (isEmpty) {
      return null;
    }
    
  return (
    <div className={style.detailsContainer}>
      {immunities && (
        <Tooltip content={immunities}>
          <span>Immunities</span>
        </Tooltip>
      )}
      {resistances && (
        <Tooltip content={resistances}>
          <span>Resistances</span>
        </Tooltip>
      )}
      {conditionImmunities && (
        <Tooltip content={conditionImmunities}>
          <span>Condition Immunities</span>
        </Tooltip>
      )}
      {senses && (
        <Tooltip content={senses}>
          <span>Senses</span>
        </Tooltip>
      )}
    </div>
  );
};
