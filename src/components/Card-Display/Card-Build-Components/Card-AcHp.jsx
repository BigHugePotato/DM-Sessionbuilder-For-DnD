import { MdShield } from "react-icons/md";
import style from "../Display-Cards/Monster-Card.module.css";

export const CardAcHp = ({armorClass, hitPoints}) => (
    <div className={style.acHpContainer}>
          <div className={style.ac}>
            <MdShield /> {armorClass || "N/A"}
          </div>
          <div className={style.hp}>HP: {hitPoints || "N/A"}</div>
    </div>
);