import { GiWalk } from "react-icons/gi";
import { GiBatWing } from "react-icons/gi";
import { TbSwimming } from "react-icons/tb";
import style from "../Display-Cards/Monster-Card.module.css";



const displaySpeed = (speedType, Icon) => {
  if (typeof speedType === "number" && !isNaN(speedType)) {
    return (
      <div className={style.speedItem}>
        <Icon /> : {speedType}
      </div>
    );
  }
  return null;
};

export const CardSpeed = ({ speed }) => {
  if (!speed) return null;

  return (
    <div className={style.speedContainer}>
      {displaySpeed(speed.walk, GiWalk)}
      {displaySpeed(speed.fly, GiBatWing)}
      {displaySpeed(speed.swim, TbSwimming)}
    </div>
  );
};
