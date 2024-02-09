import { Header } from "../components/Header/Header";
import { CardContainer } from "../components/Main/Card-Display/Card-Container";
import { SideBar } from "../components/Main/Sidebar/Sidebar";
import { InitiativeBar } from "../components/Main/Initiative-Bar/Initiative-Bar";
import { DisplayCard } from "../components/Display-Cards/Display-Card";

export function MainPage() {
  return (
    <div>
      <Header />
      <main style={{ display: "flex", justifyContent: "center" }}>
        <SideBar />
        <CardContainer>
          <DisplayCard />
        </CardContainer>
        <InitiativeBar />
      </main>
    </div>
  );
}

