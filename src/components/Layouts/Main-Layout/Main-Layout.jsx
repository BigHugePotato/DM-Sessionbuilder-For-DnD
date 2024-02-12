import { CardContainer } from "../../Parts/Card-Display/Card-Container";
import { SideBar } from "../../Parts/Sidebar/Sidebar";
import { InitiativeBar } from "../../Parts/Initiative-Bar/Initiative-Bar"
import style from "./Main-Layout.module.css";

export function MainLayout() {
  return (
    <div className={style.MainLayout}>
      <SideBar />
      <CardContainer></CardContainer>
      <InitiativeBar />
    </div>
  );
}
