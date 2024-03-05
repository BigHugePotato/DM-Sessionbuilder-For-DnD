import style from "../Display-Cards/Monster-Card.module.css";
import { HoverTooltip } from "../Tool-Tip/Tool-Tip";

export const CardCreatureDetails = ({ immunities, resistances, conditionImmunities, senses }) => {
    
    const isEmpty = !immunities && !resistances && !conditionImmunities && !senses;

    if (isEmpty) {
      return null;
    }
    
  return (
    <div className={style.detailsContainer}>
      {immunities && (
        <HoverTooltip content={immunities}>
          <span>Immunities</span>
        </HoverTooltip>
      )}
      {resistances && (
        <HoverTooltip content={resistances}>
          <span>Resistances</span>
        </HoverTooltip>
      )}
      {conditionImmunities && (
        <HoverTooltip content={conditionImmunities}>
          <span>Condition Immunities</span>
        </HoverTooltip>
      )}
      {senses && (
        <HoverTooltip content={senses}>
          <span>Senses</span>
        </HoverTooltip>
      )}
    </div>
  );
};
