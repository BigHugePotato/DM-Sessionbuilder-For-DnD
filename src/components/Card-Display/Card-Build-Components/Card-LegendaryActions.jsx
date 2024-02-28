import { Tooltip } from "../Tool-Tip/Tool-Tip";
import style from "../Display-Cards/Monster-Card.module.css";



export const CardLegendaryActions = ({ actions }) => (
    <Tooltip content={
      <div>
        {actions.map((action, index) => (
          <div key={index}>
            <strong>{action.name}:</strong> {action.desc}
          </div>
        ))}
      </div>
    }>
      <span className={style.LegendaryActions}>Legendary Actions</span>
    </Tooltip>
  );