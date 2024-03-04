import { Tooltip } from "../Tool-Tip/Tool-Tip";
import style from "../Display-Cards/Monster-Card.module.css";

export const CardReactions = ({ reactions }) => {
  if (!reactions || reactions.length === 0) {
    return null;
  }
  return(
      <Tooltip
    content={
      <div>
        {reactions.map((reaction, index) => (
          <div key={index}>
            <strong>{reaction.name}:</strong> {reaction.desc}
          </div>
        ))}
      </div>
    }
  >
    <span className={style.Reactions}>Reactions</span>
  </Tooltip>
  )

};
