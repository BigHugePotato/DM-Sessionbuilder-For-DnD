import { CardContainer } from "../../Parts/Card-Display/Card-Container";
import { SideBar } from "../../Parts/Sidebar/Sidebar";
import style from "./Main-Layout.module.css";

export function CardSelectLayout() {
  return (
    <div className={style.CardSelectLayout}>
      <SideBar />
      <CardContainer></CardContainer>
    </div>
  );
}
