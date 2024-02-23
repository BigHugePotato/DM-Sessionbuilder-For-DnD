import { CardContainer } from "../../components/Card-Display/Card-Container";
import { SideBar } from "../../components/Sidebar/Sidebar";
import { InitiativeBar } from "../../components/Initiative-Bar/Initiative-Bar"
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
