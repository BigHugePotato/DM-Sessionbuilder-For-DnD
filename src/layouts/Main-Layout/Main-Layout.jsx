import { useState } from "react";
import { CardContainer } from "../../components/Card-Display/Card-Container";
import { SideBar } from "../../components/Sidebar/Sidebar";
import { InitiativeBar } from "../../components/Initiative-Bar/Initiative-Bar";
import style from "./Main-Layout.module.css";

export function MainLayout() {
  // State to keep track of the currently active tab
  const [activeTab, setActiveTab] = useState("Monsters");

  // Function to change the active tab
  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={style.MainLayout}>
      <SideBar />
      <div>
        {/* Tab navigation */}
        <div className={style.tabs}>
          <button
            className={activeTab === "Monsters" ? "active" : ""}
            onClick={() => changeTab("Monsters")}>
            Monsters
          </button>
          <button
            className={activeTab === "Spells" ? "active" : ""}
            onClick={() => changeTab("Spells")}>
            Spells
          </button>
          <button
            className={activeTab === "NPCs" ? "active" : ""}
            onClick={() => changeTab("NPCs")}>
            NPCs
          </button>
          {/* Add more tabs as needed */}
        </div>
        {/* Conditional rendering based on the active tab */}
        {activeTab === "Monsters" && <CardContainer category="monsters" />}
        {activeTab === "Spells" && <div>Spells content here</div>}{" "}
        {/* Placeholder */}
        {activeTab === "NPCs" && <div>NPCs content here</div>}{" "}
        {/* Placeholder */}
        {/* Add more conditions for other categories */}
      </div>
      <InitiativeBar />
    </div>
  );
}
