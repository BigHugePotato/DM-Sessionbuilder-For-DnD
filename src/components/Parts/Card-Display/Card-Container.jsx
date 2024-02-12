import { UnitDisplayCard } from "./Display-Cards/Unit-Display-Card"
import style from "./Card-Container.module.css";
import { monsters } from "../../../assets/Mock-Data-Monsters";

export function CardContainer() {
  return (
    <div className={style.cardContainer}>
      {monsters.map((monster, index) => (
        <UnitDisplayCard key={index} monster={monster} />
      ))}
    </div>
  );
}
