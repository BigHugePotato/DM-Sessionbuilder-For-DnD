import { Header } from "../../components/Layouts/Header/Header";
import { CardContainer } from "../../components/Parts/Card-Display/Card-Container";
import { SideBar } from "../../components/Parts/Sidebar/Sidebar";

export function CardSelectionPage() {
  return (
    <div>
      <Header />
      <main>
        <SideBar />
        <CardContainer></CardContainer>
      </main>
    </div>
  );
}
