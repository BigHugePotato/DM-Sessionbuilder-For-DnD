import { Header } from "../../components/Header/Header";
import { CardContainer } from "../components/Main/Card-Display/Card-Container";
import { SideBar } from "../components/Main/Sidebar/Sidebar";
import { DisplayCard } from "../components/Display-Cards/Display-Card";

export function CardSelectionPage() {
  return (
    <div>
      <Header />
      <main>
        <SideBar />
        <CardContainer>
          <DisplayCard />
        </CardContainer>
      </main>
    </div>
  );
}

